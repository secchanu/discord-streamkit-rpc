type IncomingPayloadDispatchReady = {
  cmd: "DISPATCH";
  data: {
    config: {
      cdn_host: "cdn.discordapp.com";
      api_endpoint: "//discord.com/api";
      environment: "production";
    };
    v: number;
  };
  evt: "READY";
  nonce: null;
};

type IncomingPayloadDispatchVoiceState = {
  cmd: "DISPATCH";
  data: {
    mute: boolean;
    nick: string;
    pan: {
      left: number;
      right: number;
    };
    user: {
      avatar: string;
      avatar_decoration: null;
      bot: boolean;
      discriminator: string;
      flags: number;
      id: string;
      username: string;
    };
    voice_state: {
      deaf: boolean;
      mute: boolean;
      self_deaf: boolean;
      self_mute: boolean;
      suppress: boolean;
    };
    volume: number;
  };
  evt: "VOICE_STATE_CREATE" | "VOICE_STATE_DELETE" | "VOICE_STATE_UPDATE";
  nonce: null;
};

type IncomingPayloadDispatchSpeaking = {
  cmd: "DISPATCH";
  data: {
    channel_id: string;
    user_id: string;
  };
  evt: "SPEAKING_START" | "SPEAKING_STOP";
  nonce: null;
};

type IncomingPayloadDispatch =
  | IncomingPayloadDispatchReady
  | IncomingPayloadDispatchVoiceState
  | IncomingPayloadDispatchSpeaking;

type IncomingPayloadAuthenticate = {
  cmd: "AUTHENTICATE";
  data: {
    access_token: string;
    application: {
      description: string;
      flags: number;
      hook: boolean;
      icon: string;
      id: string;
      name: string;
      rpc_origins: string[];
      summary: string;
      type: null;
      verify_key: string;
    };
    expires: string;
    scopes: string[];
    user: {
      avatar: string;
      avatar_decoration: null;
      discriminator: string;
      id: string;
      public_flags: number;
      username: string;
    };
  };
  evt: null;
  nonce: string;
};

type IncomingPayloadAuthorize = {
  cmd: "AUTHORIZE";
  data: {
    code: string;
  };
  evt: null;
  nonce: string;
};

type IncomingPayloadGetGuilds = {
  cmd: "GET_GUILDS";
  data: {
    guilds: {
      icon_url?: string;
      id: string;
      name: string;
    }[];
  };
  evt: null;
  nonce: string;
};

type IncomingPayloadGetChannels = {
  cmd: "GET_CHANNELS";
  data: {
    channels: {
      id: string;
      name: string;
      type: number;
    }[];
  };
  evt: null;
  nonce: string;
};

type IncomingPayloadGetGuild = {
  cmd: "GET_GUILD";
  data: {
    icon_url: string | null;
    id: string;
    members: [];
    name: string;
    vanity_url_code: string | null;
  };
  evt: null;
  nonce: string;
};

type IncomingPayloadGetChannel = {
  cmd: "GET_CHANNEL";
  data: {
    bitrate: number;
    guild_id: string;
    id: string;
    messages: []; //TODO for chat
    name: string;
    position: number;
    topic: string;
    type: number;
    user_limit: number;
    voice_states: {
      mute: boolean;
      nick: string;
      pan: {
        left: number;
        right: number;
      };
      user: {
        avatar: string;
        avatar_decoration: null;
        bot: boolean;
        discriminator: string;
        flags: number;
        id: string;
        username: string;
      };
      voice_state: {
        deaf: boolean;
        mute: boolean;
        self_deaf: boolean;
        self_mute: boolean;
        suppress: boolean;
      };
      volume: number;
    }[];
  };
  evt: null;
  nonce: string;
};

type IncomingPayloadCreateChannelInvite = {
  cmd: "CREATE_CHANNEL_INVITE";
  data: {
    code: number;
    message: string;
  };
  evt: "ERROR";
  nonce: string;
};

type IncomingPayloadSelectVoiceChannel = {
  cmd: "SELECT_VOICE_CHANNEL";
  data: {
    bitrate: number;
    guild_id: string;
    id: string;
    messages: [];
    name: string;
    position: number;
    topic: string;
    type: number;
    user_limit: number;
    voice_states: {
      mute: boolean;
      nick: string;
      pan: {
        left: number;
        right: number;
      };
      user: {
        avatar: string;
        avatar_decoration: null;
        bot: boolean;
        discriminator: string;
        flags: number;
        id: string;
        username: string;
      };
      voice_state: {
        deaf: boolean;
        mute: boolean;
        self_deaf: boolean;
        self_mute: boolean;
        suppress: boolean;
      };
      volume: number;
    }[];
  } | null;
  evt: null | "ERROR";
  nonce: string;
};

type IncomingPayloadSubscribe = {
  cmd: "SUBSCRIBE";
  data: {
    evt:
      | "VOICE_STATE_CREATE"
      | "VOICE_STATE_DELETE"
      | "VOICE_STATE_UPDATE"
      | "SPEAKING_START"
      | "SPEAKING_STOP";
  };
  evt: null;
  nonce: string;
};

type IncomingPayload =
  | IncomingPayloadDispatch
  | IncomingPayloadAuthorize
  | IncomingPayloadAuthenticate
  | IncomingPayloadGetGuilds
  | IncomingPayloadGetChannels
  | IncomingPayloadGetGuild
  | IncomingPayloadGetChannel
  | IncomingPayloadCreateChannelInvite
  | IncomingPayloadSelectVoiceChannel
  | IncomingPayloadSubscribe;
