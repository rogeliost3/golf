
    EP = {
        EVENTS: "/events",
        LEADERBOARD: "/leaderboard",
        SCHEDULE: "/schedule",
        TOUR_SCHEDULE: "/tour-schedule",
        SCOREBOARD: "/scoreboard",
        RANKINGS: "/rankings",
        NEWS : "/news", 
            PARAMS : {	
                LEAGUE: "league",
                LIMIT: "limit" //Defaults to 7 news items if not provided.
            },
        VIDEOCLIP: "/video",
        STANDINGS: "/standings",
    },

    PLAYER = {
        OVERVIEW: "/player-overview",
        LEADERBOARD: "/player-leaderboard",
        STATS: "/player-stats",
        RESULTS: "/player-results",
        SCORECARD: "/player-scorecard",
        INFO: "player-info",
    },

	LEAGUES = {
		LPGA: "lpga", // The Chevron Championship
		CHAMPIONS: "champions-tour", // PGA Tour Champions
		LIV: "liv", // LIV
		EUR: "eur", // DP World
		NTW: "ntw", // Korn Ferry
		ANWA: "anwa", // Augusta National Women's Amateur
		ALL_LEAGUES: "all" // For all the leagues
	}

    export {
        URL_BASE,
        EP,
        LEAGUES,
        PLAYER
    }