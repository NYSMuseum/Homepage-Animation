/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'gothambold': ''        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'mainHolder',
                            type: 'group',
                            rect: ['0px', '0px', '400px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'sliderHolder',
                                type: 'rect',
                                rect: ['0', '0px', '400px', '400px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '400px', '400px', 'auto', 'auto'],
                            sizeRange: ['null','','undefined','undefined'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "MainContainerSymbol": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0', '0', '800px', '200px', 'auto', 'auto'],
                            fill: ['rgba(255,0,0,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800', '200']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "PageButtonSymbol": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            userClass: '',
                            rect: ['0', '0', '20', '20', 'auto', 'auto'],
                            borderRadius: ['90.3% 90.3%', '90.3%', '90.3% 90.3%', '90.3% 90.3%'],
                            type: 'ellipse',
                            id: 'btn',
                            stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                            cursor: 'pointer',
                            fill: ['rgba(127,119,119,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '20', '20']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid213",
                            "border-top-right-radius",
                            0,
                            0,
                            "linear",
                            "${btn}",
                            [90.3,90.3],
                            [90.3,90.3],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid214",
                            "border-bottom-right-radius",
                            0,
                            0,
                            "linear",
                            "${btn}",
                            [90.3,90.3],
                            [90.3,90.3],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid212",
                            "border-top-left-radius",
                            0,
                            0,
                            "linear",
                            "${btn}",
                            [90.3,90.3],
                            [90.3,90.3],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid211",
                            "border-bottom-left-radius",
                            0,
                            0,
                            "linear",
                            "${btn}",
                            [90.3,90.3],
                            [90.3,90.3],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "PageButtonContainerSymbol": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '20', '20']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "SlideSymbol1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1000px', '400px', 'auto', 'auto'],
                            stroke: [0, 'rgb(255, 255, 255)', 'solid'],
                            overflow: 'auto',
                            id: 'Rectangle2',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(127,159,184,1.00)']
                        },
                        {
                            rect: ['14px', '0', '621px', '400px', 'auto', 'auto'],
                            id: 'stpauls',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/stpauls.jpg', '0px', '0px']
                        },
                        {
                            rect: ['475px', '95px', '500px', '129px', 'auto', 'auto'],
                            id: 'title2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/title2.png', '0px', '0px']
                        },
                        {
                            rect: ['663px', '317px', '300px', '60px', 'auto', 'auto'],
                            id: 'nysmcredit',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/nysmcredit.png', '0px', '0px']
                        },
                        {
                            rect: ['1px', '1px', '1000px', '400px', 'auto', 'auto'],
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(41,47,85,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1000px', '400px'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: false,
                    data: [
                        [
                            "eid225",
                            "opacity",
                            500,
                            675,
                            "easeOutCubic",
                            "${stpauls}",
                            '0',
                            '1'
                        ],
                        [
                            "eid233",
                            "opacity",
                            1175,
                            825,
                            "easeOutCubic",
                            "${title2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid425",
                            "top",
                            2208,
                            0,
                            "easeOutCubic",
                            "${Rectangle2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid229",
                            "left",
                            500,
                            7500,
                            "easeOutCubic",
                            "${stpauls}",
                            '-10px',
                            '14px'
                        ],
                        [
                            "eid226",
                            "left",
                            0,
                            0,
                            "easeOutCubic",
                            "${Rectangle2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid227",
                            "width",
                            0,
                            0,
                            "easeOutCubic",
                            "${Rectangle2}",
                            '1000px',
                            '1000px'
                        ],
                        [
                            "eid223",
                            "opacity",
                            0,
                            500,
                            "easeOutCubic",
                            "${Rectangle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid239",
                            "opacity",
                            2500,
                            500,
                            "easeOutCubic",
                            "${nysmcredit}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "SlideSymbol0": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1px', '0px', '1000px', '400px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(243,249,254,1.00)']
                        },
                        {
                            rect: ['0', '0px', '1000px', '400px', 'auto', 'auto'],
                            id: 'sky',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sky.png', '0px', '0px']
                        },
                        {
                            id: 'play',
                            type: 'image',
                            rect: ['392px', '80px', '1000px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/play.png', '0px', '0px']
                        },
                        {
                            id: 'hills',
                            type: 'image',
                            rect: ['0px', '220px', '1000px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/hills.png', '0px', '0px']
                        },
                        {
                            id: 'floor',
                            type: 'image',
                            rect: ['1px', '123px', '1000px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/floor.png', '0px', '0px']
                        },
                        {
                            rect: ['-269px', '-65px', '693px', '277px', 'auto', 'auto'],
                            transform: [[], ['-19']],
                            id: 'cloud3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cloud.png', '0px', '0px']
                        },
                        {
                            id: 'emit',
                            type: 'image',
                            rect: ['-350px', '0', '1000px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/emit.png', '0px', '0px']
                        },
                        {
                            rect: ['172px', '-205px', '526px', '211px', 'auto', 'auto'],
                            id: 'cloud2',
                            transform: [[], ['171']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cloud.png', '0px', '0px']
                        },
                        {
                            rect: ['429px', '-175px', '692px', '277px', 'auto', 'auto'],
                            id: 'cloud',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cloud.png', '0px', '0px']
                        },
                        {
                            rect: ['876px', '307px', '109px', '88px', 'auto', 'auto'],
                            id: 'food-panty',
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/food-panty.png', '0px', '0px']
                        },
                        {
                            rect: ['140px', '109px', '1000px', '400px', 'auto', 'auto'],
                            id: 'can_text',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/can_text.png', '0px', '0px']
                        },
                        {
                            rect: ['30px', '0px', '1000px', '400px', 'auto', 'auto'],
                            id: 'logo',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/logo.png', '0px', '0px']
                        },
                        {
                            rect: ['1px', '0px', '1000px', '400px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(41,47,85,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '400px', '400px'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: false,
                    data: [
                        [
                            "eid336",
                            "top",
                            1179,
                            571,
                            "easeOutBounce",
                            "${cloud2}",
                            '-205px',
                            '-95px'
                        ],
                        [
                            "eid294",
                            "top",
                            903,
                            695,
                            "easeOutBounce",
                            "${cloud}",
                            '-175px',
                            '-11px'
                        ],
                        [
                            "eid325",
                            "top",
                            2422,
                            757,
                            "easeOutCubic",
                            "${play}",
                            '80px',
                            '0px'
                        ],
                        [
                            "eid368",
                            "scaleY",
                            3000,
                            647,
                            "easeOutBounce",
                            "${food-panty}",
                            '0',
                            '1'
                        ],
                        [
                            "eid316",
                            "left",
                            903,
                            948,
                            "easeInOutQuad",
                            "${emit}",
                            '-350px',
                            '0px'
                        ],
                        [
                            "eid366",
                            "scaleX",
                            3000,
                            647,
                            "easeOutBounce",
                            "${food-panty}",
                            '0',
                            '1'
                        ],
                        [
                            "eid286",
                            "top",
                            250,
                            929,
                            "easeOutElastic",
                            "${floor}",
                            '123px',
                            '0px'
                        ],
                        [
                            "eid383",
                            "top",
                            1750,
                            0,
                            "linear",
                            "${cloud3}",
                            '-65px',
                            '-65px'
                        ],
                        [
                            "eid380",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${logo}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid388",
                            "opacity",
                            3250,
                            579,
                            "linear",
                            "${can_text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid295",
                            "left",
                            903,
                            695,
                            "easeInBounce",
                            "${cloud}",
                            '462px',
                            '461px'
                        ],
                        [
                            "eid375",
                            "left",
                            1598,
                            6402,
                            "easeOutQuad",
                            "${cloud}",
                            '461px',
                            '429px'
                        ],
                        [
                            "eid377",
                            "left",
                            1750,
                            6250,
                            "easeOutQuad",
                            "${cloud2}",
                            '153px',
                            '172px'
                        ],
                        [
                            "eid386",
                            "left",
                            1750,
                            6250,
                            "linear",
                            "${cloud3}",
                            '-297px',
                            '-269px'
                        ],
                        [
                            "eid307",
                            "top",
                            653,
                            446,
                            "easeOutCubic",
                            "${hills}",
                            '220px',
                            '-5px'
                        ],
                        [
                            "eid288",
                            "left",
                            250,
                            929,
                            "easeOutCubic",
                            "${floor}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid342",
                            "opacity",
                            1250,
                            500,
                            "linear",
                            "${cloud3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid327",
                            "left",
                            2422,
                            757,
                            "easeOutCubic",
                            "${play}",
                            '392px',
                            '22px'
                        ],
                        [
                            "eid310",
                            "opacity",
                            1922,
                            500,
                            "easeInOutQuad",
                            "${logo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid284",
                            "opacity",
                            0,
                            653,
                            "easeOutCubic",
                            "${sky}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "SlideSymbol34": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-8px', '0px', '1047px', '400px', 'auto', 'auto'],
                            filter: [0, 0, 1, 0.91877140410959, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'A-State-of-Change',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/A-State-of-Change.jpg', '0px', '0px']
                        },
                        {
                            rect: ['21px', '0px', '550px', '400px', 'auto', 'auto'],
                            transform: [[], [], ['31']],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle2',
                            opacity: '0.8799225101626',
                            type: 'rect',
                            fill: ['rgba(34,187,237,1.00)']
                        },
                        {
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['32px', '-36px', '516px', '521px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 209.09139951941, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'EllipseCopy',
                            opacity: '1',
                            type: 'ellipse',
                            fill: ['rgba(41,47,85,1.00)']
                        },
                        {
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['103px', '-9px', '464px', '468px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 210.05458047945, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'Ellipse',
                            opacity: '0.56494537601626',
                            type: 'ellipse',
                            fill: ['rgba(14,79,100,1.00)']
                        },
                        {
                            rect: ['41px', '176px', '556px', '87px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', ''],
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: gothambold; font-size: 69px;\">We\'ve Been Busy</span></p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1000px', '400px'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 676,
                    autoPlay: false,
                    data: [
                        [
                            "eid419",
                            "left",
                            676,
                            0,
                            "easeOutCubic",
                            "${A-State-of-Change}",
                            '-8px',
                            '-8px'
                        ]
                    ]
                }
            },
            "SlideSymbol3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'WatermanLR',
                            type: 'image',
                            rect: ['1012px', '0', '778px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/WatermanLR.jpg', '0px', '0px']
                        },
                        {
                            rect: ['-898px', '0px', '710px', '400px', 'auto', 'auto'],
                            transform: [[], [], ['-41']],
                            id: 'Rectangle6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(239,119,35,1.00)']
                        },
                        {
                            rect: ['-213px', '567px', '477px', '58px', 'auto', 'auto'],
                            id: 'represent-b',
                            transform: [[], ['-48']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/represent-b.png', '0px', '0px']
                        },
                        {
                            id: 'represent',
                            type: 'image',
                            rect: ['615px', '-403px', '365px', '411px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/represent.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '1px', '1000px', '400px', 'auto', 'auto'],
                            id: 'Rectangle7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(239,119,35,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1000px', '400px'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid429",
                            "left",
                            0,
                            1000,
                            "easeOutCubic",
                            "${WatermanLR}",
                            '1012px',
                            '222px'
                        ],
                        [
                            "eid431",
                            "top",
                            500,
                            1000,
                            "easeOutCubic",
                            "${represent}",
                            '-403px',
                            '-3px'
                        ],
                        [
                            "eid435",
                            "top",
                            1000,
                            1000,
                            "easeOutCubic",
                            "${represent-b}",
                            '567px',
                            '142px'
                        ],
                        [
                            "eid433",
                            "left",
                            500,
                            1000,
                            "easeOutCubic",
                            "${represent}",
                            '615px',
                            '265px'
                        ],
                        [
                            "eid437",
                            "left",
                            1000,
                            1000,
                            "easeOutCubic",
                            "${represent-b}",
                            '-213px',
                            '160px'
                        ],
                        [
                            "eid427",
                            "left",
                            0,
                            1000,
                            "easeOutCubic",
                            "${Rectangle6}",
                            '-898px',
                            '-198px'
                        ]
                    ]
                }
            },
            "SlideSymbol2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1000px', '400px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [89, [['rgba(255,255,255,1.00)', 0], ['rgba(255,255,255,1.00)', 100]]]]
                        },
                        {
                            rect: ['4px', '0px', '606px', '400px', 'auto', 'auto'],
                            id: 'imagingamericanwest2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/imagingamericanwest.png', '0px', '0px']
                        },
                        {
                            rect: ['586px', '247px', '300px', '62px', 'auto', 'auto'],
                            id: 'imaging_sub',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/imaging_sub.png', '0px', '0px']
                        },
                        {
                            rect: ['653px', '36px', '200px', '201px', 'auto', 'auto'],
                            id: 'imaging_title',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/imaging_title.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '1px', '1000px', '400px', 'auto', 'auto'],
                            id: 'Rectangle5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(34,187,237,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1000px', '400px'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: false,
                    data: [
                        [
                            "eid401",
                            "left",
                            500,
                            7500,
                            "easeOutCubic",
                            "${imagingamericanwest2}",
                            '4px',
                            '34px'
                        ],
                        [
                            "eid391",
                            "background-image",
                            0,
                            1000,
                            "easeOutCubic",
                            "${Rectangle}",
                            [89,[['rgba(255,255,255,1.00)',0],['rgba(255,255,255,1.00)',100]]],
                            [89,[['rgba(151,183,194,1.00)',0],['rgba(78,152,163,1.00)',100]]]
                        ],
                        [
                            "eid393",
                            "opacity",
                            500,
                            1546,
                            "easeOutCubic",
                            "${imagingamericanwest2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid395",
                            "opacity",
                            1279,
                            767,
                            "easeOutCubic",
                            "${imaging_title}",
                            '0',
                            '1'
                        ],
                        [
                            "eid397",
                            "opacity",
                            1619,
                            767,
                            "easeOutCubic",
                            "${imaging_sub}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("indexiphone_edgeActions.js");
})("EDGE-351832807");
