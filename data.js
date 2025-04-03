
const dataMockups = [
    { name: "leaderboard", data: undefined },
    { name: "schedule", data: undefined },
    { name: "tour-schedule", data: undefined },
    {
        name: "scoreboard", data: 
        {
            "events":[
                {
                    "id": 1,
                    "date": "2025-03-29",
                    "endaDate": "2025-03-31",
                    "name": "Event 1",
                    "competitions": [
                        {
                            "id": 1,
                            "competitors": [
                                {
                                    "id": 1,
                                    "athlete": {
                                        "displayName": "Athlete 1",
                                        "flag": {
                                            "href": "https://example.com/flag1.png",
                                            "alt": "Flag 1"
                                        },
                                        "score": 10,
                                        "linescores": [{
                                            "value": 10,
                                        }]
                                    }
                                },
                                {
                                    "id": 2,
                                    "athlete": {
                                        "displayName": "Athlete 2",
                                        "flag": {
                                            "href": "https://example.com/flag2.png",
                                            "alt": "Flag 2"
                                        },
                                        "score": 20,
                                        "linescores": [{
                                            "value": 20,
                                        }]
                                    }
                                }
                            ]
                        }
                    ],
                    "links": [{
                        "href": "https://example.com/event1"
                    }],
                    "status": {
                        "type": {
                            "detail": "Round 4"
                        }
                    }
                }
            ]
        }
    },
    { name: "rankings", data: undefined },
       { name: "news", data: 
            [
                {
                    "description": "subtitulo1",
                    "headline": "titulo1",
                    "images": [
                        {
                            "height": 200,
                            "width": 320,
                            "url": "http://placehold.co/800x600",
                            "alt": "alt"
                        }],
                    "lastModified": "2022-01-01T00:00:00Z",
                    "link": "https://example.com/news",
                    "published": "2022-01-01T00:00:00Z"
                },
                {
                    "description": "subtitulo2",
                    "headline": "titulo2",
                    "images": [
                        {
                            "height": 200,
                            "width": 320,
                            "url": "http://placehold.co/800x600",
                            "alt": "alt"
                        }],
                    "lastModified": "2022-01-01T00:00:00Z",
                    "link": "https://example.com/news",
                    "published": "2022-01-01T00:00:00Z"
                },
                {
                    "description": "subtitulo3",
                    "headline": "titulo3",
                    "images": [
                        {
                            "height": 200,
                            "width": 320,
                            "url": "http://placehold.co/800x600",
                            "alt": "alt"
                        }],
                    "lastModified": "2022-01-01T00:00:00Z",
                    "link": "https://example.com/news",
                    "published": "2022-01-01T00:00:00Z"
                },
                {
                    "description": "subtitulo4",
                    "headline": "titulo4",
                    "images": [
                        {
                            "height": 200,
                            "width": 320,
                            "url": "http://placehold.co/800x600",
                            "alt": "alt"
                        }],
                    "lastModified": "2022-01-01T00:00:00Z",
                    "link": "https://example.com/news",
                    "published": "2022-01-01T00:00:00Z"
                },
                {
                    "description": "subtitulo5",
                    "headline": "titulo5",
                    "images": [
                        {
                            "height": 200,
                            "width": 320,
                            "url": "http://placehold.co/800x600",
                            "alt": "alt"
                        }],
                    "lastModified": "2022-01-01T00:00:00Z",
                    "link": "https://example.com/news",
                    "published": "2022-01-01T00:00:00Z"
                },
                {
                    "description": "subtitulo6",
                    "headline": "titulo6",
                    "images": [
                        {
                            "height": 200,
                            "width": 320,
                            "url": "http://placehold.co/800x600",
                            "alt": "alt"
                        }],
                    "lastModified": "2022-01-01T00:00:00Z",
                    "link": "https://example.com/news",
                    "published": "2022-01-01T00:00:00Z"
                },
                {
                    "description": "subtitulo7",
                    "headline": "titulo7",
                    "images": [
                        {
                            "height": 200,
                            "width": 320,
                            "url": "http://placehold.co/800x600",
                            "alt": "alt"
                        }],
                    "lastModified": "2022-01-01T00:00:00Z",
                    "link": "https://example.com/news",
                    "published": "2022-01-01T00:00:00Z"
                },

            ]
        },
    { name: "standings", data: undefined }
]

