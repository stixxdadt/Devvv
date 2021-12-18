module.exports = (app) => {
    app.get("/content/api/pages/fortnite-game", (req, res) => {
        res.json({
            _title: 'Fortnite Game',
            _activeDate: new Date(),
            lastModified: new Date(),
            _locale: 'en-US',
            battleroyalenews: {
                news: {
                    motds: [
                        {
                            entryType: "Website",
                            image: "https://i.imgur.com/bD0hQr1.png",
                            tileImage: "https://i.imgur.com/hLT4rHk.png",
                            hidden: false,
                            tabTitleOverride: "ZeroTwo Private server",
                            _type: "CommonUI Simple Message MOTD",
                            title: "Welcome!",
                            body: "Made by iAreX.",
                            videoStreamingEnabled: false,
                            sortingPriority: 20,
                            id: "Fortnite-Dev-Welcome",
                            videoFullscreen: false,
                            spotlight: false,
                            websiteURL: "https://discord.gg/DK23jk6",
                            websiteButtonText: "Join our Discord!"
                        }
                    ]
                },
                "jcr:isCheckedOut": true,
                _title: "battleroyalenews",
                header: "",
                style: "None",
                _noIndex: false,
                alwaysShow: false,
                "jcr:baseVersion": "a7ca237317f1e74e4b8154-226a-4450-a3cd-c77af841e798",
                _activeDate: "2020-01-21T14:00:00.000Z",
                lastModified: new Date(),
                _locale: "en-US"
            },
            emergencynotice: {
                news: {
                    platform_messages: [],
                    _type: 'Battle Royale News',
                    messages: [
                        {
                            hidden: false,
                            _type: 'CommonUI Simple Message Base',
                            subgame: 'br',
                            title: "ZeroTwo private server",
                            body: "Made by iAreX \nDiscord: https://discord.gg/DK23jk6",
                            spotlight: true
                        }
                    ]
                },
                _title: 'emergencynotice',
                _activeDate: "2019-12-03T00:51:35.524Z",
                lastModified: new Date(),
                _locale: 'en-US'
            }
        })
    })
}