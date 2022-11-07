# Discord-RPC (streamkit)

### Example

```javascript
import { Client } from "discord-streamkit-rpc";

const client = new Client();

client.on("ready", () => {
  console.log("Logged in as", client.application.name);
  console.log("Authed for user", client.user.username);

  client.selectVoiceChannel("VOICE_CHANNEL_ID");
});

// Log in to RPC with streamkit
client.streamkit();
```