const urls=[
    {
      "url": "https://live-golf-data1.p.rapidapi.com/leaderboard?league=all", 
      "fileName": "./scrapped_data/leaderboard-league_all.json"
    },
    // {
    //   "url": "https://live-golf-data1.p.rapidapi.com/leaderboard?league=lpga",
    //   "fileName": "./scrapped_data/leaderboard-league_lpga.json"
    // },
    // {
    //   "url": "https://live-golf-data1.p.rapidapi.com/leaderboard?league=champions-tour",
    //   "fileName": "./scrapped_data/leaderboard-league_champions-tour.json"
    // },
    // {
    //   "url": "https://live-golf-data1.p.rapidapi.com/leaderboard?league=liv",
    //   "fileName": "./scrapped_data/leaderboard-league_liv.json"
    // },
    // {
    //   "url": "https://live-golf-data1.p.rapidapi.com/leaderboard?league=eur",
    //   "fileName": "./scrapped_data/leaderboard-league_eur.json"
    // },
    // {
    //   "url": "https://live-golf-data1.p.rapidapi.com/leaderboard?league=ntw",
    //   "fileName": "./scrapped_data/leaderboard-league_ntw.json"
    // },
    // {
    //   "url": "https://live-golf-data1.p.rapidapi.com/leaderboard?",
    //   "fileName": "./scrapped_data/leaderboard.json"
    // },
    {
      "url": "https://live-golf-data1.p.rapidapi.com/schedule?season=2025",
      "fileName": "./scrapped_data/schedule_season.json"
    },
    // {
    //   "url": "https://live-golf-data1.p.rapidapi.com/scoreboard?year=2025&month=3&day=27&league=all",
    //   "fileName": "./scrapped_data/scoreboard-league_all.json"
    // },
    {
      "url": "https://live-golf-data1.p.rapidapi.com/scoreboard?year=2025&month=3&day=27&league=lpga",
      "fileName": "./scrapped_data/scoreboard-league_lpga.json"
    },
    // {
    //   "url": "https://live-golf-data1.p.rapidapi.com/scoreboard?year=2025&month=3&day=27&league=champions-tour",
    //   "fileName": "./scrapped_data/scoreboard-league_champions-tour.json"
    // },
    // {
    //   "url": "https://live-golf-data1.p.rapidapi.com/scoreboard?year=2025&month=3&day=27&league=liv",
    //   "fileName": "./scrapped_data/scoreboard-league_liv.json"
    // },
    // {
    //   "url": "https://live-golf-data1.p.rapidapi.com/scoreboard?year=2025&month=3&day=27&league=eur",
    //   "fileName": "./scrapped_data/scoreboard-league_eur.json"
    // },
    // {
    //   "url": "https://live-golf-data1.p.rapidapi.com/scoreboard?year=2025&month=3&day=27&league=ntw",
    //   "fileName": "./scrapped_data/scoreboard-league_ntw.json"
    // },
    // {
    //   "url": "https://live-golf-data1.p.rapidapi.com/scoreboard?year=2025&month=3&day=27",
    //   "fileName": "./scrapped_data/scoreboard_date.json"
    // },
    {
      "url": "https://live-golf-data1.p.rapidapi.com/rankings",
      "fileName": "./scrapped_data/rankings.json"
    },
    {
      "url": "https://live-golf-data1.p.rapidapi.com/news?league=all",
      "fileName": "./scrapped_data/news-league_all.json"
    },
    {
      "url": "https://live-golf-data1.p.rapidapi.com/news?league=lpga",
      "fileName": "./scrapped_data/news-league_lpga.json"
    },
    {
      "url": "https://live-golf-data1.p.rapidapi.com/news?league=champions-tour",
      "fileName": "./scrapped_data/news-league_champions-tour.json"
    },
    {
      "url": "https://live-golf-data1.p.rapidapi.com/news?league=liv",
      "fileName": "./scrapped_data/news-league_liv.json"
    },
    {
      "url": "https://live-golf-data1.p.rapidapi.com/news?league=eur",
      "fileName": "./scrapped_data/news-league_eur.json"
    },
    {
      "url": "https://live-golf-data1.p.rapidapi.com/news?league=ntw",
      "fileName": "./scrapped_data/news-league_ntw.json"
    },
    {
      "url": "https://live-golf-data1.p.rapidapi.com/standings",
      "fileName": "./scrapped_data/standings.json"
    }
  ];



export { dataMockups, urls }