import { Client as RPC, RPCClientOptions } from "discord-rpc";
import { launch } from "puppeteer";

export class Client extends RPC {
  constructor(options?: RPCClientOptions) {
    super({ transport: "ipc", ...options });
  }

  async streamkit() {
    return new Promise<this>(async (resolve) => {
      const browser = await launch({ headless: "new" });
      const page = await browser.newPage();
      page.on("console", async (message) => {
        const json = (await message.args()[1]?.jsonValue()) as
          | IncomingPayload
          | undefined;
        if (!json) return;
        const { cmd, data, evt } = json;
        if (cmd === "AUTHENTICATE") {
          if (evt) {
            await initPage();
            return;
          }
          await browser.close();
          const clientId = data.application.id;
          const accessToken = data.access_token;
          const scopes = data.scopes;
          await this.login({
            clientId,
            accessToken,
            scopes,
          });
          resolve(this);
        }
      });
      const initPage = async () => {
        await page.goto("https://streamkit.discord.com/overlay");
        const install = (
          await page.$x("//button[contains(., 'Install for OBS')]")
        )[0];
        await install.click();
      };
      await initPage();
    });
  }
}
