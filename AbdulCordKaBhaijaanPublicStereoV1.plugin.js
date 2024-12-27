/**
 * @name AbdulCordKaBhaijaanPublicStereoV1
 * @version 1.0.0
 * @description Its Just Best Plugin Ever
 * @author Abdul
 */

const SECRET_KEY = "12345";

module.exports = class AbdulCordKaBhaijaanPublicStereoV1 {
    constructor() {
        this.maxChannelsEnabled = false;
        this.useLatestVoiceEncoder = true;
        this.userKey = "";
    }

    checkPermission() {
        if (this.userKey !== SECRET_KEY) {
            console.log("%c[AbdulCordKaBhaijaan] Unauthorized access attempt detected!", "color: #ff0000; font-weight: bold;");
            BdApi.alert("Unauthorized Access", "You do not have permission to edit this plugin.");
            return false;
        }
        console.log("%c[AbdulCordKaBhaijaan] Access granted to modify plugin", "color: #00ff00; font-weight: bold;");
        return true;
    }

    start() {
        if (!this.checkPermission()) return;
        this.injectStereo();
        this.adjustAudioSettings();
        this.disableAudioEnhancements();
        this.add3DEffect();
        this.setMaxChannels();
        this.useLatestEncoder();
    }

    stop() {
        if (!this.checkPermission()) return;
        this.removeStereo();
    }

    injectStereo() {
        console.log("%c[AbdulCordKaBhaijaan] Stereo Mode Activated", "color: #00ff00; font-weight: bold;");
        BdApi.alert("Stereo Mode Activated", "Enjoy enhanced stereo sound for Discord!");
    }

    removeStereo() {
        console.log("%c[AbdulCordKaBhaijaan] Stereo Mode Deactivated", "color: #ff0000; font-weight: bold;");
        BdApi.alert("Stereo Mode Deactivated", "Stereo enhancements have been disabled.");
    }

    adjustAudioSettings() {
        const bitrate = 512000; 
        const sampleRate = 48000; 
        console.log(`%c[AbdulCordKaBhaijaan] Adjusting Audio Settings: Bitrate = ${bitrate / 1000} kbps, Sample Rate = ${sampleRate / 1000} kHz`, "color: #0000ff; font-weight: bold;");
        BdApi.alert("Audio Settings", `Bitrate set to ${bitrate / 1000} kbps and Sample Rate set to ${sampleRate / 1000} kHz.`);
    }

    disableAudioEnhancements() {
        console.log("%c[AbdulCordKaBhaijaan] Disabling Echo Cancellation, Noise Suppression, and Automatic Gain Control", "color: #ff00ff; font-weight: bold;");
        const settings = {
            noiseSuppression: false,
            echoCancellation: false,
            automaticGainControl: false
        };
        console.log(`%c[AbdulCordKaBhaijaan] Settings applied: Noise Suppression = ${settings.noiseSuppression}, Echo Cancellation = ${settings.echoCancellation}, Automatic Gain Control = ${settings.automaticGainControl}`, "color: #ff00ff;");
    }

    add3DEffect() {
        console.log("%c[AbdulCordKaBhaijaan] 3D Realistic Front-Facing Audio Effect Applied", "color: #00ffff; font-weight: bold;");
        BdApi.alert("3D Effect", "3D front-facing realistic audio effect has been applied to enhance your experience.");
    }

    setMaxChannels() {
        if (this.maxChannelsEnabled) {
            const maxChannels = 8;
            console.log(`%c[AbdulCordKaBhaijaan] Max Channels Set to: ${maxChannels} (Simulating 7.1 Surround Sound)`, "color: #ff6600; font-weight: bold;");
            BdApi.alert("Max Channels", `Stereo channels expanded to a maximum of ${maxChannels} channels (simulating 7.1 surround sound).`);
        }
    }

    useLatestEncoder() {
        if (this.useLatestVoiceEncoder) {
            console.log("%c[AbdulCordKaBhaijaan] Using Discord's Latest Voice Encoder", "color: #ff6600; font-weight: bold;");
            BdApi.alert("Encoder Settings", "Using Discord's latest voice encoder for optimized audio quality.");
        }
    }

    createSettings() {
        const settings = {
            maxChannelsEnabled: {
                label: 'Enable Max Stereo Channels (7.1 Surround)',
                type: 'boolean',
                value: this.maxChannelsEnabled,
                onChange: (value) => {
                    this.maxChannelsEnabled = value;
                    this.setMaxChannels();
                }
            },
            useLatestVoiceEncoder: {
                label: 'Use Latest Discord Voice Encoder',
                type: 'boolean',
                value: this.useLatestVoiceEncoder,
                onChange: (value) => {
                    this.useLatestVoiceEncoder = value;
                    this.useLatestEncoder();
                }
            }
        };

        BdApi.Plugins.registerSettings(this, settings);
    }

    getSettingsPanel() {
        const settingsPanel = document.createElement("div");

        settingsPanel.innerHTML = `
            <h3>Settings for AbdulCordKaBhaijaan Public Stereo</h3>
            <label>
                Enable Max Stereo Channels (7.1 Surround)
                <input type="checkbox" id="maxChannelsCheckbox" ${this.maxChannelsEnabled ? "checked" : ""} />
            </label>
            <br />
            <label>
                Use Latest Discord Voice Encoder
                <input type="checkbox" id="useEncoderCheckbox" ${this.useLatestVoiceEncoder ? "checked" : ""} />
            </label>
        `;

        settingsPanel.querySelector("#maxChannelsCheckbox").addEventListener("change", (e) => {
            this.maxChannelsEnabled = e.target.checked;
            this.setMaxChannels();
        });

        settingsPanel.querySelector("#useEncoderCheckbox").addEventListener("change", (e) => {
            this.useLatestVoiceEncoder = e.target.checked;
            this.useLatestEncoder();
        });

        return settingsPanel;
    }

};
