webpackJsonp([2, 0], [function(t, e, n) {
    "use strict";

    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var s = n(44),
        o = a(s),
        l = n(62),
        i = a(l),
        r = n(164),
        c = a(r),
        u = n(70),
        f = a(u),
        d = n(165),
        p = a(d),
        h = n(75),
        v = a(h),
        m = n(63),
        M = a(m);
    i.default.filter("number", function(t) {
        return "number" != typeof t || isNaN(t) ? t : t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }), i.default.use(c.default);
    var _ = new c.default({
        locale: (0, f.default)((0, o.default)(M.default)),
        fallbackLocale: "en",
        messages: M.default
    });
    new i.default({
        el: "#app",
        store: v.default,
        i18n: _,
        render: function(t) {
            return t(p.default)
        }
    })
}, , , , function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = (e.ANIMALS = [{
            key: "cow",
            maxLevel: 11,
            audioDuration: 300,
            winSoundDelay: 1200,
            hatPosition: {
                x: .69,
                y: .02
            }
        }, {
            key: "goat",
            maxLevel: 10,
            pointsRequired: 5,
            audioDuration: 300,
            winSoundDelay: 1200,
            hatPosition: {
                x: .25,
                y: .06
            }
        }, {
            key: "fox",
            maxLevel: 10,
            pointsRequired: 50,
            audioDuration: 300,
            winSoundDelay: 200,
            hatPosition: {
                x: .32,
                y: .04
            }
        }], e.HATS = [{
            key: "halloween",
            width: 134 / 300,
            test: function() {
                var t = new Date;
                return 9 === t.getMonth() && 31 === t.getDate()
            }
        }, {
            key: "christmas",
            width: .25,
            test: function() {
                var t = new Date;
                return 11 === t.getMonth() && 25 === t.getDate()
            }
        }, {
            key: "newYear",
            width: 61 / 300,
            test: function() {
                var t = new Date;
                return 11 === t.getMonth() && 31 === t.getDate() || 0 === t.getMonth() && 1 === t.getDate()
            }
        }], e.PAGE_WELCOME = "PAGE_WELCOME"),
        a = e.PAGE_GAME = "PAGE_GAME",
        s = e.PAGE_CONGRATULATIONS = "PAGE_CONGRATULATIONS",
        o = e.PAGE_UNSUPPORTED = "PAGE_UNSUPPORTED";
    e.PAGES = [n, a, s, o], e.STORAGE_KEY = "ftic_data", e.FIND_RADIUS = 40, e.TWEET_TEXT = "ðŸ® cow cow cow cow COW COW! COW! COW!! www.FindTheInvisibleCow.com by @scriptist"
}, , , , , , , , , , , , , , function(t, e) {
    "use strict";

    function n(t, e, n, a, s) {
        "ga" in window && window.ga("send", "event", t, e, n, a, s)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = n
}, , , , , , , function(t, e, n) {
    "use strict";

    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function s(t, e) {
        return "/static/sound/" + t + "/" + e + "." + h.default
    }

    function o() {
        var t = [];
        return d.ANIMALS.forEach(function(e) {
            for (var n = 0; n <= e.maxLevel; n += 1) t.push(s(e.key, n));
            t.push(s(e.key, "win"))
        }), t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var l = n(27),
        i = a(l),
        r = n(92),
        c = a(r),
        u = n(93),
        f = a(u),
        d = n(4),
        p = n(41),
        h = a(p),
        v = n(73),
        m = a(v),
        M = n(26),
        _ = a(M),
        w = function() {
            function t() {
                var e = this;
                if ((0, c.default)(this, t), window.AudioContext) this.context = new window.AudioContext;
                else {
                    if (!window.webkitAudioContext) return;
                    this.context = new window.webkitAudioContext
                }
                this.loaded = !1, this.loadedAmount = 0, (0, m.default)(o(), this.context, function(t) {
                    e.loadedAmount = t
                }).then(function(t) {
                    e.sounds = t, e.loadedAmount = 1, e.loaded = !0
                })
            }
            return (0, f.default)(t, [{
                key: "play",
                value: function(t, e) {
                    var n = (0, _.default)(t),
                        a = s(t, e),
                        o = this.sounds.filter(function(t) {
                            return t.path === a
                        })[0],
                        l = this.context.createBufferSource();
                    return l.buffer = o.buffer, l.connect(this.context.destination), l.start(0), new i.default(function(t) {
                        return setTimeout(t, n.audioDuration)
                    })
                }
            }]), t
        }();
    e.default = new w
}, function(t, e, n) {
    "use strict";

    function a(t) {
        return s.ANIMALS.filter(function(e) {
            return e.key === t
        })[0]
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = a;
    var s = n(4)
}, , , , , , , , , , , , , , , function(t, e) {
    "use strict";

    function n() {
        var t = window.AudioContext || window.webkitAudioContext,
            e = /iPad|iPhone|iPod/.test(navigator.userAgent);
        if (e || !t) return null;
        try {
            var n = document.createElement("audio"),
                a = "function" == typeof n.canPlayType && "" !== n.canPlayType("audio/mpeg");
            return a ? "mp3" : "ogg"
        } catch (t) {
            return null
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = n()
}, function(t, e, n) {
    "use strict";

    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function s(t) {
        var e = r[t];
        e && window.open(e, "share", "height=500,width=500"), (0, i.default)("Social", "Share", t)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = s;
    var o = n(4),
        l = n(18),
        i = a(l),
        r = {
            twitter: "https://twitter.com/intent/tweet?text=" + encodeURIComponent(o.TWEET_TEXT),
            facebook: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(document.URL) + ("&t=" + encodeURIComponent(document.URL))
        }
}, , , , , , , , , , , , , , , , , , , function(t, e, n) {
    var a, s;
    n(149), a = n(78);
    var o = n(186);
    s = a = a || {}, "object" != typeof a.default && "function" != typeof a.default || (s = a = a.default), "function" == typeof s && (s = s.options), s.render = o.render, s.staticRenderFns = o.staticRenderFns, s._scopeId = "data-v-f0deab62", t.exports = a
}, , function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(188),
        s = {};
    a.keys().forEach(function(t) {
        var e = t.match(/^\.\/(.*)\.js$/)[1];
        if (!e) throw new Error("Could not build code for language " + t);
        s[e] = a(t).default
    }), e.default = s
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        language: "English",
        findTheInvisibleCow: "Find the Invisible Cow",
        animal: {
            cow: "cow",
            goat: "goat",
            fox: "fox"
        },
        instruction: {
            intro: "Move your cursor around to find the cow. Itâ€™s hiding behind the shouting.",
            audio: "Make sure you turn your audio on before playing."
        },
        cta: {
            start: "Start Game",
            findA: "Find a %{animal}"
        },
        success: {
            congratulations: "Congratulations",
            found: "You found one! That brings your total up to %{points}.",
            keepItUp: "Keep up the good work to unlock more animals!",
            unlockAtFive: "Get to <strong>five points</strong> to unlock another animal",
            unlockAtFifty: "Get to <strong>fifty points</strong> to unlock the final animal",
            unlockedAll: "Congratulations, youâ€™ve unlocked them all!"
        },
        config: {
            expertMode: "Expert Mode",
            expertModeDescription: "(your cursor wonâ€™t change when you hover over the cow)",
            findA: "Find a"
        },
        social: {
            shareOnTwitter: "Share on Twitter"
        },
        stats: {
            globalPoints: "Animals found globally:",
            points: "Your points:"
        },
        support: {
            webExperiment: "This is a web experiment",
            sorry: "Sorry, your browser does not support the Web Audio API, which is an integral part of this experiment.",
            possiblyUnsupported: "If you do not hear anything, itâ€™s possible that your browser does not support the Web Audio API.",
            browsers: 'Currently supported browsers are <a href="http://google.com/chrome" target="_blank">Chrome 10+</a>, <a href="http://www.mozilla.org/en-US/firefox/new/" target="_blank">Firefox 25+</a>, <a href="http://www.opera.com/" target="_blank">Opera 15+</a>, and <a href="http://www.apple.com/au/safari/" target="_blank">Safari 6+</a>.'
        },
        footer: {
            seenOnBoredButton: 'As seen on <a href="http://www.boredbutton.com/" target="_blank">Bored Button</a>',
            byScriptist: 'By <a href="http://scriptist.io" target="_blank">Scriptist</a>'
        }
    }
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        language: "EspaÃ±ol",
        findTheInvisibleCow: "Encuentra la vaca invisible",
        animal: {
            cow: "una vaca",
            goat: "una cabra",
            fox: "un zorro"
        },
        instruction: {
            intro: "Mueve el cursor alrededor para encontrar la vaca. Se oculta detrÃ¡s de los sonidos.",
            audio: "AsegÃºrate de que enciendes el sonido antes de jugar"
        },
        cta: {
            start: "Empieza el juego",
            findA: "Encuentra"
        },
        success: {
            congratulations: "Felicidades",
            found: "Â¡Has encontrado una! Eso sube tu puntuaciÃ³n total a %{points}.",
            keepItUp: "Â¡ContinÃºa asÃ­ para desbloquear mÃ¡s animales!",
            unlockAtFive: "Consigue cinco puntos para desbloquear otro animal",
            unlockAtFifty: "Consigue cincuenta puntos para desbloquear el animal final",
            unlockedAll: "Felicidades, Â¡has desbloqueado todos!"
        },
        config: {
            expertMode: "Modo experto",
            expertModeDescription: "(Tu cursor no cambiarÃ¡ cuando lo pases sobre la vaca)",
            findA: "Encuentra"
        },
        social: {
            shareOnTwitter: "Comparte en Twitter"
        },
        stats: {
            globalPoints: "Total de animales encontrados:",
            points: "Tu puntuaciÃ³n:"
        },
        support: {
            webExperiment: "Este es un experimento web",
            sorry: "Lo siento, tu navegador no es compatible con el sonido API de la web, que es una parte esencial de este experimento.",
            possiblyUnsupported: "Si no oyes nada, es posible que tu navegador no sea compatible con el sonido API de la Web.",
            browsers: 'Los navegadores compatibles actualmente son <a href="http://google.com/chrome" target="_blank"> Chrome 10+</a>, <a href="http://www.mozilla.org/en-US/firefox/new/" target="_blank">Firefox 25+</a>, <a href="http://www.opera.com/" target="_blank">Opera 15+</a> y <a href="http://www.apple.com/au/safari/" target="_blank">Safari 6+</a>.'
        },
        footer: {
            seenOnBoredButton: null,
            byScriptist: null
        }
    }
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        language: "FranÃ§ais",
        findTheInvisibleCow: "Trouvez la vache invisible",
        animal: {
            cow: "une vache",
            goat: "une chÃ¨vre",
            fox: "un renard"
        },
        instruction: {
            intro: "DÃ©placez votre curseur pour trouver la vache. Elle se cache derriÃ¨re les cris.",
            audio: "Veillez Ã  allumer votre systÃ¨me audio avant de jouer."
        },
        cta: {
            start: "Commencer le jeu",
            findA: "Trouvez"
        },
        success: {
            congratulations: "FÃ©licitations",
            found: "Vous en avez trouvÃ© un ! Cela porte votre total Ã  %{points}.",
            keepItUp: "Continuez Ã  faire du bon travail pour dÃ©bloquer plus d'animaux !",
            unlockAtFive: "Obtenez cinq points pour dÃ©bloquer un autre animal",
            unlockAtFifty: "Obtenez cinquante points pour dÃ©bloquer le dernier animal",
            unlockedAll: "FÃ©licitations, vous les avez tous dÃ©bloquÃ©s !"
        },
        config: {
            expertMode: "Mode expert",
            expertModeDescription: "(votre curseur ne changera pas lorsque vous passerez votre souris sur la vache)",
            findA: "Trouvez"
        },
        social: {
            shareOnTwitter: "Partager sur Twitter"
        },
        stats: {
            globalPoints: "Animaux trouvÃ©s au total :",
            points: "Vos points :"
        },
        support: {
            webExperiment: "Ceci est une expÃ©rience web",
            sorry: "DÃ©solÃ©, votre navigateur ne prend pas en charge l'API web audio, qui fait partie intÃ©grante de cette expÃ©rience.",
            possiblyUnsupported: "Si vous n'entendez rien, il est possible que votre navigateur ne prenne pas en charge l'API web audio.",
            browsers: 'Les navigateurs actuellement pris en charge sont <a href="http://google.com/chrome" target="_blank">Chrome 10 et les versions supÃ©rieures</a>, <a href="http://www.mozilla.org/en-US/firefox/new/" target="_blank">Firefox 25 et les versions supÃ©rieures</a>, <a href="http://www.opera.com/" target="_blank">Opera 15 et les versions supÃ©rieures</a> et <a href="http://www.apple.com/au/safari/" target="_blank">Safari 6 et les versions supÃ©rieures</a>.'
        },
        footer: {
            seenOnBoredButton: null,
            byScriptist: null
        }
    }
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        language: "PortuguÃªs",
        findTheInvisibleCow: "Encontre a Vaca InvisÃ­vel",
        animal: {
            cow: "Uma Vaca",
            goat: "Um Bode",
            fox: "Uma Raposa"
        },
        instruction: {
            intro: "Mova o mouse ao redor da tela para encontrar a vaca. EstÃ¡ escondida atrÃ¡s do grito mais alto.",
            audio: "Ligue o som antes de jogar."
        },
        cta: {
            start: "ComeÃ§ar",
            findA: "Encontrar %{animal}"
        },
        success: {
            congratulations: "ParabÃ©ns",
            found: "VocÃª encontrou um animal! Isto leva seu total Ã : %{points}.",
            keepItUp: "Mantenha o bom trabalho para desbloquear mais animais!",
            unlockAtFive: "Consiga <strong>cinco pontos</strong> para destravar outro animal",
            unlockAtFifty: "Consiga <strong>cinquenta pontos</strong> para destravar outro animal",
            unlockedAll: "ParabÃ©ns! VocÃª destravou todos eles!"
        },
        config: {
            expertMode: "Modo Experiente",
            expertModeDescription: "(seu cursor nÃ£o muda quando vocÃª estÃ¡ sobre a vaca)",
            findA: "Encontrar"
        },
        social: {
            shareOnTwitter: "Compartilhar no Twitter"
        },
        stats: {
            globalPoints: "Animais encontrados mundialmente:",
            points: "Seus pontos:"
        },
        support: {
            webExperiment: "Este Ã© um experimento web",
            sorry: "Desculpe, seu navegador nÃ£o suporta a Web Audio API, que Ã© parte integrante deste experimento.",
            possiblyUnsupported: "Se vocÃª nÃ£o ouviu nada, Ã© possÃ­vel que o seu navegador nÃ£o ofereÃ§a suporte a API Web Audio.",
            browsers: 'Atualmente os navegadores com suporte sÃ£o <a href="http://google.com/chrome" target="_blank">Chrome 10+</a>, <a href="http://www.mozilla.org/en-US/firefox/new/" target="_blank">Firefox 25+</a>, <a href="http://www.opera.com/" target="_blank">Opera 15+</a>, and <a href="http://www.apple.com/au/safari/" target="_blank">Safari 6+</a>.'
        },
        footer: {
            seenOnBoredButton: null,
            byScriptist: null
        }
    }
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        language: "Ñ€ÑƒÌÑÑÐºÐ¸Ð¹",
        findTheInvisibleCow: "ÐÐ°Ð¹Ð´Ð¸Ñ‚Ðµ Ð½ÐµÐ²Ð¸Ð´Ð¸Ð¼ÑƒÑŽ ÐºÐ¾Ñ€Ð¾Ð²Ñƒ",
        animal: {
            cow: "ÐºÐ¾Ñ€Ð¾Ð²Ñƒ",
            goat: "ÐºÐ¾Ð·Ñƒ",
            fox: "Ð»Ð¸ÑÑƒ"
        },
        instruction: {
            intro: "ÐŸÐµÑ€ÐµÐ¼ÐµÑ‰Ð°Ð¹Ñ‚Ðµ ÐºÑƒÑ€ÑÐ¾Ñ€, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð½Ð°Ð¹Ñ‚Ð¸ ÐºÐ¾Ñ€Ð¾Ð²Ñƒ. Ð•Ðµ Ð¼Ð¾Ð¶Ð½Ð¾ Ð¾Ð±Ð½Ð°Ñ€ÑƒÐ¶Ð¸Ñ‚ÑŒ Ð¿Ð¾ Ð·Ð²ÑƒÐºÐ°Ð¼.",
            audio: "Ð£Ð±ÐµÐ´Ð¸Ñ‚ÐµÑÑŒ, Ñ‡Ñ‚Ð¾ Ð²Ñ‹ Ð²ÐºÐ»ÑŽÑ‡Ð¸Ð»Ð¸ Ð·Ð²ÑƒÐº, Ð¿Ñ€ÐµÐ¶Ð´Ðµ Ñ‡ÐµÐ¼ Ð¸Ð³Ñ€Ð°Ñ‚ÑŒ."
        },
        cta: {
            start: "ÐÐ°Ñ‡Ð°Ñ‚ÑŒ Ð¸Ð³Ñ€Ñƒ",
            findA: "ÐÐ°Ð¹Ð´Ð¸Ñ‚Ðµ %{animal}"
        },
        success: {
            congratulations: "ÐŸÐ¾Ð·Ð´Ñ€Ð°Ð²Ð»ÑÐµÐ¼",
            found: "Ð’Ñ‹ Ð½Ð°ÑˆÐ»Ð¸ Ð¾Ð´Ð½Ð¾ Ð¶Ð¸Ð²Ð¾Ñ‚Ð½Ð¾Ðµ! Ð­Ñ‚Ð¾ Ð¿Ð¾Ð´Ð½Ð¸Ð¼Ð°ÐµÑ‚ Ð²Ð°Ñˆ Ð¾Ð±Ñ‰Ð¸Ð¹ ÑÑ‡ÐµÑ‚ Ð½Ð° %{points}.",
            keepItUp: "ÐŸÑ€Ð¾Ð´Ð¾Ð»Ð¶Ð°Ð¹Ñ‚Ðµ Ñ€Ð°Ð±Ð¾Ñ‚Ð°Ñ‚ÑŒ, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ñ€Ð°Ð·Ð±Ð»Ð¾ÐºÐ¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð±Ð¾Ð»ÑŒÑˆÐµ Ð¶Ð¸Ð²Ð¾Ñ‚Ð½Ñ‹Ñ…!",
            unlockAtFive: "ÐÐ°Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ð¿ÑÑ‚ÑŒ Ð¾Ñ‡ÐºÐ¾Ð², Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ñ€Ð°Ð·Ð±Ð»Ð¾ÐºÐ¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð´Ñ€ÑƒÐ³Ð¾Ðµ Ð¶Ð¸Ð²Ð¾Ñ‚Ð½Ð¾Ðµ",
            unlockAtFifty: "ÐÐ°Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ð¿ÑÑ‚ÑŒÐ´ÐµÑÑÑ‚ Ð¾Ñ‡ÐºÐ¾Ð², Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ñ€Ð°Ð·Ð±Ð»Ð¾ÐºÐ¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð¿Ð¾ÑÐ»ÐµÐ´Ð½ÐµÐµ Ð¶Ð¸Ð²Ð¾Ñ‚Ð½Ð¾Ðµ",
            unlockedAll: "ÐŸÐ¾Ð·Ð´Ñ€Ð°Ð²Ð»ÑÐµÐ¼, Ð²Ñ‹ Ñ€Ð°Ð·Ð±Ð»Ð¾ÐºÐ¸Ñ€Ð¾Ð²Ð°Ð»Ð¸ Ð²ÑÐµÑ… Ð¶Ð¸Ð²Ð¾Ñ‚Ð½Ñ‹Ñ…!"
        },
        config: {
            expertMode: "Ð ÐµÐ¶Ð¸Ð¼ ÑÐºÑÐ¿ÐµÑ€Ñ‚Ð°",
            expertModeDescription: "(Ð²Ð°Ñˆ ÐºÑƒÑ€ÑÐ¾Ñ€ Ð½Ðµ Ð¿Ð¾Ð¼ÐµÐ½ÑÐµÑ‚ÑÑ, ÐºÐ¾Ð³Ð´Ð° Ð²Ñ‹ Ð¿Ð¾Ð¼ÐµÑÑ‚Ð¸Ñ‚Ðµ ÐµÐ³Ð¾ Ð½Ð°Ð´ ÐºÐ¾Ñ€Ð¾Ð²Ð¾Ð¹)",
            findA: "ÐÐ°Ð¹Ð´Ð¸Ñ‚Ðµ"
        },
        social: {
            shareOnTwitter: "ÐŸÐ¾Ð´ÐµÐ»Ð¸Ñ‚ÑŒÑÑ Ð² Ð¢Ð²Ð¸Ñ‚Ñ‚ÐµÑ€Ðµ"
        },
        stats: {
            globalPoints: "Ð–Ð¸Ð²Ð¾Ñ‚Ð½Ñ‹Ðµ, Ð²ÑÑ‚Ñ€ÐµÑ‡Ð°ÐµÐ¼Ñ‹Ðµ Ð¿Ð¾Ð²ÑÐµÐ¼ÐµÑÑ‚Ð½Ð¾:",
            points: "Ð’Ð°Ñˆ ÑÑ‡ÐµÑ‚:"
        },
        support: {
            webExperiment: "Ð­Ñ‚Ð¾ Ð²ÐµÐ±-ÑÐºÑÐ¿ÐµÑ€Ð¸Ð¼ÐµÐ½Ñ‚",
            sorry: "Ð˜Ð·Ð²Ð¸Ð½Ð¸Ñ‚Ðµ, Ð²Ð°Ñˆ Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€ Ð½Ðµ Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶Ð¸Ð²Ð°ÐµÑ‚ Web Audio API, ÐºÐ¾Ñ‚Ð¾Ñ€Ð¾Ðµ ÑÐ²Ð»ÑÐµÑ‚ÑÑ Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ð¾Ð¹ Ñ‡Ð°ÑÑ‚ÑŒÑŽ ÑÑ‚Ð¾Ð³Ð¾ ÑÐºÑÐ¿ÐµÑ€Ð¸Ð¼ÐµÐ½Ñ‚Ð°.",
            possiblyUnsupported: "Ð•ÑÐ»Ð¸ Ð²Ñ‹ Ð½Ð¸Ñ‡ÐµÐ³Ð¾ Ð½Ðµ ÑÐ»Ñ‹ÑˆÐ¸Ñ‚Ðµ, Ð²Ð¾Ð·Ð¼Ð¾Ð¶Ð½Ð¾, Ð²Ð°Ñˆ Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€ Ð½Ðµ Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶Ð¸Ð²Ð°ÐµÑ‚ Web Audio API.",
            browsers: 'ÐŸÐ¾Ð´Ð´ÐµÑ€Ð¶Ð¸Ð²Ð°ÐµÐ¼Ñ‹Ðµ ÑÐµÐ¹Ñ‡Ð°Ñ Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€Ñ‹: <a href="http://google.com/chrome" target="_blank">Chrome 10+</a>, <a href="http://www.mozilla.org/en-US/firefox/new/" target="_blank">Firefox 25+</a>, <a href="http://www.opera.com/" target="_blank">Opera 15+</a>, Ð¸ <a href="http://www.apple.com/au/safari/" target="_blank">Safari 6+</a>.'
        },
        footer: {
            seenOnBoredButton: 'As seen on <a href="http://www.boredbutton.com/" target="_blank">Bored Button</a>',
            byScriptist: 'By <a href="http://scriptist.io" target="_blank">Scriptist</a>'
        }
    }
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        language: "TÃ¼rkÃ§e",
        findTheInvisibleCow: "GÃ¶rÃ¼nmez Ä°neÄŸi Bulun",
        animal: {
            cow: "inek bulun",
            goat: "keÃ§i bulun",
            fox: "tilki bulun"
        },
        instruction: {
            intro: "Ä°neÄŸi bulmak iÃ§in imlecinizi hareket ettirin. Ä°nek, seslenmenin arkasÄ±nda saklanÄ±yor.",
            audio: "Oynamaya baÅŸlamadan Ã¶nce sesinizi aÃ§tÄ±ÄŸÄ±nÄ±zdan emin olun."
        },
        cta: {
            start: "Oyunu BaÅŸlat",
            findA: "Bir"
        },
        success: {
            congratulations: "Tebrikler",
            found: "Bir tane buldunuz! Bu toplamÄ±nÄ±zÄ± %{points} Ã§Ä±karÄ±yor.",
            keepItUp: "Daha fazla hayvanÄ±n kilidini aÃ§mak iÃ§in bu ÅŸekilde devam edin!",
            unlockAtFive: "BaÅŸka bir hayvanÄ±n kilidini aÃ§mak iÃ§in beÅŸ puana ulaÅŸÄ±n",
            unlockAtFifty: "Son hayvanÄ±n kilidini aÃ§mak iÃ§in elli puana ulaÅŸÄ±n",
            unlockedAll: "Tebrikler, hepsinin kilidini aÃ§tÄ±nÄ±z!"
        },
        config: {
            expertMode: "Uzman Modu",
            expertModeDescription: "(ineÄŸin Ã¼zerine geldiÄŸinizde imleciniz deÄŸiÅŸmeyecektir)",
            findA: "Bir"
        },
        social: {
            shareOnTwitter: "Twitter'da paylaÅŸ"
        },
        stats: {
            globalPoints: "DÃ¼nya genelinde bulunan hayvanlar:",
            points: "PuanÄ±nÄ±z:"
        },
        support: {
            webExperiment: "Bu bir internet denemesidir",
            sorry: "ÃœzgÃ¼nÃ¼z, tarayÄ±cÄ±nÄ±z bu denemenin ayrÄ±lmaz bir parÃ§asÄ± olan Ä°nternet Ses API'sini desteklemiyor.",
            possiblyUnsupported: "Herhangi bir ÅŸey duymuyorsanÄ±z, tarayÄ±cÄ±nÄ±z muhtemelen Ä°nternet Ses API'sini desteklemiyordur.",
            browsers: 'Åžu anda desteklenen tarayÄ±cÄ±lar, <a href="http://google.com/chrome" target="_blank"> Chrome 10+ </a>, <a href="http://www.mozilla.org/en-US/firefox/new/" target="_blank"> Firefox 25+ </a>, <a href="http://www.opera.com/" target="_blank"> Opera 15+ </a> ve <a href="http://www.apple.com/au/safari/" target="_blank"> Safari 6+ </a> \'dÄ±r.'
        },
        footer: {
            seenOnBoredButton: null,
            byScriptist: null
        }
    }
}, function(t, e, n) {
    "use strict";

    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function s(t) {
        var e = "en";
        try {
            var n = function() {
                for (var e = navigator, n = e.languages, a = function(e) {
                        var a = t.find(function(t) {
                            return n[e].substr(0, 2) === t.substr(0, 2)
                        });
                        if (a) return (0, r.default)("Locale", "Auto", "Close", a, {
                            nonInteraction: !0
                        }), {
                            v: {
                                v: a
                            }
                        }
                    }, s = 0; s < n.length; s += 1) {
                    var o = a(s);
                    if ("object" === ("undefined" == typeof o ? "undefined" : (0, l.default)(o))) return o.v
                }
            }();
            if ("object" === ("undefined" == typeof n ? "undefined" : (0, l.default)(n))) return n.v
        } catch (t) {
            return (0, r.default)("Locale", "Auto", "Error", e, {
                nonInteraction: !0
            }), e
        }
        return (0, r.default)("Locale", "Auto", "Error", e, {
            nonInteraction: !0
        }), e
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(46),
        l = a(o),
        i = n(18),
        r = a(i);
    e.default = s
}, function(t, e, n) {
    "use strict";

    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function s(t) {
        return new r.default(function(e, n) {
            var a = new XMLHttpRequest,
                s = (0, l.default)({
                    increment: !!t
                });
            a.addEventListener("load", function() {
                try {
                    var t = JSON.parse(a.responseText).count;
                    t > 17e6 && t < 1e10 ? e(t) : n(new Error("Unrealistic value: " + t))
                } catch (t) {
                    n(t)
                }
            }), a.addEventListener("error", function() {
                return n(new Error("Request failed"))
            }), a.open("POST", "https://1g26ewet37.execute-api.us-east-1.amazonaws.com/prod/count"), a.setRequestHeader("Content-Type", "application/json"), a.send(s)
        })
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(43),
        l = a(o),
        i = n(27),
        r = a(i);
    e.default = s
}, function(t, e) {
    "use strict";

    function n(t, e, n) {
        var a = 1 - Math.min(e, Math.max(0, t)) / e,
            s = (Math.exp(a) - 1) / (Math.E - 1);
        return Math.floor(s * n)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = n
}, function(t, e, n) {
    "use strict";

    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function s(t, e) {
        return new i.default(function(n, a) {
            var s = new XMLHttpRequest;
            s.open("GET", t, !0), s.responseType = "arraybuffer", s.addEventListener("load", function() {
                e.decodeAudioData(s.response, function(t) {
                    n(t)
                }, function(t) {
                    a(t)
                })
            }), s.send()
        })
    }

    function o(t, e, n) {
        var a = 0,
            o = t.map(function(l) {
                return s(l, e).then(function(e) {
                    return a += 1, a < o.length && n(a / t.length), {
                        path: l,
                        buffer: e
                    }
                })
            });
        return i.default.all(o)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var l = n(27),
        i = a(l);
    e.default = o
}, function(t, e) {
    "use strict";

    function n() {
        var t = document.querySelector("ins");
        t && (t.removeAttribute("data-adsbygoogle-status"), (window.adsbygoogle = window.adsbygoogle || []).push({}))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = n
}, function(t, e, n) {
    "use strict";

    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(43),
        o = a(s),
        l = n(46),
        i = a(l),
        r = n(45),
        c = a(r),
        u = n(62),
        f = a(u),
        d = n(14),
        p = a(d),
        h = n(4),
        v = n(41),
        m = a(v),
        M = n(71),
        _ = a(M),
        w = n(74),
        g = a(w),
        b = n(18),
        z = a(b);
    f.default.use(p.default);
    var y = h.ANIMALS.map(function(t) {
            return t.key
        }),
        x = {
            animal: y[0],
            expertMode: !1,
            globalPoints: null,
            page: m.default ? h.PAGE_WELCOME : h.PAGE_UNSUPPORTED,
            points: 0,
            audioFormat: m.default
        },
        A = function() {
            try {
                return (0, c.default)({}, x, JSON.parse(localStorage[h.STORAGE_KEY]))
            } catch (t) {
                return (0, c.default)({}, x)
            }
        }(),
        k = {
            incrementPoints: function(t) {
                t.points += 1
            },
            setAnimal: function(t, e) {
                y.indexOf(e) !== -1 && (t.animal = e)
            },
            setExpertMode: function(t, e) {
                t.expertMode = !!e
            },
            setGlobalPoints: function(t, e) {
                t.globalPoints = parseInt(e, 10)
            },
            setPage: function(t, e) {
                h.PAGES.indexOf(e) !== -1 && (t.page = e), e === h.PAGE_GAME ? (0, z.default)("Cow", "gameStart", t.animal) : e === h.PAGE_CONGRATULATIONS && ((0, z.default)("Cow", "gameStop", t.animal), f.default.nextTick(g.default))
            }
        },
        P = {
            incrementPoints: function(t) {
                var e = t.commit;
                return e("incrementPoints")
            },
            setAnimal: function(t, e) {
                var n = t.commit;
                return n("setAnimal", e)
            },
            setExpertMode: function(t, e) {
                var n = t.commit;
                return n("setExpertMode", e)
            },
            setGlobalPoints: function(t, e) {
                var n = t.commit;
                return n("setGlobalPoints", e)
            },
            setPage: function(t, e) {
                var n = t.commit;
                return n("setPage", e)
            },
            find: function(t) {
                var e = t.commit;
                e("incrementPoints"), e("setPage", h.PAGE_CONGRATULATIONS), (0, _.default)(!0).then(function(t) {
                    return e("setGlobalPoints", t)
                })
            },
            getGlobalPoints: function(t) {
                var e = t.commit;
                (0, _.default)().then(function(t) {
                    return e("setGlobalPoints", t)
                })
            }
        },
        E = {},
        S = new p.default.Store({
            state: A,
            getters: E,
            actions: P,
            mutations: k
        });
    S.subscribe(function(t, e) {
        if ("object" === ("undefined" == typeof localStorage ? "undefined" : (0, i.default)(localStorage))) {
            var n = {
                animal: e.animal,
                points: e.points
            };
            localStorage[h.STORAGE_KEY] = (0, o.default)(n)
        }
    }), S.dispatch("getGlobalPoints"), e.default = S
}, function(t, e, n) {
    "use strict";

    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(14),
        o = n(4),
        l = n(167),
        i = a(l),
        r = n(168),
        c = a(r),
        u = n(169),
        f = a(u),
        d = n(171),
        p = a(d),
        h = n(173),
        v = a(h),
        m = n(174),
        M = a(m),
        _ = n(175),
        w = a(_);
    e.default = {
        components: {
            "find-congratulations": i.default,
            "find-footer": c.default,
            "find-game": f.default,
            "find-modal": p.default,
            "find-stats": v.default,
            "find-unsupported": M.default,
            "find-welcome": w.default
        },
        data: function() {
            return {
                PAGE_CONGRATULATIONS: o.PAGE_CONGRATULATIONS,
                PAGE_GAME: o.PAGE_GAME,
                PAGE_UNSUPPORTED: o.PAGE_UNSUPPORTED,
                PAGE_WELCOME: o.PAGE_WELCOME
            }
        },
        computed: (0, s.mapState)({
            page: function(t) {
                return t.page
            }
        }),
        methods: (0, s.mapActions)(["setPage"])
    }
}, function(t, e, n) {
    "use strict";

    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(4),
        o = n(26),
        l = a(o),
        i = n(25),
        r = a(i),
        c = n(153),
        u = a(c),
        f = n(152),
        d = a(f),
        p = n(156),
        h = a(p),
        v = n(155),
        m = a(v),
        M = n(158),
        _ = a(M),
        w = n(157),
        g = a(w),
        b = n(160),
        z = a(b),
        y = n(159),
        x = a(y),
        A = n(161),
        k = a(A);
    e.default = {
        props: {
            animal: String,
            initialX: Number,
            initialY: Number
        },
        computed: {
            hatPosition: function() {
                return (0, l.default)(this.animal).hatPosition
            }
        },
        created: function() {
            var t = (0, l.default)(this.animal);
            setTimeout(this.moveToCenter, 100), setTimeout(this.playSound, t.winSoundDelay), setTimeout(this.endSound, 1400), setTimeout(this.complete, 2400)
        },
        data: function() {
            return {
                x: this.initialX,
                y: this.initialY,
                scale: .25,
                playing: !1,
                hat: s.HATS.filter(function(t) {
                    return t.test()
                })[0],
                image: {
                    animal: {
                        cow: u.default,
                        cowSound: d.default,
                        fox: h.default,
                        foxSound: m.default,
                        goat: _.default,
                        goatSound: g.default
                    },
                    hat: {
                        halloween: z.default,
                        christmas: x.default,
                        newYear: k.default
                    }
                }
            }
        },
        methods: {
            moveToCenter: function() {
                this.x = document.documentElement.offsetWidth / 2, this.y = document.documentElement.offsetHeight / 2, this.scale = 1
            },
            playSound: function() {
                this.playing = !0, r.default.play(this.animal, "win")
            },
            endSound: function() {
                this.playing = !1
            },
            complete: function() {
                this.$emit("complete")
            }
        }
    }
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        methods: {
            handleClick: function() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                this.$emit.apply(this, ["click"].concat(e))
            }
        }
    }
}, function(t, e, n) {
    "use strict";

    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(45),
        o = a(s),
        l = n(14),
        i = n(4),
        r = n(61),
        c = a(r),
        u = n(172),
        f = a(u);
    e.default = {
        components: {
            "find-button": c.default,
            "find-social-button": f.default
        },
        data: function() {
            return {
                ANIMALS: i.ANIMALS,
                PAGE_GAME: i.PAGE_GAME
            }
        },
        computed: (0, o.default)({
            unlockedAnimals: function() {
                var t = this;
                return i.ANIMALS.filter(function(e) {
                    return !e.pointsRequired || t.points >= e.pointsRequired
                })
            },
            animal: {
                get: function() {
                    return this.$store.state.animal
                },
                set: function(t) {
                    this.$store.commit("setAnimal", t)
                }
            },
            expertMode: {
                get: function() {
                    return this.$store.state.expertMode
                },
                set: function(t) {
                    this.$store.commit("setExpertMode", t)
                }
            }
        }, (0, l.mapState)({
            points: function(t) {
                return t.points
            }
        })),
        methods: (0, l.mapActions)(["setPage"])
    }
}, function(t, e, n) {
    "use strict";

    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(170),
        o = a(s);
    e.default = {
        components: {
            "find-locale": o.default
        }
    }
}, function(t, e, n) {
    "use strict";

    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function s(t) {
        if ("mouse" === t.type.substr(0, 5) || "click" === t.type) return {
            x: t.clientX,
            y: t.clientY
        };
        if ("touch" === t.type.substr(0, 5)) {
            var e = t.touches[0];
            return {
                x: e.clientX,
                y: e.clientY
            }
        }
        return null
    }

    function o(t, e) {
        var n = s(t),
            a = n.x,
            o = n.y;
        return Math.sqrt(Math.pow(e.x - a, 2) + Math.pow(e.y - o, 2))
    }

    function l(t, e) {
        return Math.round(t + Math.random() * (e - t))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(14),
        r = n(4),
        c = n(26),
        u = a(c),
        f = n(72),
        d = a(f),
        p = n(25),
        h = a(p),
        v = n(166),
        m = a(v),
        M = {
            components: {
                "find-animal": m.default
            },
            mounted: function() {
                this.playSound(), document.addEventListener("touchmove", this.onTouchMove, {
                    passive: !1
                })
            },
            beforeDestroy: function() {
                document.removeEventListener("touchmove", this.onTouchMove, {
                    passive: !1
                })
            },
            computed: (0, i.mapState)({
                animal: function(t) {
                    return t.animal
                },
                expertMode: function(t) {
                    return t.expertMode
                }
            }),
            data: function() {
                return {
                    x: l(r.FIND_RADIUS, document.documentElement.offsetWidth - r.FIND_RADIUS),
                    y: l(r.FIND_RADIUS, document.documentElement.offsetHeight - r.FIND_RADIUS),
                    level: 0,
                    hover: !1,
                    found: !1
                }
            },
            methods: {
                onMouseMove: function(t) {
                    var e = document.documentElement,
                        n = e.offsetWidth,
                        a = e.offsetHeight,
                        s = o(t, {
                            x: this.x,
                            y: this.y
                        }),
                        l = Math.sqrt(Math.pow(n, 2) + Math.pow(a, 2)),
                        i = (0, u.default)(this.animal);
                    this.level = (0, d.default)(s, l, i.maxLevel), this.hover = s <= r.FIND_RADIUS
                },
                onTouchMove: function(t) {
                    t.preventDefault(), this.onMouseMove(t), this.onClick(t)
                },
                onClick: function(t) {
                    var e = o(t, {
                        x: this.x,
                        y: this.y
                    });
                    e <= r.FIND_RADIUS && this.onFind()
                },
                onFind: function() {
                    this.found = !0
                },
                onAnimalComplete: function() {
                    this.$store.dispatch("find")
                },
                playSound: function() {
                    this.found || h.default.play(this.animal, this.level).then(this.playSound)
                }
            }
        };
    e.default = M
}, function(t, e, n) {
    "use strict";

    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(44),
        o = a(s),
        l = n(18),
        i = a(l);
    e.default = {
        props: {
            animal: String,
            initialX: Number,
            initialY: Number
        },
        data: function() {
            var t = this.$i18n.messages;
            return {
                locales: (0, o.default)(t).map(function(e) {
                    return {
                        code: e,
                        name: t[e].language
                    }
                }),
                open: !1
            }
        },
        methods: {
            setLocale: function(t) {
                this.$i18n.locale = t, this.open = !1, (0, i.default)("Locale", "Manual", "Set", t)
            }
        }
    }
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        props: {
            wide: Boolean
        }
    }
}, function(t, e, n) {
    "use strict";

    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(42),
        o = a(s),
        l = n(154),
        i = a(l),
        r = n(163),
        c = a(r);
    e.default = {
        props: {
            network: String
        },
        data: function() {
            return {
                image: {
                    facebook: i.default,
                    twitter: c.default
                }
            }
        },
        methods: {
            handleClick: function() {
                (0, o.default)(this.network)
            }
        }
    }
}, function(t, e, n) {
    "use strict";

    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(14),
        o = n(42),
        l = a(o);
    e.default = {
        computed: (0, s.mapState)({
            globalPoints: function(t) {
                return t.globalPoints
            },
            points: function(t) {
                return t.points
            }
        }),
        methods: {
            share: l.default
        }
    }
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {}
}, function(t, e, n) {
    "use strict";

    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(14),
        o = n(4),
        l = n(25),
        i = a(l),
        r = n(61),
        c = a(r),
        u = n(162),
        f = a(u);
    e.default = {
        components: {
            "find-button": c.default
        },
        data: function() {
            return {
                PAGE_GAME: o.PAGE_GAME,
                image: {
                    speaker: f.default
                },
                audioPlayer: i.default
            }
        },
        methods: (0, s.mapActions)(["setPage"])
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, , function(t, e) {
    t.exports = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1384 1024">\n  <title>cow-sound</title>\n  <path fill="#f9f1e6" class="path1 fill-color12" d="M831.83 160.68s23.607-24.554 73.663-21.28 3.274-1.594 3.274-1.594c-1.35-7.399-10.314-19.582-22.389-27.347s18.124-4.444 42.42 10.633c0 0-3.791-48.462 38.21-54.924 0 0-12.923 36.788-1.292 58.327 0 0 24.813-28.001 37.391-26.148 0 0-12.191 20.462-12.191 39.502 0 0 151.504-7.194 188.465 62.118 0 0 136.772-103.042 182.003-59.964 0 0 37.348 20.462-6.117 58.5s-118.507 47.041-155.855 47.041c0 0 37.693 142.156 37.693 161.197 0 0-109.848-58.155-266.349-43.078s-208.582 28.345-264.928 70.001-127.079 111.657-73.577 240.158l11.502 10.769-52.426 7.194 13.268 227.192-90.463-27.268 10.769-78.574 1.077-118.808-93.694-11.114-70.346-30.154 7.883 89.386-67.503-29.422 9.994-89.602-72.887-53.847 8.271 146.895-29.077 11.502-40.924-16.197 5.040-142.889-21.883-127.812-3.619-68.58 32.653-121.35-36.271 20.247-44.499 65.047-26.924 64.918-14.345-7.194 5.729-18.308 47.041-95.202 55.656-72.887 53.503-26.579 34.807-50.961 88.309-47.73 117.042-14.345 138.883 19.73 104.808 35.884 29.077 47.041 29.077 25.847 60.093-36.013z"></path>\n  <path fill="#a87451" class="path2 fill-color4" d="M718.105 119.971l45.921 77.841 46.955 12.622 24.985-18.308 7.84-12.493-16.111-22.487-27.57-26.708-13.957-17.791-15.077-40.752 0.345-33.816-3.015-16.8-13.483 2.283-23.133 14-18.093 31.748 4.437 50.616zM1134.408 8.529s30.413-4.652 51.952 31.231 29.077 76.118-6.031 110.58-65.133 51.176-91.54 9.606l5.902-14.991 43.078-48.075 9.046-33.299-3.705-20.979-8.616-21.108v-12.88z"></path>\n  <path fill="#f9f1e6" class="path3 fill-color12" d="M716.554 753.429l-1.465 70.346 12.234 73.232-68.235-11.459 10.080-86.888 2.154-78.961 45.232 33.73zM759.029 779.276l-4.308 44.155s24.813 112.002 231.586 52.253c0 0 89.946-37.693 119.541-87.232 0-0.215-194.367 29.939-346.775-9.176z"></path>\n  <path fill="#fff" class="path4 fill-color13" d="M1072.936 791.208s-126.218 70.906-210.822 50.142-72.629-53.933-72.629-53.933 170.071 31.791 283.451 3.791z"></path>\n  <path fill="#eaa18c" class="path5 fill-color6" d="M994.923 360.69c75.558-0.991 370.468 29.637 347.852 211.081s-146.464 208.927-369.348 228.872-354.314-76.463-365.6-229.906 264.842-208.496 387.096-210.090z"></path>\n  <path fill="#f4b5b5" class="path6 fill-color8" d="M713.884 245.112s13.957-27.785-76.075-54.106l-15.077 5.169-4.868 9.305 2.455 11.329 41.527 19.557zM1204.366 224.133l6.763-16.886 22.831-14.517 14.56-6.16 46.309-3.705h9.692l-3.145 16.886-65.22 23.564-16.154 5.299-15.594-4.437z"></path>\n  <path fill="#000" class="path7 fill-color1" d="M984.325 355.822c-354.831 8.185-380.376 200.182-378.222 225.555 22.4 263.851 337.858 224.952 394.376 222.281s343.329-15.766 350.911-222.539-243.906-228.053-367.022-225.296zM1335.15 581.118c-7.194 196.434-281.297 208.798-335.274 211.339s-355.176 39.631-376.499-211.081c-2.154-24.124 22.228-206.558 361.12-214.225 117.731-2.585 357.89 17.446 350.652 213.967zM1165.036 10.554c-12.493-12.665-52.426-19.73-36.271 13.656s19.385 52.038-19.73 92.617-34.118 43.078-17.231 61.256c18.006 19.299 55.269 18.523 86.888-23.262 9.262-12.234 70.346-58.715-13.656-144.31zM1163.227 155.597c-24.382 23.133-45.059 29.207-58.284 17.748-11.416-9.736-12.406-15.25-12.191-19.643 0.732-15.077 27.785-22.53 48.678-60.826 17.533-32.050 3.274-54.924-1.034-65.133-9.606-22.831 8.616-19.557 23.434-5.169 19.557 19.083 31.145 37.736 33.041 60.61 1.723 21.797-3.705 44.068-33.601 72.371zM813.953 135.824c-32.007-26.45-41.699-60.653-38.468-87.965 8.185-69.14-47.385-20.419-58.5 0-33.041 60.74 17.231 124.495 39.847 144.31 38.339 34.031 60.74 25.588 76.851 9.994 25.674-24.554 12.234-39.847-19.816-66.34zM831.917 185.708c-14 28.259-53.847 14.517-85.423-25.847-10.769-13.699-24.296-34.462-28.431-59.146-6.117-36.961 21.539-71.38 38.77-75.731s3.619 25.416 7.582 46.265c1.199 19.531 14.71 47.807 35.245 69.322 18.215 20.064 41.305 26.655 32.258 45.179z"></path>\n  <path fill="#000" class="path8 fill-color1" d="M1111.405 125.098s39.804 41.182 58.844 31.619-1.422-5.945-1.422-5.945c-18.373-2.153-37.405-15.238-48.282-33.701zM1132.427 100.371s27.57 29.293 61.816 16.37l0.775-7.194s-33.299 8.099-57.293-17.231zM1141.128 69.57s33.299 24.985 62.161 9.391l-6.203-5.342s-25.416 10.339-52.124-11.976zM1146.384 46.955s22.616 14 38.038-8.96l-6.246-7.323s-6.634 18.954-34.462 7.84zM764.629 184.286s37.908-11.114 46.093-38.253l-6.462-7.323s-20.763 32.308-45.533 35.496 5.902 10.080 5.902 10.080zM790.476 114.285s-24.339 33.041-60.524 27.44l-4.308-7.323s45.232 0.302 58.5-27.699zM778.069 88.439s-36.616 26.45-66.426 6.591v-8.616s31.447 13.871 61.601-5.514zM765.706 57.121s-25.847 13.483-48.462-4.308l2.154-10.339s22.96 19.73 46.309 6.117v8.616zM1336.27 125.356c-71.251-2.283-153.357 66.512-153.357 66.512-0.192-3.831-11.851-17.259-26.644-25.908l0.496 0.664c1.162-0.537-3.166 5.902-8.9 10.721 26.347 18.443 33.842 37.096 33.842 37.096 55.355-67.761 158.612-91.325 182.434-67.761 10.339 10.252 4.997 27.57-5.729 40.622-50.272 60.826-172.655 49.453-172.655 49.453 44.715 92.617 43.078 169.166 43.078 169.166l12.923 5.945c1.034-62.463-37.391-162.403-37.391-162.403 166.926-1.292 231.887-120.618 131.947-124.064zM892.441 112.519c9.009 6.114 17.601 19.095 20.199 34.129-5.176-0.341-11.218-0.726-17.35-0.726-23.079 0-44.884 5.45-64.2 15.133-0.34-3.246-3.819-6.43-8.109-7.798 21.994-10.905 48.004-17.265 75.499-17.265 0.406 0 0.812 0.001 1.218 0.004s-1.527-10.081-23.066-26.278c0 0 10.769-15.508 46.869 6.031 0 0-10.769-40.924 52.253-59.275 0 0-13.957 43.078-6.462 60.912 0 0 5.428-23.133 44.801-23.133 0 0-17.231 21.022-18.696 37.176 31.105 0.024 66.761 3.989 101.107 11.462-5.814 1.335-7.402 4.337-7.402 7.709 0 0.288 0.012 0.573 0.034 0.855-24.635-6.279-52.912-9.861-82.027-9.861-7.212 0-14.373 0.22-21.476 0.653s-0.317-21.931 9.591-36.664c-11.808 3.797-22.357 15.072-25.788 29.136s-24.096-17.29-6.865-62.177c0 0-29.422-1.422-33.041 54.579-0.086-0.086-23.779-16.8-37.047-14.56zM770.531 189.714c19.321-20.17-5.93 2.282-24.839 29.474s-123.952-134.152-195.719-66.693 101.405 112.433 169.295 117.43c0 0-42.216 105.11-19.256 160.421l13.914-7.194s-26.407-27.699 22.4-161.972c0 0-224.004-33.428-177.739-94.34 54.536-71.811 188.81 74.697 188.81 74.697-11.923 15.89 6.61-15.905 31.494-41.49-6.509-2.88-8.362-6.628-8.362-10.289z"></path>\n  <path fill="#000" class="path9 fill-color1" d="M1307.408 185.406c-11.846-10.339-37.908-10.856-63.152-1.852-30.154 10.769-56.992 40.493-43.078 43.078 18.523 3.662 29.896 2.369 71.509-10.037s46.222-20.979 34.721-31.145zM1255.715 213.192c-34.893 7.883-46.093 11.717-46.222 2.585 0-4.566 19.945-20.117 36.013-25.071 22.53-6.892 41.484-7.108 52.555-0.431 8.96 5.6-5.299 14.431-42.647 22.831zM674.597 196.219c-38.77-17.748-63.755-11.071-61.903 8.917 2.585 26.88 75.386 37.047 102.525 42.475s-1.852-33.601-40.579-51.392zM637.808 219.265c-13.483-4.049-12.923-12.493-12.923-17.231 0-22.745 53.718 6.591 73.232 20.677 39.976 29.379-24.124 7.539-60.309-3.446zM990.787 798.057c0.129 1.926 0.202 4.174 0.202 6.44 0 8.165-0.953 16.107-2.753 23.722l7.161-3.066s4.739-8.012 2.585-27.139h-7.237zM1018.529 792.199c0.613 2.791 0.963 5.997 0.963 9.286 0 5.044-0.825 9.894-2.349 14.425l7.201-0.319c0.476-3.025 0.748-6.514 0.748-10.066 0-4.7-0.476-9.289-1.384-13.721z"></path>\n  <path fill="#000" class="path10 fill-color1" d="M1093.312 788.882c-85.725 131.258-283.365 99.079-313.864 68.924-23.090-22.831-19.945-60.912-13.139-82.709q-6.677-2.369-12.923-4.997c-39.071 130.741 106.574 140.864 211.942 116.741 110.968-25.416 153.787-105.627 153.787-105.627z"></path>\n  <path fill="#000" class="path11 fill-color1" d="M906.786 847.64c92.402-8.616 176.274-54.106 176.274-54.106l-17.963 1.077c-25.847 14.302-117.301 41.57-165.332 43.078s-85.38-20.333-95.632-31.447c1.988 3.853-8.881-8.028-16.013-22.121-5.052-1.701-9.834-2.95-14.443-4.372 5.859 19.816 46.524 76.032 133.11 67.934z"></path>\n  <path fill="#000" class="path12 fill-color1" d="M825.369 828.384c-0.593-5.477-0.932-11.831-0.932-18.263 0-4.063 0.135-8.094 0.401-12.089l-9.334-1.181c-0.208 2.559 0.876 14.88 2.9 26.882zM859.659 837.646l7.452 3.446c-2.195-13.258-3.45-28.536-3.45-44.107 0-0.517 0.001-1.033 0.004-1.549l-9.607-1.084c0.646 15.077 2.154 35.97 5.6 43.293zM895.155 843.461l5.6-3.102c0-4.911-1.292-27.44-2.068-41.785l-7.754-0.517c0.005 15.642 1.573 31.538 4.561 46.926zM926.429 842.729h7.668s0.517-17.231-0.646-42.388l-8.012-0.302zM959.513 800.513c0.345 9.908 0.646 28.862-1.982 36.013h6.462c1.106-8.375 1.738-18.059 1.738-27.89 0-2.826-0.052-5.64-0.156-8.441l-6.019 0.405zM79.952 387.699s28.604 9.908 33.859 82.149c2.585 35.97 13.699 133.11-14.216 74.007 0 0 14.043 90.032-20.247 17.231 0 0 30.93 106.833-28.948 11.889 0 0-14.646 55.269-35.065-83.571 0 0-28.001 23.52-8.357-17.231s46.093-86.802 72.974-84.475z"></path>\n  <path fill="#000" class="path13 fill-color1" d="M58.155 408.204l5.729 0.258c66.038-164.557 128.372-205.653 153.357-215.819-14.931 30.054-3.985 3.724 11.422-19.375-102.015 16.877-170.508 234.936-170.508 234.936z"></path>\n  <path fill="#000" class="path14 fill-color1" d="M76.808 409.066l10.769 0.517c20.677-98.648 72.371-136.815 100.371-150.772-0.831-0.607 2.658-12.946 8.299-24.003-90.276 46.059-119.439 174.258-119.439 174.258zM921.863 287.759c0.302 21.194-32.093 28.517-27.914-2.369s16.068-27.354 20.85-23.047 6.979 15.594 7.108 25.416zM1048.597 280.005c-0.431-18.093-20.117-34.893-24.425-8.616s6.462 29.379 12.191 28.69 12.579-6.031 12.234-20.117zM884.127 501.726c17.748-2.757 36.745 24.554 16.37 45.145s-37.047-10.597-35.065-27.311c1.194-9.51 8.96-17.005 18.623-17.786zM1080.087 491.732c14.129-3.748 31.877 22.487 11.502 42.475s-34.462-9.779-30.801-21.108c3.877-12.32 6.892-18.093 19.299-21.323z"></path>\n  <path fill="#000" class="path15 fill-color1" d="M244.811 158.095s127.079 70.217 59.232 186.526-146.464 63.927-146.464 63.927-9.692-139.443 87.232-250.281zM323.729 448.439c-28.302-78.66 36.185-108.814 72.801-29.724s-34.333 136.556-72.801 29.724zM628.504 685.926s-157.061-75.171-130.095-253.555 207.807-63.324 207.807-63.324-9.692 34.118 8.185 63.324c0 0-154.132 69.614-66.857 251.272 0 0-4.868 14.646-19.083 2.283zM580.817 142.415s-133.541-34.721-175.197 41.872 9.046 172.052 199.148 51.047c0 0-118.722-51.262-23.994-92.919zM240.675 596.928s-66.9 12.191 5.6 81.848zM528.434 716.081s92.617 53.072 0 112.347v-112.304zM696.308 832.692c11.071 30.801 33.299 11.286 17.662-19.471s-27.44-7.754-17.662 19.471z"></path>\n  <path fill="#000" class="path16 fill-color1" d="M714.357 925.74c-0.705 2.27 2.66 19.796 8.466 36.166 1.962-0.199 17.231-8.719 29-20.689s-34.149-95.903-31.090-186.366l-13.354-10.769c-0.19 30.42 4.637 82.361 13.73 132.82-8.829-0.855-18.425 1.822-28.646 1.822-8.534 0-16.632-1.866-23.908-5.212 5.526-46.808 9.532-111.166 1.046-163.333l-9.132-5.902s12.062 131.042-17.231 240.158c0 0 29.508 25.847 65.995 19.902 1.545-4.329 4.256-20.955 5.145-38.063z"></path>\n  <path fill="#000" class="path17 fill-color1" d="M652.627 691.828l-8.616-10.166c-15.734 2.455-33.882 3.857-52.357 3.857-2.417 0-4.829-0.024-7.235-0.072s0.662 116.315 12.853 211.948c-8.2 2.995-17.667 4.727-27.539 4.727-17.869 0-34.413-5.676-47.926-15.322 9.427-56.347 17.482-131.087 11.021-197.987 0 0-168.434 4.868-325.237-162.058 1.209 15.431 10.908 32.325 25.266 43.525s3.682 76.36 11.35 138.306c-11.373 6.332-36.056 16.37-58.801 0.862 3.014-24.676 4.733-53.244 4.733-82.214s-1.72-57.538-5.062-85.608c-14.92-122.263-63.598-213.803 65.118-380.945s450.162-39.89 471.701-27.139l-11.2-21.022s-344.191-132.033-470.193 39.201c-140.003 190.317-80.771 292.928-68.924 393.041s-8.616 234.946-8.616 234.946 28.862 34.247 66.167 28.561c2.127-7.747 3.349-16.642 3.349-25.823 0-2.889-0.121-5.75-0.358-8.578-0.042 6.877 3.536 19.939 9.527 31.553 4.974-0.501 21.371-11.097 33.149-25.597s-26.454-37.421-30.029-198.317c0 0 131.042 117.43 277.119 119.584 0 0 15.077 141.424-37.348 278.583 0 0 40.321 41.656 84.432 44.37 3.575-7.668 8.271-22.185 9.908-47.945-0.694 3.46 2.604 26.645 8.506 48.767 14.627-5.086 29.489-13.917 42.627-31.536 0 0-34.979-95.891-33.385-295.944 0.258 0 49.884-2.843 55.915-5.6z"></path>\n  <path fill="#000" class="path18 fill-color1" d="M348.24 749.466v0c-0.006 6.591 2.012 16.914 5.591 26.476 8.71-1.379 21.972-8.494 31.632-18.98s-16.417-35.884-19.346-103.429l-8.616-4.308c-0.011 19.070 1.883 43.615 5.507 67.593-6.128-0.522-12.822 0.749-19.813 0.749-12.056 0-23.229-3.781-32.398-10.221 2.765-26.674 5.565-58.466 5.78-78.023l-10.554-12.363s1.938 78.401-16.714 145.172c0 0 26.708 17.231 56.001 14.646 1.93-6.648 3.041-14.284 3.041-22.179 0-1.775-0.056-3.537-0.167-5.284z"></path>\n</svg>\n';
}, function(t, e) {
    t.exports = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1384 1024">\n  <title>cow</title>\n  <path fill="#f9f1e6" class="path1 fill-color12" d="M831.83 160.68s23.607-24.554 73.663-21.28 3.274-1.594 3.274-1.594c-1.35-7.399-10.314-19.582-22.389-27.347s18.124-4.444 42.42 10.633c0 0-3.791-48.462 38.21-54.924 0 0-12.923 36.788-1.292 58.327 0 0 24.813-28.001 37.391-26.148 0 0-12.191 20.462-12.191 39.502 0 0 151.504-7.194 188.465 62.118 0 0 136.772-103.042 182.003-59.964 0 0 37.348 20.462-6.117 58.5s-118.507 47.041-155.855 47.041c0 0 37.693 142.156 37.693 161.197 0 0-109.848-58.155-266.349-43.078s-208.582 28.345-264.928 70.001-127.079 111.657-73.577 240.158l11.502 10.769-52.426 7.194 13.268 227.192-90.463-27.268 10.769-78.574 1.077-118.808-93.694-11.114-70.346-30.154 7.883 89.386-67.503-29.422 10.037-89.386-72.801-53.847 8.185 146.809-29.034 11.502-40.924-16.154 5.040-142.889-21.97-127.941-3.575-68.58 32.653-121.35-36.315 20.203-44.499 64.875-26.924 64.961-14.345-7.194 5.729-18.308 47.041-95.072 55.656-72.887 53.503-26.579 34.807-50.961 88.309-47.73 117.042-14.345 138.839 19.73 104.808 35.884 29.077 47.041 29.121 25.847 60.093-36.013z"></path>\n  <path fill="#a87451" class="path2 fill-color4" d="M718.105 119.971l45.921 77.841 46.955 12.622 24.985-18.308 7.84-12.493-16.111-22.487-27.57-26.708-13.957-17.791-15.077-40.752 0.345-33.816-3.015-16.8-13.483 2.283-23.133 14-18.093 31.748 4.437 50.616zM1134.408 8.529s30.413-4.652 51.952 31.231 29.077 75.946-6.031 110.408-65.133 51.176-91.54 9.606l5.902-15.077 43.078-48.032 9.046-33.256-3.791-20.85-8.616-21.194v-12.923z"></path>\n  <path fill="#f9f1e6" class="path3 fill-color12" d="M716.554 753.429l-1.465 70.346 12.234 73.232-68.235-11.459 10.080-86.888 2.154-78.961 45.232 33.73z"></path>\n  <path fill="#eaa18c" class="path4 fill-color6" d="M995.095 360.69c75.558-0.991 370.468 29.637 347.852 211.081s-146.464 208.927-369.391 228.872-354.314-76.463-365.6-229.906 264.712-208.453 387.139-210.090z"></path>\n  <path fill="#f4b5b5" class="path5 fill-color8" d="M713.884 244.94s14.129-27.828-76.075-54.106l-15.077 5.169-4.868 9.305 2.455 11.329 41.527 19.514zM1204.366 224.133l6.763-16.886 22.831-14.517 14.56-6.16 46.309-3.705h9.692l-3.145 16.886-65.22 23.564-16.154 5.299-15.594-4.437z"></path>\n  <path fill="#000" class="path6 fill-color1" d="M984.153 355.822c-354.831 8.185-380.376 200.182-378.222 225.555 22.4 263.851 337.858 224.952 394.376 222.281s343.588-15.939 351.083-222.712-243.906-227.881-367.194-225.081zM1335.15 581.032c-7.194 196.434-281.297 208.798-335.274 211.339s-355.176 39.631-376.499-211.081c-2.154-24.124 22.228-206.558 361.12-214.225 117.731-2.455 357.89 17.576 350.652 214.010zM1165.036 10.339c-12.493-12.665-52.426-19.73-36.271 13.656s19.385 52.038-19.73 92.617-34.118 43.078-17.231 61.256c18.006 19.256 55.269 18.523 86.888-23.262 9.262-12.062 70.561-58.586-13.656-144.31zM1163.098 155.51c-24.425 23.262-45.059 29.121-58.327 17.834-11.416-9.736-12.406-15.25-12.191-19.643 0.732-15.077 27.785-22.53 48.678-60.826 17.533-32.050 3.274-54.924-1.034-65.133-9.649-22.831 8.616-19.557 23.391-5.169 19.557 19.083 31.145 37.736 33.041 60.61 1.895 21.97-3.446 44.068-33.601 72.371zM813.953 135.824c-32.007-26.407-41.699-60.869-38.555-87.965 8.185-69.14-47.385-20.419-58.5 0-33.041 60.74 17.231 124.495 39.847 144.31 38.339 34.031 60.74 25.588 76.894 9.994 25.545-24.554 12.32-39.847-19.687-66.34zM831.917 185.708c-14 28.259-53.847 14.517-85.423-25.847-10.769-13.699-24.296-34.462-28.431-59.146-6.117-36.961 21.539-71.38 38.77-75.731s3.619 25.416 7.582 46.265c1.199 19.531 14.71 47.807 35.245 69.322 18.215 20.064 41.305 26.655 32.258 45.179z"></path>\n  <path fill="#000" class="path7 fill-color1" d="M1111.405 125.098s39.804 41.182 58.844 31.619-1.422-5.945-1.422-5.945c-18.373-2.153-37.405-15.238-48.282-33.701zM1132.427 100.371s27.57 29.293 61.816 16.37l0.775-7.323s-33.299 8.099-57.293-17.231zM1141.128 69.57s33.299 24.985 62.161 9.391l-6.203-5.342s-25.416 10.339-52.124-11.976zM1146.384 47.17s22.616 14 38.038-8.96l-6.031-7.539s-6.634 19.040-34.462 7.883zM764.457 184.286s38.038-11.114 46.309-38.21l-6.462-7.323s-20.763 32.308-45.533 35.539 5.729 10.037 5.729 10.037zM790.605 114.285s-24.554 33.041-60.653 27.484l-4.308-7.323s45.232 0.345 58.5-27.656zM778.069 88.439s-36.616 26.45-66.426 6.591v-8.616s31.576 14 61.73-5.385zM765.706 57.121s-25.847 13.483-48.462-4.308l2.154-10.339s22.96 19.73 46.309 6.117v8.616zM1336.27 125.356c-71.251-2.283-153.357 66.512-153.357 66.512-0.192-3.831-11.851-17.259-26.644-25.908l0.496 0.664c1.162-0.537-3.166 5.902-8.9 10.721 26.347 18.443 33.842 37.096 33.842 37.096 55.355-67.761 158.612-91.325 182.434-67.761 10.339 10.252 4.997 27.57-5.729 40.622-50.272 60.826-172.655 49.453-172.655 49.453 44.715 92.617 43.078 169.166 43.078 169.166l12.923 5.945c1.077-62.463-37.133-162.403-37.133-162.403 166.711-1.292 231.629-120.747 131.689-124.064zM892.441 112.519c9.009 6.114 17.601 19.095 20.199 34.129-5.176-0.341-11.218-0.726-17.35-0.726-23.079 0-44.884 5.45-64.2 15.133-0.365-3.293-3.873-6.488-8.195-7.842 21.994-10.904 48.003-17.264 75.498-17.264 0.376 0 0.752 0.001 1.128 0.004s-1.652-9.994-23.191-26.148c0 0 10.769-15.637 46.869 5.902 0 0-10.769-40.924 52.296-59.232 0 0-14 43.078-6.462 60.869 0 0 5.385-23.133 44.715-23.133 0 0-17.231 21.022-18.653 37.176 30.906 0.023 66.622 4.005 101.024 11.507-5.793 1.334-7.364 4.321-7.364 7.676 0 0.299 0.012 0.595 0.037 0.887-24.75-6.34-53.159-9.957-82.414-9.957-7 0-13.952 0.207-20.849 0.615s-0.342-21.928 9.566-36.661c-11.808 3.797-22.357 15.072-25.788 29.136s-24.096-17.247-6.865-62.177c0 0-29.422-1.378-33.041 54.623 0 0-23.693-16.671-36.961-14.474zM770.531 189.714c19.321-20.17-5.93 2.282-24.839 29.474s-123.952-134.152-195.719-66.693 101.362 112.433 169.425 117.43c0 0-42.216 105.11-19.213 160.421l13.914-7.194s-26.407-27.699 22.4-161.972c0 0-224.004-33.428-177.739-94.34 54.623-71.811 188.853 74.654 188.853 74.654-11.767 15.814 6.588-16.014 31.296-41.681-6.527-2.646-8.379-6.566-8.379-10.098z"></path>\n  <path fill="#000" class="path8 fill-color1" d="M1307.236 185.406c-11.846-10.339-37.908-10.856-63.152-1.852-30.154 10.769-56.992 40.493-43.078 43.078 18.523 3.662 29.896 2.369 71.509-10.037s46.395-20.979 34.721-31.145zM1255.543 213.192c-34.893 7.883-46.093 11.717-46.222 2.585 0-4.566 19.945-20.117 36.013-25.071 22.487-6.892 41.441-7.108 52.555-0.431 9.046 5.6-5.169 14.431-42.518 22.831zM674.597 196.219c-38.77-17.748-63.755-11.071-61.903 8.917 2.585 26.88 75.386 37.047 102.525 42.475s-1.852-33.601-40.579-51.392zM637.808 219.395c-13.483-4.049-12.923-12.493-12.923-17.231 0-22.745 53.718 6.591 73.232 20.677 39.976 29.293-24.124 7.194-60.309-3.446zM79.952 387.699s28.604 9.908 33.859 82.149c2.585 35.97 13.699 133.11-14.216 74.007 0 0 14.043 90.032-20.247 17.231 0 0 30.93 106.833-28.948 11.889 0 0-14.646 55.269-35.065-83.571 0 0-28.001 23.52-8.357-17.231s46.093-87.060 72.974-84.475z"></path>\n  <path fill="#000" class="path9 fill-color1" d="M58.155 408.204l5.729 0.258c66.038-164.557 128.372-205.653 153.357-215.819-15.157 30.157-4.049 3.763 11.545-19.355-102.137 16.856-170.631 234.915-170.631 234.915z"></path>\n  <path fill="#000" class="path10 fill-color1" d="M76.808 409.066l10.769 0.517c20.677-98.648 72.371-136.815 100.371-150.772-0.804-0.738 2.672-13.075 8.299-24.134-90.276 46.189-119.439 174.389-119.439 174.389zM921.863 287.759c0.258 21.194-32.136 28.517-28.001-2.369s16.111-27.57 20.893-22.831 7.108 15.293 7.108 25.114zM1048.597 280.005c-0.431-18.093-20.117-34.893-24.425-8.616s6.462 29.379 12.191 28.69 12.622-6.031 12.234-20.117zM884.127 501.726c17.748-2.757 36.745 24.554 16.37 45.145s-37.047-10.597-35.065-27.311c1.194-9.51 8.96-17.005 18.623-17.786zM1080.087 491.732c14.129-3.748 31.877 22.487 11.502 42.475s-34.462-9.779-30.801-21.108c3.877-12.32 6.892-18.093 19.299-21.323z"></path>\n  <path fill="#000" class="path11 fill-color1" d="M244.811 158.095s127.079 70.217 59.232 186.526-146.464 63.927-146.464 63.927-9.692-139.658 87.232-250.281zM323.729 448.439c-28.302-78.66 36.185-108.814 72.801-29.724s-34.333 136.642-72.801 29.724zM628.504 685.926s-157.061-75.171-130.095-253.555 207.807-63.324 207.807-63.324-9.692 34.118 8.185 63.324c0 0-154.132 69.614-66.857 251.272 0 0-4.868 14.646-19.083 2.283zM580.817 142.415s-133.541-34.721-175.197 41.872 9.046 172.052 199.148 51.047c0 0-118.722-51.262-23.994-92.919zM240.675 596.928s-66.9 12.191 5.6 81.848zM528.434 716.081s92.617 53.072 0 112.347v-112.304zM696.308 832.692c11.071 30.801 33.299 11.286 17.662-19.471s-27.44-7.754-17.662 19.471z"></path>\n  <path fill="#000" class="path12 fill-color1" d="M714.357 925.74c-0.705 2.27 2.66 19.796 8.466 36.166 1.962-0.199 17.231-8.719 29-20.689s-34.149-95.903-31.090-186.366l-13.354-10.769c-0.19 30.42 4.637 82.361 13.73 132.82-8.829-0.855-18.425 1.822-28.646 1.822-8.534 0-16.632-1.866-23.908-5.212 5.526-46.808 9.532-111.166 1.046-163.333l-9.132-5.902s12.062 131.042-17.231 240.158c0 0 29.508 25.847 65.995 19.902 1.545-4.329 4.256-20.955 5.145-38.063z"></path>\n  <path fill="#000" class="path13 fill-color1" d="M652.455 691.828l-8.616-10.166c-15.734 2.455-33.882 3.857-52.357 3.857-2.417 0-4.829-0.024-7.235-0.072s0.705 116.315 12.853 211.948c-8.128 2.939-17.508 4.638-27.285 4.638-17.867 0-34.409-5.674-47.922-15.319 9.427-56.347 17.483-131.087 11.021-197.987 0 0-168.434 4.868-325.237-162.058 1.193 15.459 10.859 32.352 25.182 43.57s3.723 76.359 11.434 138.261c-11.416 6.332-36.099 16.37-58.844 0.862 3.014-24.676 4.733-53.244 4.733-82.214s-1.72-57.538-5.062-85.608c-14.748-122.048-63.426-213.588 65.29-380.73s450.162-39.847 471.701-27.053l-11.329-21.237s-344.191-132.033-470.15 39.201c-140.003 190.317-80.771 292.928-68.924 393.041s-8.616 234.946-8.616 234.946 28.862 34.247 66.167 28.561c2.169-7.821 3.415-16.801 3.415-26.072 0-2.801-0.114-5.576-0.337-8.32-0.039 6.908 3.519 19.947 9.482 31.546 4.974-0.503 21.371-11.099 33.149-25.598s-26.454-37.421-30.029-198.317c0 0 131.042 117.43 277.119 119.584 0 0 15.077 141.424-37.391 278.583 0 0 40.364 41.656 84.432 44.37 3.619-7.668 8.314-22.185 9.908-47.945-0.705 3.289 2.582 26.427 8.462 48.508 14.628-5.085 29.49-13.916 42.628-31.535 0 0-34.979-95.891-33.385-295.944 0.215 0.086 49.841-2.585 55.699-5.299z"></path>\n  <path fill="#000" class="path14 fill-color1" d="M348.24 749.466v0c-0.006 6.591 2.012 16.914 5.591 26.476 8.71-1.379 21.972-8.494 31.632-18.98s-16.417-35.884-19.346-103.429l-8.616-4.308c-0.011 19.070 1.883 43.615 5.507 67.593-6.128-0.522-12.822 0.749-19.813 0.749-12.056 0-23.229-3.781-32.398-10.221 2.765-26.674 5.565-58.466 5.78-78.023l-10.769-12.277s2.154 78.272-16.499 145.043c0 0 26.708 17.231 56.001 14.646 1.93-6.648 3.041-14.284 3.041-22.179 0-1.775-0.056-3.537-0.167-5.284z"></path>\n</svg>\n'
}, function(t, e) {
    t.exports = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024">\n<title>facebook</title>\n<path class="path1" d="M853.35 0h-682.702c-94.25 0-170.648 76.42-170.648 170.686v682.63c0 94.266 76.398 170.684 170.648 170.684h341.352v-448h-128v-128h128v-96c0-88.366 71.634-160 160-160h160v128h-160c-17.674 0-32 14.328-32 32v96h176l-32 128h-144v448h213.35c94.25 0 170.65-76.418 170.65-170.684v-682.63c0-94.266-76.4-170.686-170.65-170.686z"></path>\n</symbol>\n</svg>\n'
}, function(t, e) {
    t.exports = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1582 1024">\n  <title>fox-sound</title>\n  <path fill="#cc5f39" class="path1 fill-color5" d="M459.193 164.953s-75.477 8.158-98.080 52.74c0 0-113.060-154.565-333.026-114.442l-18.189 7.044v24.52l53.498 82.833s90.501 114.308 139.898 117.785c15.239-0.612 55.849 5.917 94.227 17.573s-45.722 98.34-70.242 120.631 93.622 11.725 93.622 11.725-41.773 44.047-62.415 54.613 102.895 9.273 116.492 5.038l-8.025 40.124s43.556-16.183 55.995 0 21.756 15.069 21.756 15.069l35.665 42.799s-50.957 110.429-116.581 141.101-172.086 64.644-152.024 93.087 97.5 69.637 174.449-15.024 96.832-94.647 96.832-94.647l39.455-62.415 94.603 19.973s-12.617 88.629-77.84 141.547-115.155 88.138-116.804 115.244 98.66 38.474 116.492 31.787 85.865-39.678 119.836-151.578c8.916-29.335 18.947-58.759 28.978-86.177 28.087-77.216 55.727-138.739 55.727-138.739l12.215-1.872 2.764 13.375-8.337 43.512 19.527 17.833 68.567 34.774-14.979 18.724s-52.384 6.152-63.529 0-44.582-17.833-63.217 18.724 6.331 59.294 50.912 50.912 180.556-60.854 200.618-88.361c0 0 94.068 38.207 51.537 72.223s-50.957 31.787-81.050 27.864-84.126-28.978-110.34 61.969l17.833 17.833s96.743 17.253 184.569-45.741 172.086-133.166 173.869-219.566l12.483-16.317 20.953 39.678 53.498 28.443-8.248-63.975s53.498 31.787 75.789 37.895 157.731 21.176 200.083-79.133c0 0-69.637-5.573-82.476-17.253 0 0 188.358-137.446 82.476-463.651 0 0-160.138 312.831-295.355 222.909 0 0 27.507-39.366 54.969-46.053 0 0-136.732-104.767-222.909-28.22 0 0-13.82-59.383-164.061-101.067 0 0 59.294-110.028 62.415-148.636s-119.033-8.203-172.443 31.921-121.040 96.297-135.885 113.104c0 0-50.912-43.869-131.873-17.521-0.031-0.74-0.049-1.607-0.049-2.479 0-13.566 4.328-26.121 11.679-36.36s-16.088-7.615-33.921 12.803c0 0-6.331-15.247-3.344-41.996 0 0-28.265 10.388-43.155 52.384 0 0-25.635-7.49-34.908 8.916 0 0 32.634 4.904 33.748 16.495z"></path>\n  <path fill="#efd1be" class="path2 fill-color9" d="M725.881 246.716s25.278 41.996 83.234 4.458 94.692-98.080 94.692-139.675-63.529 3.745-63.529 3.745-117.072 85.82-114.486 131.516zM184.569 198.389s-141.547-95.271-86.756 0 92.106 108.111 158.533 98.66-4.146-61.389-71.777-98.66z"></path>\n  <path fill="#f8e9e1" class="path3 fill-color11" d="M598.823 666.498c60.185-57.956 52.74-191.702 52.74-191.702s136.732-70.306 121.129-144.891c0 0 71.331 59.428 88.049 60.185 0 0-25.991 38.965-91.749 38.251 0 0 12.572 23.405 91.705 27.195 0 0-34.194 36.379-118.9 37.449 0 0 21.176 18.279 25.991 27.552 0 0-81.718-39.767-118.9 138.56 0 0-59.026 16.228-50.11 7.401z"></path>\n  <path fill="#cc5f39" class="path4 fill-color5" d="M838.317 404.491c0 0-6.527 0-14.578 0s-14.578 0-14.578 0c0 0 6.527 0 14.578 0s14.578 0 14.578 0z"></path>\n  <path fill="#f8e9e1" class="path5 fill-color11" d="M570.647 694.942s-79.356-50.377-123.402-195.402c0 0-111.455 0-164.507-109.983 0 0-31.876 51.849-52.607 89.164 0 0 18.145 17.833 90.59 6.866 0 0-39.544 39.009-66.873 54.613 0 0 69.458 15.069 128.529 3.567 0 0-13.731 5.528-18.947 41.907 0 0 66.115-37.895 140.789 95.138zM741.842 627.266l14.935-46.008s45.028-90.278 122.333-70.216c0 0-29.781 47.925-43.155 89.164 0 0-65.624 42.531-94.068 27.061zM1419.129 691.776s-25.991 3.254-77.26-72.668c0 0 8.916 9.942 57.154 8.916 0 0-54.256-40.124-81.718-101.201 0 0 86.132 27.462 130.714-66.873 0 0-37.137 17.030-69.86 5.885 0 0 79.489-43.155 69.86-130.446 0 0-24.52 15.871-80.247 7.401 0 0 148.591-121.441 168.653-222.463 0 0 119.479 243.149-73.649 462.982 20.767 13.979 46.344 22.312 73.868 22.312 0.832 0 1.663-0.008 2.491-0.023s-25.001 68.301-120.050 86.134z"></path>\n  <path fill="#cc5f39" class="path6 fill-color5" d="M523.257 715.182s0 1.115-0.223 2.942c-0.892 14.578-0.446 76.235 74.897 24.342l15.247 1.337s-37.449 35.22-52.829 38.608-61.969 7.445-51.893-44.582-0.446-23.004 14.712-21.533z"></path>\n  <path fill="#fff" class="path7 fill-color13" d="M522.365 721.423l78.33 19.393s-83.056 62.415-78.33-19.393z"></path>\n  <path fill="#000" class="path8 fill-color1" d="M873.804 248.588c21.845-27.908 159.603-248.142 81.585-248.588-143.999-0.802-290.54 161.654-290.54 161.654-46.053-37.137-127.816-16.362-127.816-16.362s-2.987-20.062 21.934-37.895c0 0-30.093-5.617-46.811 12.929 0 0-1.115-39.678 7.044-49.352 0 0-44.225 19.705-58.313 60.185-2.158-0.343-4.646-0.539-7.18-0.539-14.27 0-27.087 6.219-35.889 16.095s30.898 4.506 38.744 13.422c0 0-44.359 1.694-97.5 47.168-25.998-40.662-89.314-85.138-163.213-101.382-133.435-28.619-224.604-17.473-187.601 36.025s109.047 186.486 196.16 200.618c39.232 6.375 65.624 11.948 82.922 16.183-2.942 7.668-5.974 15.069-9.362 22.291-17.075 37.137-30.449 72.089-66.873 98.080 0 0 31.965 23.762 101.78 12.617 0 0-45.384 45.34-73.56 49.040 0 0 43.066 17.833 131.516 8.916 0 0-12.661 14.846-14.177 43.824 0 0 54.256-32.678 99.551 29.736s41.595 63.172 41.595 63.172 5.929 62.415 83.234 57.956 88.406-66.873 76.547-83.948c0 0 2.987-37.895 15.604-67.631s39.589-84.705 98.66-66.293c0 0 1.694-16.718-20.641-30.583 0 0 81.941-0.58 121.53-42.665 0 0-80.782-11.458-95.851-21.488 0 0 57.421 5.038 95.851-42.888 0 0-62.147-21.711-104.767-75.789-0.178 0.089 69.993-19.259 105.659-64.51zM749.421 306.277c3.631 15.882 47.252 59.298 100.955 85.047s-29.178 40.362-90.522 32.872c0 0 8.158 30.628 90.635 33.971 0 0-16.718 24.877-119.613 33.080-1.212-2.738 14.662 7.582 26.65 21.372s-53.756-8.042-76.448 36.897c1.353-10.493-20.392 39.228-31.834 92.767-14.51-5.039-31.234-9.61-49.025-9.61-7.553 0-14.914 0.824-21.997 2.386-37.978 8.791-57.282 16.593-71.771 39.642 0 0-34.194-54.256-47.168-66.873s-38.652-49.040-85.062-30.851c0 0-6.331-17.476 17.476-39.009 0 0-77.662 11.145-118.142-0.446 0 0 47.569-24.832 53.498-58.67 0 0-73.917 10.789-91.393-1.471 0 0 31.965-23.183 69.013-127.95l0.669-1.471c-29.781-4.993-85.508-14.534-98.080-17.833-17.61-4.458-57.332-12.929-130.536-109.894s-74.006-106.996-37.895-114.442c18.591-3.7 142.305-6.241 212.12 31.965 67.541 36.914 87.648 62.415 109.671 91.036l0.669-1.516c19.642-25.476 62.455-51.779 111.377-60.281s-3.801-20.233-36.702-23.577c0 0 9.808-6.821 36.245-0.892 0 0 1.337-35.309 33.258-52.74-0.662 4.756-1.040 10.251-1.040 15.834 0 11.664 1.65 22.942 4.729 33.614s11.514-23.413 30.996-21.942c-7.050 7.731-11.368 18.059-11.368 29.396 0 3.811 0.488 7.507 1.405 11.031s77.193-28.212 139.608 22.433c0 0 118.142-157.686 275.293-169.143 70.261-5.127-60.542 203.917-80.47 230.711-30.182 40.436-115.199 64.376-115.199 64.376z"></path>\n  <path opacity="0.4" fill="#000" class="path9 fill-color2" d="M366.998 236.016c-0.22 0.003-0.587 0.122-0.901 0.318l0.901 1.109v-1.337z"></path>\n  <path fill="#000" class="path10 fill-color1" d="M897.521 89.609c-29.335-10.432-67.319 30.316-124.071 76.904-62.102 50.823-76.592 96.208-25.679 104.009s90.635-21.934 120.371-67.229 58.67-103.341 29.335-113.684zM861.098 197.319c-56.485 92.463-167.94 68.834-116.938 13.107 31.207-33.971 46.276-44.582 63.306-59.918s57.288-50.11 75.789-51.269 35.22 4.012-22.157 98.080zM208.375 204.541c-46.142-30.494-142.662-86.935-126.479-32.322 7.267 24.52 55.192 135.395 142.662 135.395s104.321-23.405-16.183-103.073zM213.948 293.705c-42.353-0.624-75.789-34.462-115.913-108.111-31.653-57.956 67.408 5.528 105.481 30.672 117.919 77.974 74.050 78.419 10.477 77.528zM461.422 414.076c-8.025-22.291 7.936-54.033 23.361-15.024 15.158 38.34-16.495 34.194-23.405 15.069zM589.55 388.308c-4.458-22.291 10.388-42.977 23.896-11.591 14.578 33.704-18.145 40.213-23.896 11.591zM476.401 635.603s-14.623 60.72-93.622 123.804c-83.011 66.115-217.916 79.489-175.474 123.313 17.833 18.412 90.947 76.146 187.244-16.718s138.917-149.706 126.702-179.041l-1.115-7.846s-9.139 54.212-77.127 118.855c-61.523 58.402-144.178 147.12-214.572 83.591-61.523-55.549 189.116-37.895 257.817-237.042zM617.191 715.538s-15.336 101.78-113.416 172.398-120.371 118.142-20.062 133.745 151.132-44.582 221.75-267.491c59.829-189.116 61.389-174.137 54.969-192.593 0 0-37.805 102.895-63.529 176.41-38.028 108.557-86.177 252.467-159.737 265.841s-145.471-16.362-70.796-71.331 135.35-101.959 163.303-212.299z"></path>\n  <path fill="#000" class="path11 fill-color1" d="M737.294 642.067s57.689 8.916 95.583-27.552l5.216-19.304c-26.297 21.327-60.173 34.24-97.064 34.24-1.329 0-2.654-0.017-3.975-0.050l0.196 12.933z"></path>\n  <path fill="#000" class="path12 fill-color1" d="M887.178 489.731c1.337-0.624-121.842 143.999-12.617 213.993 109.894 70.439 158.578 79.356 113.996 113.684-78.91 60.72-123.046-37.716-179.665 63.886-45.473 81.897 133.745 60.096 203.739 5.216 43.69-34.328 127.95-76.235 165.577-164.329 20.953-49.040 27.462-112.658 4.458-197.23-13.107-47.97-57.511-333.472-266.911-355.897l-13.91 12.26s157.731-24.698 245.2 261.695-7.49 332.447-143.776 433.068c-23.405 17.298-79.177 43.423-141.592 47.346s-47.703-40.124-18.903-67.408c32.901-31.207 88.005 18.903 150.776-27.552 46.231-34.194 26.080-56.931-75.165-109.092-113.55-58.491-76.146-130.848-51.492-176.009 19.527-36.111 23.896-47.435 20.285-53.721z"></path>\n  <path fill="#000" class="path13 fill-color1" d="M1070.633 273.465s78.776-95.851 234.812 29.736c0 0-41.595 20.775-54.256 39.767 0 0 129.644 91.081 286.795-244.041 0 0 132.631 264.504-64.644 487.413 0 0 27.864 12.305 78.018 8.916 0 0-68.344 184.301-278.636 70.261-1.164 5.068-1.831 10.887-1.831 16.862 0 12.088 2.73 23.538 7.608 33.767s-81.566-13.849-88.253-72.965l2.229-32.233s13.375 70.439 69.102 89.164c0 0-14.489-32.411-1.115-64.733 0 0 171.64 131.873 270.835-25.278 0 0-64.287-2.942-83.234-23.004 0 0 190.989-148.591 90.679-458.435 0 0-145.649 326.963-306.143 219.967 0 0 25.278-31.207 52.74-45.34 0 0-118.9-99.551-209.535-23.049zM759.318 628.069s-40.124 66.873 3.477 83.591c97.278 37.315 67.319 49.040 24.698 50.734-33.57 1.337-62.415-39.321-98.526 18.635s64.777 101.201 269.854-31.965l-12.795-10.521s-92.284 73.025-177.748 83.591-75.522-23.718-69.637-34.016 27.462-31.787 49.842-23.093c27.641 10.7 81.718 14.712 93.622-12.617s-72.98-38.43-83.011-60.185 9.986-49.932 15.247-61.523zM587.321 805.282c-64.020 96.965-136.51 125.542-136.51 125.542l-23.628 36.557v15.604c44.582 61.657 150.865 11.903 150.865 11.903l58.313-77.572 36.825-83.636s10.566-75.21-16.763-32.322c0 0-0.535-73.248-40.124-13.375 0 0-1.427-42.665-9.362-23.628s-19.616 40.926-19.616 40.926zM437.348 715.538c-16.852 28.844-127.504 106.238-219.699 133.745l-12.572 14.846 34.15 35.665s80.247 35.665 147.12-37.716l92.106-95.851s33.436-49.040-9.451-36.735c0 0 7.802-42.353-13.91-11.145 0.134 0.178 1.070-35.13-17.699-2.809zM809.16 911.163s11.725-76.413 63.485-74.452 49.040 16.228 89.743 0c0 0 48.505-15.292 25.1 17.030 0 0 34.016-28.399 26.214 2.229 0 0 30.226-1.783 12.26 16.139-0.089 0-157.24 98.66-216.846 39.054z"></path>\n  <path fill="#000" class="path14 fill-color1" d="M809.16 764.846s38.43-15.292 28.978 6.464c0 0 39.098-9.719 12.483 18.412 0 0 28.087-15.604 14.266 6.152 0 0-121.53 60.185-173.334 22.915 0 0-13.91-55.727 41.818-60.72 0-0.089 53.944 14.89 75.789 6.866zM520.359 718.525c-12.483 23.628-20.641 57.956 20.731 62.637s74.318-56.976 74.318-56.976l8.337 1.337s-36.2 76.502-95.985 60.096c-50.377-13.597-10.432-76.012-10.432-76.012z"></path>\n  <path fill="#000" class="path15 fill-color1" d="M517.595 721.423s-4.146 41.015 24.832 44.582 66.605-24.787 66.605-24.787l-7.49-3.121s-74.095 53.81-76.057-9.986z"></path>\n  <path fill="#000" class="path16 fill-color1" d="M540.51 758.159l-5.216-30.672 7.802 3.433v31.118l-2.586-3.879zM556.158 762.037l-2.006-26.883h6.241l-2.407 26.883h-1.783zM571.361 757.445l2.675-19.616 5.35 1.471-5.261 18.858-2.764-0.713z"></path>\n</svg>\n'
}, function(t, e) {
    t.exports = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1582 1024">\n  <title>fox</title>\n  <path fill="#cc5f39" class="path1 fill-color5" d="M459.193 164.953s-75.477 8.158-98.080 52.74c0 0-113.149-154.565-333.115-114.442l-18.189 7.044v24.52l53.498 82.833s90.501 114.308 139.898 117.785c15.239-0.612 55.849 5.917 94.227 17.573s-45.544 98.34-70.064 120.631 93.622 11.502 93.622 11.502-41.818 44.047-62.415 54.613 102.85 9.273 116.448 5.038l-8.025 40.124s43.512-16.139 55.95 0 21.756 15.158 21.756 15.158l35.665 42.799s-50.734 110.563-116.492 140.968-172.175 64.867-152.113 93.31 97.456 69.637 174.404-15.024 96.965-94.736 96.965-94.736l39.455-62.415 94.603 19.973s-12.572 88.718-77.795 141.592-115.378 88.049-117.072 115.378 98.66 38.474 116.492 31.787 85.865-39.678 119.836-151.578c8.916-29.335 18.947-58.759 28.978-86.177 28.087-77.216 55.727-138.739 55.727-138.739l12.215-1.872 2.764 13.375-8.337 43.467 19.527 17.833 68.567 34.774-14.979 18.724s-52.384 6.152-63.529 0-44.582-17.833-63.217 18.724 6.331 59.294 50.912 50.912 180.556-60.854 200.618-88.361c0 0 94.068 38.207 51.537 72.223s-50.957 31.787-81.050 27.864-84.126-28.978-110.34 61.88l17.833 17.833s96.743 17.298 184.569-45.696 172.086-133.166 173.869-219.566l12.483-16.272 20.953 39.678 53.498 28.443-7.757-64.020s53.498 31.787 75.789 37.895 157.731 21.176 200.083-79.133c0 0-69.548-5.617-82.476-17.298 0 0 188.403-137.446 82.476-463.651 0 0-160.049 312.831-295.31 222.909 0 0 27.507-39.366 54.969-46.053 0 0-136.777-104.767-222.909-28.265 0 0-13.82-59.294-164.061-101.022 0 0 59.294-110.028 62.415-148.636s-119.033-8.158-172.532 31.965-121.040 96.743-135.885 113.372c0 0-50.912-43.869-131.873-17.521-0.031-0.74-0.049-1.607-0.049-2.479 0-13.566 4.328-26.121 11.679-36.36s-16.088-7.615-33.921 12.803c0 0-6.331-15.292-3.344-42.041 0 0-28.265 10.388-43.155 52.384 0 0-25.635-7.445-34.908 8.916 0 0 32.634 4.904 33.748 16.495z"></path>\n  <path fill="#efd1be" class="path2 fill-color9" d="M725.881 246.671s25.278 41.996 83.234 4.458 94.692-98.080 94.692-139.675-63.529 3.7-63.529 3.7-117.072 85.82-114.486 131.516zM184.569 198.389s-141.547-95.271-86.756 0 92.106 108.111 158.533 98.66-4.146-61.523-71.777-98.66z"></path>\n  <path fill="#f8e9e1" class="path3 fill-color11" d="M598.823 666.498c60.185-57.956 52.74-191.702 52.74-191.702s136.732-70.306 121.129-144.891c0 0 71.331 59.428 88.049 60.185 0 0-25.991 38.965-91.749 38.251 0 0 12.572 23.405 91.705 27.195 0 0-34.194 36.379-118.9 37.449 0 0 21.176 18.279 25.991 27.552 0 0-81.718-39.767-118.9 138.56 0 0-59.205 16.183-50.11 7.401z"></path>\n  <path fill="#cc5f39" class="path4 fill-color5" d="M838.317 404.491c0 0-6.527 0-14.578 0s-14.578 0-14.578 0c0 0 6.527 0 14.578 0s14.578 0 14.578 0z"></path>\n  <path fill="#f8e9e1" class="path5 fill-color11" d="M570.647 694.719s-79.356-50.377-123.18-195.402c0 0-111.455 0-164.507-109.983 0 0-31.876 51.849-52.607 89.164 0 0 18.145 17.833 90.59 6.866 0 0-39.589 39.009-66.873 54.613 0 0 69.414 15.069 128.485 3.567 0 0-13.731 5.528-18.947 41.907 0 0 66.115-37.895 140.789 95.138zM741.842 627.266l14.935-46.053s45.028-90.278 122.333-70.216c0 0-29.781 47.925-43.155 89.164 0 0-65.624 42.353-94.068 27.061zM1419.129 691.732s-25.991 3.254-77.26-72.668c0 0 8.916 9.942 57.154 8.916 0 0-54.256-40.124-81.718-101.201 0 0 86.132 27.462 130.714-66.873 0 0-37.137 17.030-69.86 5.885 0 0 79.489-43.111 69.86-130.402 0 0-24.52 15.871-80.247 7.401 0 0 148.591-121.485 168.653-222.552 0 0 119.479 243.194-73.649 463.027 20.767 13.979 46.344 22.312 73.868 22.312 0.832 0 1.663-0.008 2.491-0.023s-24.956 68.301-120.050 86.134z"></path>\n  <path fill="#000" class="path6 fill-color1" d="M873.804 248.544c21.845-27.864 159.603-248.098 81.585-248.544-143.999-0.892-290.54 161.609-290.54 161.609-46.053-37.137-127.816-16.362-127.816-16.362s-2.987-20.062 21.934-37.895c0 0-30.093-5.573-46.811 13.018 0 0-1.115-39.767 7.044-49.397 0 0-44.225 19.705-58.313 60.185-2.158-0.343-4.646-0.539-7.18-0.539-14.27 0-27.087 6.219-35.889 16.095s30.898 4.506 38.744 13.422c0 0-44.359 1.694-97.5 47.168-26.065-40.755-89.434-85.251-163.393-101.472-133.433-28.573-224.469-17.428-187.466 36.071s109.047 186.486 196.16 200.618c39.232 6.375 65.624 11.948 82.922 16.183-2.942 7.668-5.974 15.069-9.362 22.291-17.075 37.137-30.449 72.089-66.873 98.080 0 0 31.965 23.762 101.78 12.617 0 0-45.384 45.295-73.56 49.040 0 0 43.066 17.833 131.516 8.916 0 0-12.661 14.801-14.177 43.779 0 0 54.256-32.678 99.551 29.736s41.595 63.128 41.595 63.128 5.929 62.415 83.234 57.956 88.406-66.873 76.547-83.948c0 0 2.987-37.895 15.604-67.631s39.589-84.705 98.66-66.293c0 0 1.694-16.763-20.641-30.628 0 0 81.941-0.58 121.53-42.665 0 0-80.782-11.458-95.851-21.488 0 0 57.421 5.038 95.851-42.888 0 0-62.147-21.711-104.767-75.789-0.178 0.134 69.993-19.17 105.659-64.51zM749.421 306.277c3.629 15.869 47.253 59.268 100.954 85.002s-29.177 40.362-90.522 32.872c0 0 8.158 30.628 90.635 33.971 0 0-16.718 24.877-119.613 33.080-1.204-2.738 14.67 7.603 26.648 21.414s-53.754-7.995-76.446 36.943c1.353-10.493-20.392 39.228-31.834 92.767-14.496-5.019-31.199-9.578-48.966-9.578-7.574 0-14.955 0.828-22.056 2.4-37.977 8.791-57.281 16.593-71.77 39.642 0 0-34.194-54.256-47.168-66.873s-38.652-49.040-85.062-30.851c0 0-6.331-17.476 17.476-39.009 0 0-77.662 11.145-118.142-0.357 0 0 47.569-24.877 53.498-58.714 0 0-73.917 10.789-91.393-1.471 0 0 31.965-23.183 69.013-127.95l0.669-1.516c-29.781-4.993-85.508-14.534-98.080-17.833-17.61-4.458-57.332-12.929-130.536-109.894s-74.006-106.996-37.895-114.397c18.591-3.7 142.305-6.241 212.12 31.965 67.541 37.003 87.648 62.415 109.671 91.081l0.669-1.516c19.629-25.484 62.445-51.808 111.376-60.326s-3.8-20.234-36.701-23.577c0 0 9.808-6.776 36.245-0.892 0 0 1.337-35.22 33.258-52.696-0.662 4.756-1.040 10.251-1.040 15.834 0 11.664 1.65 22.942 4.729 33.614s11.514-23.413 30.996-21.942c-7.050 7.731-11.368 18.059-11.368 29.396 0 3.811 0.488 7.507 1.405 11.031s77.193-28.212 139.608 22.433c0 0 118.142-157.686 275.293-169.143 70.261-5.171-60.542 203.873-80.47 230.666-30.182 40.436-115.155 64.376-115.155 64.376z"></path>\n  <path opacity="0.4" fill="#000" class="path7 fill-color2" d="M366.908 235.972c-0.22 0.003-0.587 0.122-0.901 0.318l0.901 1.064v-1.337z"></path>\n  <path fill="#000" class="path8 fill-color1" d="M897.521 89.52c-29.335-10.388-67.319 30.405-124.071 76.948-62.102 50.823-76.592 96.208-25.679 104.009s90.635-21.934 120.371-67.229 58.714-103.43 29.335-113.773zM861.098 197.275c-56.485 92.507-167.94 68.879-116.938 13.152 31.207-34.016 46.276-44.582 63.306-59.963s57.288-50.11 75.789-51.269 35.086 4.146-22.113 98.080zM208.375 204.319c-46.142-30.494-142.662-86.935-126.479-32.322 7.267 24.52 55.192 135.44 142.662 135.44s104.321-23.183-16.183-103.118zM213.948 293.482c-42.353-0.624-75.789-34.462-115.913-108.111-31.653-57.956 67.408 5.528 105.481 30.672 118.008 78.197 74.050 78.553 10.477 77.439zM461.422 413.853c-8.025-22.291 7.936-54.033 23.361-15.024 15.158 38.474-16.406 34.506-23.405 15.024zM589.595 388.308c-4.458-22.291 10.388-42.977 23.896-11.591 14.623 33.659-18.1 40.124-23.851 11.591zM476.446 635.559s-14.623 60.72-93.622 123.804c-82.788 65.981-217.738 79.668-175.34 123.358 17.833 18.412 91.036 76.146 187.244-16.718s138.962-149.706 126.746-179.041l-1.115-7.846s-9.139 54.212-77.127 118.855c-61.523 58.402-144.178 147.12-214.528 83.591-61.523-55.549 189.116-37.895 257.817-237.042zM617.191 715.538s-15.336 101.78-113.416 172.353-120.371 118.142-20.062 133.745 151.132-44.582 221.75-267.491c59.829-189.116 61.389-174.137 54.969-192.593 0 0-37.805 102.895-63.529 176.41-37.984 108.646-86.132 252.645-159.692 266.020s-145.471-16.362-70.796-71.331 135.35-101.959 163.303-212.299z"></path>\n  <path fill="#000" class="path9 fill-color1" d="M737.294 641.978s57.689 8.916 95.583-27.507l5.216-19.304c-26.26 21.222-60.055 34.068-96.849 34.068-1.405 0-2.805-0.019-4.201-0.056l0.206 12.933z"></path>\n  <path fill="#000" class="path10 fill-color1" d="M887.178 489.642c1.337-0.624-121.887 143.999-12.661 213.993 109.894 70.439 158.578 79.356 113.996 113.684-78.91 60.72-123.046-37.716-179.665 63.886-45.473 81.897 133.745 60.096 203.739 5.216 43.69-34.328 127.95-76.235 165.577-164.329 20.953-49.040 27.462-112.614 4.458-197.185-13.107-47.97-57.511-333.472-266.911-355.897l-13.954 12.305s157.731-24.698 245.2 261.695-7.49 332.447-143.776 433.068c-23.405 17.298-79.177 43.423-141.592 47.346s-47.703-40.124-18.903-67.408c32.901-31.207 88.005 18.903 150.776-27.552 46.231-34.194 26.080-56.931-75.165-109.092-113.505-58.491-76.101-130.848-51.447-176.009 19.616-35.844 23.94-47.257 20.285-53.677z"></path>\n  <path fill="#000" class="path11 fill-color1" d="M1070.677 273.42s78.776-95.851 234.812 29.736c0 0-41.595 20.731-54.256 39.678 0 0 129.644 91.125 286.795-243.996 0 0 132.586 264.504-64.644 487.413 0 0 27.819 12.26 78.018 8.916 0 0-68.389 184.257-278.636 70.216-1.173 5.087-1.845 10.929-1.845 16.927 0 12.062 2.719 23.49 7.577 33.703s-81.565-13.85-88.253-73.010l2.229-32.233s13.375 70.35 69.102 89.164c0 0-14.534-32.456-1.159-64.777 0 0 171.64 131.873 270.835-25.278 0 0-64.332-2.987-83.279-23.049 0 0 190.944-148.591 90.635-458.435 0 0-145.649 326.919-306.143 219.922 0 0 25.278-31.207 52.74-45.34 0 0-118.855-99.551-209.535-23.049zM759.496 627.846s-40.124 66.873 3.477 83.591c97.278 37.315 67.319 49.040 24.698 50.734-33.57 1.337-62.415-39.366-98.526 18.591s64.777 101.201 269.854-31.965l-12.75-10.566s-92.284 72.98-177.748 83.546-75.522-23.628-69.637-33.971 27.418-31.787 49.798-23.093c27.641 10.7 81.718 14.712 93.622-12.572s-72.98-38.43-83.011-60.185 9.986-49.932 15.247-61.523zM587.321 805.237c-64.020 96.965-136.51 125.542-136.51 125.542l-23.628 36.557v15.604c44.582 61.701 150.865 11.948 150.865 11.948l58.313-77.572 36.825-83.636s10.566-75.21-16.763-32.322c0 0-0.535-73.248-40.124-13.375 0 0-1.427-42.665-9.362-23.628s-19.616 40.882-19.616 40.882zM437.348 715.538c-16.852 28.844-127.504 106.238-219.699 133.745l-12.572 14.846 34.15 35.665s80.247 35.665 147.12-37.716l92.284-96.029s33.436-49.040-9.362-36.78c0 0 7.757-42.353-13.954-11.145 0 0.178 1.025-34.908-17.922-2.586zM809.16 911.119s11.725-76.413 63.485-74.452 49.040 16.228 89.743 0c0 0 48.505-15.292 25.1 17.030 0 0 34.016-28.443 26.214 2.229 0 0 30.226-1.783 12.26 16.049 0 0.089-157.196 98.749-216.846 39.098z"></path>\n  <path fill="#000" class="path12 fill-color1" d="M809.16 764.801s38.43-15.292 28.978 6.464c0 0 39.098-9.808 12.483 18.368 0 0 28.087-15.604 14.266 6.152 0 0-121.53 60.185-173.334 22.87 0 0-13.91-55.727 41.818-60.72 0 0 54.033 14.935 75.789 6.91z"></path>\n  <path fill="#000" class="path8 fill-color1" d="M885.903 686.077c38.011-94.185 21.075-212.011 21.075-212.011l-12.76 0.651s18.699 113.803-15.978 200.478c-6.496 10.301-18.088 49.131-22.297 90.149-27.324 13.692-56.714-3.168-68.056-10.908-25.202 30.078 0.052 4.024 18.82-26.452 10.8-20.219 48.504-96.854 3.136-194.564l-7.012 5.594s40.233 111.772-5.748 179.441-75.371 95.794-75.371 95.794c-11.829-13.736 2.771 6.6 21.328 22.436 9.94-2.564 23.331-14.42 30.697-29.723s-9.493 27.979-4.205 47.713c27.052 13.488 63.071 17.243 101.465-18.009 0.153 0.115-14.063-78.934 14.867-150.588z"></path>\n</svg>\n';
}, function(t, e) {
    t.exports = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1399 1024">\n  <title>goat-sound</title>\n  <path fill="#eee8e5" class="path1 fill-color10" d="M219.177 245.999l22.991-45.981 45.215-29.888 45.368-6.514-7.050-10.116-18.776-20.155 30.271 6.322 21.573 8.162-0.958-8.621-12.913-13.411 22.071 0.958 21.075 22.991 11.035-10.537 15.327-5.748-7.664 12.951 0.958 18.699 42.456 2.299 46.479 29.236 13.028-24.37 91.962-58.434s83.801-55.101 180.093-62.764 206.915-17.703 294.049 121.658l1.724-9.196 34.946 17.779 52.227 64.22 60.35 29.696 53.185 2.452-17.243 15.825-22.991 10.078 20.117 13.411 62.764-1.916-9.963 22.033-28.738 25.405-22.991 7.204 25.826 31.152 54.603 14.829 52.189-1.916-28.24 28.738-42.609 25.864 34.984 45.521 19.657 18.699-19.159 5.288-74.719 1.916-49.813-19.159-24.447-22.033-21.535-23.374-17.703 40.233-17.243-26.822-34.486-86.215-22.991 165.685-62.726 127.329-26.822 234.197-90.43-72.803 33.49-79.011 24.447-102.001 5.288-80.467s-22.991-119.244-40.233-132.196l-38.318 13.909 6.706 103.994-17.894 80.62-34.486 135.568-77.785-40.617 36.019-47.399 14.331-91.043-9.081-43.107-10.997-37.398-91.579 74.719-65.523 29.696-11.878 76.942-3.334 60.848-0.383 183.465-95.028-61.691 16.745-53.147 16.86-98.859v-113.229l-48.817-7.664-27.282 78.551-24.906 119.091-78.551-43.567 32.57-53.108 22.607-65.6s-70.428 74.719-150.895-27.282-67.516-153.73-86.713-252.896l-45.521 33.528-50.771 18.699s-80.467 21.075-107.289-24.408l11.035-17.243 60.312-40.272 56.518-69.968 48.395-28.202z"></path>\n  <path fill="#846d67" class="path2 fill-color3" d="M222.166 237.416l23.489-38.318 34.486-24.906s-74.221-103.917-144.611-131.276-36.9 13.948-36.9 13.948l44.065 47.897s71.846 107.749 79.509 132.656zM435.786 164.153l28.738 9.579 33.068 30.654 6.246-24.906 35.405-63.684 32.378-44.219 37.321-45.483 9.579-16.706c-6.706-5.25-18.661-1.916-18.661-1.916l-55.101 30.271s-89.931 68.014-109.090 126.448z"></path>\n  <path fill="#ddaea2" class="path3 fill-color7" d="M544.034 343.326l-5.978-12.492 0.23-9.809 9.579-1.686 30.654 17.473 65.906 56.633-3.832 4.905s-34.869-2.146-57.476-18.392-30.922-22.071-39.084-36.67zM115.106 401.109l3.372-9.081 86.713-70.16 9.349-0.958-3.065 17.818s-8.43 21.573-18.239 28.278-62.266 43.567-77.9 35.444z"></path>\n  <path fill="#eee8e5" class="path4 fill-color10" d="M304.548 645.039s-33.528 13.411-23.949 43.107 72.344 59.852 130.28-1.916c-0.153 0-68.474 13.718-106.331-41.23z"></path>\n  <path fill="#fff" class="path5 fill-color13" d="M297.345 641.667s1.916 60.848 46.977 61.806 66.596-17.243 66.596-17.243-69.968 13.411-113.535-44.602z"></path>\n  <path fill="#000" class="path6 fill-color1" d="M711.673 349.342c-51.077-25.558-111.121-134.763-186.492-107.941 0 0-26.822-89.28-115.413-81.425 0 0-0.46-20.117 7.664-29.045 0 0-20.117-0.958-29.696 16.285 0 0-9.579-32.263-54.028-22.991 0 0 15.327 7.357 20.462 18.201 0 0-38.969-20.423-56.212-7.012 0 0 23.642 14.063 29.696 24.906 0 0-64.757-17.703-116.217 83.647 0 0-55.561-3.18-118.172 78.551s-120.049 62.573-80.467 102.193 161.585 8.315 192.853-35.137c0 0 3.832 144.956 68.972 235.002s143.691 91.311 203.467 9.426c49.047-67.056 64.872-256.728 64.872-256.728s66.289 63.377 139.706 35.904 79.969-38.318 28.853-63.837zM682.322 404.902c-78.053 32.187-146.373-46.594-146.373-46.594-11.495 158.405-50.196 277.803-105.373 310.373s-106.025 10.576-158.405-65.906c-48.28-70.351-57.975-232.32-57.975-232.32-62.534 63.99-159.784 78.436-192.163 52.112-19.159-15.71-4.866-24.83 22.607-40.617 38.969-22.301 45.981-43.682 82.306-85.602s94.261-44.947 94.261-44.947c40.502-100.929 114.301-82.728 114.301-82.728 4.981-16.477-22.033-31.114-22.033-31.114 17.243-1.418 47.705 15.327 47.705 15.327 4.062-14.369-10.997-24.906-10.997-24.906 22.531-0.23 37.858 27.972 37.858 27.972 8.813-15.71 18.699-17.243 18.699-17.243-7.893 14.178-2.376 30.654-2.376 30.654 5.584-1.212 11.998-1.907 18.574-1.907 2.593 0 5.161 0.108 7.699 0.32 66.034 3.809 92.243 86.652 92.243 86.652 60.848-34.486 145.147 78.091 165.724 92.92 40.732 29.313 71.807 25.29-6.246 57.591z"></path>\n  <path fill="#000" class="path7 fill-color1" d="M283.934 169.9s-91.962-117.329-154.19-134.112c-52.38-14.024-56.212-1.456-30.194 23.45s84.299 106.983 118.785 181.051l6.322-14.561s-64.757-113.42-101.159-150.78c-32.685-33.566-39.659-39.122-15.059-36.747s52.725 18.699 84.299 46.211c41.383 36.019 83.149 91.196 83.149 91.196zM597.448 4.598c-51.729 20.577-131.928 84.682-167.946 158.635l9.503 2.299c3.065-6.131 8.047-15.978 13.986-25.596 9.579-15.634 28.585-48.778 91.502-96.56 22.224-16.86 89.931-56.327 63.914-21.841s-27.78 29.045-66.098 82.689c-10.997 15.327-44.448 71.041-52.687 92.614-22.578-24.386-1.869-5.076 13.951 17.866-18.358-4.647 47.050-115.921 85.023-156.768 16.975-18.201 62.075-74.489 8.89-53.261zM147.446 363.864c-15.787 12.951-47.437 39.774-33.528 42.149s85.755-21.075 100.584-69.432-38.931 4.292-67.056 27.282zM210.67 331.294c-9.081 23.949-16.477 33.068-38.548 46.939-17.051 10.729-82.766 38.318-32.57 0 6.131-4.598 10.154-7.664 33.911-27.895 8.047-6.897 46.364-42.916 37.168-19.006zM637.912 383.559c-27.78-18.699-69.278-72.535-100.392-66.289-12.645 2.529 13.028 49.545 44.333 65.676 50.349 25.826 83.839 19.235 56.059 0.575zM621.435 393.445c-38.701-7.97-70.504-39.62-76.252-54.334-3.18-8.162-13.028-22.607 7.472-15.327s47.246 36.287 63.99 49.813c15.327 12.185 41.958 27.512 4.828 19.849zM1329.085 468.241c52.687-24.37 69.47-60.312 69.47-60.312-93.878 21.075-130.778-35.444-130.778-35.444 30.924-8.197 56.108-35.484 61.774-69.38-30.584 28.227-84.228 2.363-84.228 2.363 19.159-1.916 45.521-37.321 45.521-37.321-44.065 17.243-112.539-4.292-147.983-60.81-33.49-53.453-70.313-48.28-73.953-47.514l4.713 9.196c20.577 1.686 42.839 17.511 58.818 42.609 53.261 83.647 136.564 69.432 136.564 69.432-9.579 13.909-38.816 22.033-38.816 22.033 33.068 30.654 83.839 20.577 83.839 20.577-10.932 22.628-34.073 38.876-61.138 40.227 22.36 69.936 125.818 57.023 125.818 57.023-20.577 28.738-63.684 44.065-63.684 44.065-3.285 3.063 19.917 37.871 51.001 63.447-134.764 29.013-175.457-64.367-175.457-64.367-11.955 5.748-24.408 40.233-24.408 40.233-23.22-32.953-48.855-129.284-48.855-129.284l-2.376 15.327c6.706 61.078 54.258 136.411 54.258 136.411 8.277-31.995 19.542-41.575 19.542-41.575 61.308 94.874 201.167 49.43 201.167 49.43-21.266-8.813-60.848-66.289-60.848-66.289zM393.139 537.213c33.030 2.031 74.336 13.143 53.645 67.746s-83.302 82.115-123 6.514 49.276-75.486 69.355-74.26zM319.416 371.528c7.395-2.222 10.537 11.035 11.495 21.075s-10.997 25.864-17.703 6.246 1.418-25.903 6.207-27.359zM411.263 371.566c6.514-2.146 10.959 4.483 11.878 15.94s-7.664 21.918-13.871 9.963-6.131-23.182 2.031-25.903z"></path>\n  <path fill="#000" class="path8 fill-color1" d="M466.249 113.918s38.509 27.704 38.816 51.499l5.594-3.257c-2.756-16.519-18.204-38.427-39.472-52.039zM527.25 131.813s-2.376-35.252-28.355-52.572l4.521-4.981s26.822 28.47 28.738 51.729zM550.011 97.825s-4.062-29.696-18.392-45.981l3.564-3.602s16.093 21.075 18.392 43.797zM558.173 29.428s14.561 19.925 13.181 40.004l5.058-3.334s-2.146-23.949-14.829-37.819zM202.853 198.025s9.963-46.747 40.233-65.791l-4.79-3.832s-32.685 26.056-38.049 65.523zM185.304 166.873s4.33-42.916 30.654-62.266l-5.096-5.096s-26.516 30.424-29.39 61.615zM162.084 130.127s1.15-32.57 25.366-53.645l-3.065-4.062c-11.008 9.238-22.303 28.807-25.833 50.965zM138.71 97.403s-0.498-37.36 18.009-43.759l-3.832-2.069s-19.925 10.844-17.396 43.107zM947.825 451.995c-39.544 9.12-78.053 16.285-156.144 91.962-50.349 48.817-126.831 95.334-148.442 92.92 0 0-22.991 92.575-15.021 270.446-41 19.925-68.742 2.797-80.16-7.204 18.776-54.028 34.256-138.327 27.589-265.618 0 0-53.108 3.065-83.149-41l-5.901 17.051c-30.958-22.719-4.819-0.546 25.067 15.57-2.537 11.559-28.324 88.769-38.823 160.27-23.872 18.124-59.124-2.376-72.152-11.227 22.607-35.137 47.246-80.237 53.645-118.785l-10.039 8.583s-42.149 113.037-103.917 166.682c-3.461-2.047 7.347 10.15 20.734 18.65 11.453-1.024 21.684-11.063 37.049-32.866 0 0-15.863 30.654-7.28 50.196 23.987 8.43 54.641 8.238 87.939-19.159 0 0 2.299-120.892 48.932-214.579 8.997 4.728 22.396 8.425 36.6 8.999s4.554 103.234-6.942 169.37-33.988 127.866-73.263 173.502c-8.577-5.054 12.685 13.461 37.609 25.642 14.656-8.935 29.217-26.408 36.574-60.281 0 0-6.016 50.579 9.771 72.803 24.255 1.15 51.269-6.514 77.402-32.57 0 0-25.021-242.78 7.664-344.859 0 0 73.493-16.247 149.439-97.71s185.457-94.261 185.457-94.261-7.012-10.192-40.233-2.529z"></path>\n  <path fill="#000" class="path9 fill-color1" d="M1122.783 376.279c15.978-298.877-205.651-329.532-227.99-333.363-198.792-33.988-388.234 129.13-388.234 129.13l-11.495 19.159s196.569-169.441 399.078-136.794c146.871 23.68 189.366 135.913 203.083 185.84 21.726 79.241 20.615 151.431-6.399 298.877-15.327 82.919-58.779 105.373-74.106 198.639-6.131 36.938-7.050 85.831-7.664 129.13-8.005 2.779-17.231 4.384-26.832 4.384-22.232 0-42.454-8.606-57.516-22.669-18.99 52.045 21.014-34.963 44.816-128.442 32.366-127.743-24.152-259.478-24.152-259.478l-12.262 3.832c108.515 251.862-74.451 461.536-74.451 461.536-1.87 0.75 9.228 16.916 23.956 28.749 19.994-8.67 39.191-33.692 49.23-58.79 0 0-16.592 48.51-5.978 83.916 51.576 16.362 104.301-3.065 104.301-3.065s-19.619-78.666-1.916-232.818c15.327-133.345 78.551-68.857 94.491-367.734z"></path>\n  <path fill="#000" class="path10 fill-color1" d="M885.903 686.077c37.934-94.185 21.075-212.011 21.075-212.011l-12.798 0.651s18.507 113.803-15.978 200.401c-6.484 10.244-18.106 49.098-22.334 90.145-27.325 13.773-56.715-3.087-68.057-10.827-25.127 29.99 0.154 3.907 18.935-26.605 10.8-20.22 48.505-96.855 3.136-194.565l-7.012 5.748s40.233 111.772-5.748 179.441-75.371 95.794-75.371 95.794c-11.829-13.736 2.771 6.6 21.328 22.436 9.94-2.564 23.331-14.42 30.697-29.723s-9.493 27.979-4.205 47.713c27.052 13.488 63.071 17.243 101.465-18.009 0.153 0.115-14.101-78.934 14.829-150.588zM293.513 639.751s-36.938 36.785-5.748 67.056c45.981 44.563 124.532 2.874 138.94-28.24l-15.327 3.832s-18.201 29.045-61.96 34.869-83.839-25.29-49.813-69.891z"></path>\n  <path fill="#000" class="path11 fill-color1" d="M299.261 648.334c24.906 85.946 107.979 39.62 107.979 39.62l2.222 6.399c-113.65 48.242-115.949-50.733-115.949-50.733z"></path>\n  <path fill="#000" class="path12 fill-color1" d="M315.89 662.128l-0.307 23.297c4.138 5.441 3.18 2.567 3.18 2.567v-25.864h-3.065zM331.562 675.233l-0.192 22.607 3.372 3.717v-26.516l-3.18 0.153zM349.763 683.855l-1.763 20.577 3.678-0.307 2.222-19.925-4.138-0.383zM368.615 689.257l-3.065 15.978 3.18-1.264 3.372-15.174-3.449 0.46z"></path>\n</svg>\n'
}, function(t, e) {
    t.exports = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1399 1024">\n  <title>goat</title>\n  <path fill="#eee8e5" class="path1 fill-color10" d="M219.177 245.999l22.991-45.981 45.33-29.964 45.33-6.514-7.127-10.039-18.776-20.155 30.271 6.322 21.573 8.162-0.958-8.621-12.913-13.411 22.071 0.958 21.075 22.991 11.035-10.537 15.327-5.748-7.664 12.951 0.958 18.699 42.648 2.299 46.479 29.236 12.951-24.37 91.962-58.434s83.839-55.101 180.093-62.764 206.915-17.703 294.088 121.658l1.916-9.081 34.946 17.741 52.227 64.182 60.35 29.696 53.185 2.414-17.243 15.825-22.991 10.039 20.117 13.411 62.764-1.916-9.963 22.033-28.738 25.405-22.991 7.204 25.826 31.152 54.603 14.944 52.189-1.916-28.24 28.738-42.609 25.826 34.984 45.521 19.657 18.699-19.159 5.288-74.719 1.916-49.813-19.159-24.447-22.033-21.841-23.642-17.626 40.233-17.243-26.822-34.486-86.215-22.991 165.724-62.764 127.444-26.822 234.236-90.506-72.803 33.528-79.049 24.37-102.040 5.288-80.467s-22.991-119.244-40.233-132.196l-38.318 13.909 6.744 103.956-17.741 80.774-34.486 135.568-77.593-40.693 35.942-47.399 14.369-91.004-9.043-43.107-10.997-37.36-91.464 74.719-65.6 29.696-12.262 77.018-3.295 60.925-0.46 183.426-94.836-61.768 16.783-53.147 16.706-98.744v-113.42l-48.893-7.664-27.282 78.551-24.906 119.168-78.551-43.567 32.57-53.108 22.607-65.523s-70.351 74.719-150.818-27.282-67.554-153.769-86.713-252.896l-45.521 33.49-50.771 18.699s-80.467 21.075-107.289-24.408l11.035-17.243 60.35-40.233 56.518-69.93 48.395-28.24z"></path>\n  <path fill="#846d67" class="path2 fill-color3" d="M222.242 237.416l23.45-38.318 34.486-24.906s-74.221-103.917-144.649-131.276-36.862 13.948-36.862 13.948l44.065 47.897s71.846 107.749 79.509 132.656zM435.825 164.153l28.738 9.579 33.068 30.654 6.246-24.906 35.444-63.684 32.57-44.065 37.36-45.483 9.579-16.745c-6.706-5.25-18.661-1.916-18.661-1.916l-55.062 30.194s-90.123 67.937-109.282 126.372z"></path>\n  <path fill="#ddaea2" class="path3 fill-color7" d="M544.11 343.326l-6.016-12.492 0.383-9.809 9.579-1.686 30.654 17.473 65.715 56.633-3.602 4.981s-34.946-2.107-57.476-18.392-31.152-22.148-39.276-36.785zM115.144 401.109l3.372-9.081 86.598-70.006 9.349-0.958-3.065 17.741s-8.43 21.611-18.239 28.355-61.998 43.567-77.785 35.405z"></path>\n  <path fill="#000" class="path4 fill-color1" d="M711.711 349.342c-51.116-25.558-111.121-134.763-186.492-107.941 0 0-26.822-89.28-115.413-81.425 0 0-0.46-20.117 7.664-29.045 0 0-20.117-0.958-29.696 16.285 0 0-9.579-32.263-53.951-22.991 0 0 15.327 7.357 20.423 18.201 0 0-38.969-20.423-56.212-7.012 0 0 23.642 14.063 29.696 24.906 0 0-64.757-17.703-116.217 83.647 0 0-55.561-3.18-118.133 78.551s-120.049 62.573-80.467 102.193 161.547 8.315 193.006-35.099c0 0 3.832 144.956 68.972 235.002s143.691 91.349 203.543 9.464c49.047-67.056 64.833-256.728 64.833-256.728s66.289 63.377 139.706 35.904 79.816-38.318 28.738-63.875zM682.322 404.902c-78.053 32.187-146.373-46.594-146.373-46.594-11.495 158.405-50.196 277.803-105.373 310.373s-106.025 10.576-158.405-65.906c-48.28-70.351-57.975-232.32-57.975-232.32-62.458 64.144-159.67 78.628-192.125 52.189-19.159-15.634-4.866-24.791 22.607-40.54 38.969-22.339 45.981-43.759 82.306-85.64s94.261-44.947 94.261-44.947c40.578-101.082 114.148-82.919 114.148-82.919 4.981-16.477-22.033-31.037-22.033-31.037 17.243-1.456 47.667 15.327 47.667 15.327 4.062-14.407-10.997-24.906-10.997-24.906 22.531-0.268 37.858 27.972 37.858 27.972 8.813-15.787 18.699-17.243 18.699-17.243-7.855 14.178-2.299 30.654-2.299 30.654 5.62-1.228 12.076-1.932 18.696-1.932 2.536 0 5.049 0.103 7.533 0.306 66.078 3.81 92.287 86.653 92.287 86.653 60.848-34.486 145.147 78.053 165.724 92.882 40.847 29.351 71.922 25.366-6.131 57.63z"></path>\n  <path fill="#000" class="path5 fill-color1" d="M283.934 169.9s-91.962-117.329-154.19-134.112c-52.495-14.178-56.020-1.418-30.156 23.489s84.337 107.021 118.823 181.051l6.284-14.561s-64.757-113.42-101.159-150.818c-32.723-33.566-39.62-39.084-15.021-36.708s52.687 18.699 84.299 46.211c41.383 36.019 83.149 91.196 83.149 91.196zM597.487 4.598c-51.729 20.577-131.928 84.682-167.946 158.635l9.579 2.299c2.989-6.131 8.047-15.978 13.948-25.596 9.579-15.634 28.585-48.778 91.502-96.56 22.224-16.86 89.893-56.327 63.875-21.841s-27.857 29.121-66.175 82.766c-10.997 15.327-44.448 71.003-52.687 92.575-22.578-24.386-1.869-5.076 13.951 17.866-18.358-4.608 47.050-115.845 85.023-156.729 17.013-18.239 62.075-74.528 8.928-53.338zM147.638 363.864c-15.787 12.951-47.399 39.774-33.528 42.149s85.755-21.075 100.584-69.432-39.084 4.292-67.056 27.282zM210.862 331.294c-9.081 23.949-16.477 33.068-38.548 46.939-17.051 10.729-82.766 38.318-32.57 0 6.131-4.598 10.154-7.664 33.911-27.895 7.855-6.897 46.134-42.916 37.053-19.006zM638.103 383.559c-27.78-18.699-69.278-72.535-100.392-66.289-12.645 2.529 13.028 49.545 44.333 65.676 50.196 25.826 83.686 19.235 56.059 0.575zM621.627 393.445c-38.701-7.97-70.504-39.62-76.252-54.334-3.18-8.162-13.028-22.607 7.472-15.327s47.246 36.287 63.99 49.813c15.212 12.185 41.766 27.512 4.828 19.849zM1329.085 468.241c52.687-24.37 69.47-60.312 69.47-60.312-93.878 21.075-130.778-35.444-130.778-35.444 30.924-8.197 56.108-35.484 61.774-69.38-30.584 28.227-84.228 2.363-84.228 2.363 19.159-1.916 45.521-37.321 45.521-37.321-44.065 17.243-112.539-4.292-147.983-60.81-33.49-53.453-70.313-48.28-73.953-47.514l4.713 9.196c20.423 1.686 42.762 17.549 58.741 42.533 53.338 83.686 136.794 69.508 136.794 69.508-9.579 13.909-38.701 22.033-38.701 22.033 33.030 30.654 83.801 20.577 83.801 20.577-10.932 22.628-34.073 38.876-61.138 40.227 22.36 69.936 125.818 57.023 125.818 57.023-20.577 28.738-63.684 44.065-63.684 44.065-3.29 3.049 19.878 37.858 50.928 63.449-134.729 29.011-175.422-64.369-175.422-64.369-11.955 5.748-24.408 40.233-24.408 40.233-23.22-32.953-48.855-129.284-48.855-129.284l-2.376 15.327c6.706 61.078 54.258 136.411 54.258 136.411 8.238-31.995 19.465-41.575 19.465-41.575 61.308 94.874 201.167 49.43 201.167 49.43-21.228-8.813-61.002-66.289-61.002-66.289zM393.139 537.213c33.030 2.031 74.336 13.143 53.645 67.746s-83.302 82.115-123 6.514 49.276-75.486 69.355-74.26zM319.416 371.528c7.395-2.222 10.537 11.035 11.495 21.075s-10.997 25.864-17.703 6.246 1.418-25.903 6.207-27.359zM411.301 371.566c6.514-2.146 10.959 4.483 11.878 15.94s-7.664 21.918-13.871 9.963-6.399-23.182 1.993-25.903z"></path>\n  <path fill="#000" class="path6 fill-color1" d="M466.249 113.918s38.509 27.704 38.816 51.499l5.594-3.257c-2.756-16.519-18.204-38.427-39.472-52.039zM527.25 131.813s-2.299-35.252-28.47-52.495l4.598-4.981s26.822 28.508 28.738 51.729zM549.973 97.825s-4.062-29.696-18.392-45.981l3.564-3.602s16.093 21.075 18.392 43.797zM558.211 29.428s14.561 19.925 13.181 40.004l4.981-3.334s-2.107-23.949-14.791-37.819zM202.892 198.025s9.963-46.747 40.233-65.791l-4.79-3.832s-32.647 26.056-38.011 65.523zM185.304 166.873s4.33-42.916 30.654-62.266l-5.096-5.096s-26.516 30.424-29.39 61.615zM162.084 130.127s1.15-32.57 25.405-53.645l-3.065-4.062c-11.008 9.238-22.303 28.807-25.833 50.965zM138.863 97.403s-0.46-37.36 18.009-43.759l-3.832-2.069s-19.925 10.844-17.358 43.107zM947.825 451.995c-39.544 9.12-78.053 16.285-156.144 91.962-50.311 48.74-126.716 95.334-148.442 92.92 0 0-22.991 92.575-15.021 270.446-41 19.925-68.742 2.797-80.16-7.204 18.776-54.028 34.256-138.327 27.589-265.618 0 0-53.108 3.065-83.149-41l-5.901 17.051c-30.958-22.719-4.819-0.546 25.067 15.57-2.537 11.559-28.324 88.769-38.823 160.27-23.872 18.124-59.124-2.376-72.152-11.227 22.607-35.137 47.246-80.237 53.645-118.785l-10.039 8.583s-42.149 113.037-103.917 166.682c-3.461-2.047 7.347 10.15 20.734 18.65 11.453-1.024 21.684-11.063 37.049-32.866 0 0-15.863 30.654-7.28 50.196 23.987 8.43 54.641 8.238 87.939-19.159 0 0 2.299-120.892 48.932-214.579 8.997 4.728 22.396 8.425 36.6 8.999s4.784 103.080-6.712 169.293-33.949 127.904-73.187 173.579c-8.598-5.066 12.66 13.412 37.569 25.565 14.658-8.897 29.219-26.408 36.576-60.243 0 0-6.016 50.579 9.771 72.803 24.255 1.226 51.269-6.514 77.402-32.493 0 0-25.021-242.819 7.664-344.859 0 0 73.493-16.285 149.439-97.71s185.457-94.338 185.457-94.338-7.28-10.116-40.463-2.452z"></path>\n  <path fill="#000" class="path7 fill-color1" d="M1122.821 376.279c15.978-298.877-205.651-329.532-227.99-333.363-198.792-33.988-388.272 129.13-388.272 129.13l-11.495 19.159s196.684-169.364 399.116-136.679c146.871 23.68 189.366 135.913 203.083 185.84 21.726 79.241 20.615 151.431-6.399 298.877-15.327 82.919-58.779 105.373-74.106 198.639-6.131 36.938-7.050 85.831-7.664 129.13-8.005 2.779-17.231 4.384-26.832 4.384-22.232 0-42.454-8.606-57.516-22.669-18.99 52.045 21.014-34.963 44.816-128.442 32.366-127.743-24.152-259.478-24.152-259.478l-12.262 3.832c108.515 251.862-74.451 461.536-74.451 461.536-1.87 0.75 9.228 16.916 23.956 28.749 19.994-8.67 39.191-33.692 49.23-58.79 0 0-16.592 48.51-5.978 83.916 51.576 16.362 104.301-3.065 104.301-3.065s-19.619-78.666-1.916-232.818c15.327-133.345 78.551-68.857 94.53-367.734z"></path>\n  <path fill="#000" class="path8 fill-color1" d="M885.903 686.077c38.011-94.185 21.075-212.011 21.075-212.011l-12.76 0.651s18.699 113.803-15.978 200.478c-6.496 10.301-18.088 49.131-22.297 90.149-27.324 13.692-56.714-3.168-68.056-10.908-25.202 30.078 0.052 4.024 18.82-26.452 10.8-20.219 48.504-96.854 3.136-194.564l-7.012 5.594s40.233 111.772-5.748 179.441-75.371 95.794-75.371 95.794c-11.829-13.736 2.771 6.6 21.328 22.436 9.94-2.564 23.331-14.42 30.697-29.723s-9.493 27.979-4.205 47.713c27.052 13.488 63.071 17.243 101.465-18.009 0.153 0.115-14.063-78.934 14.867-150.588z"></path>\n</svg>\n'
}, function(t, e) {
    t.exports = '<svg id="christmas" data-name="christmas" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.95 73.97"><defs><style>.cls-1{fill:#c32126;}.cls-2{fill:#fff;}.cls-3{fill:#231f20;}</style></defs><title>xmas-hat</title><path class="cls-1" d="M42.35,55.66l-3.61-3.21s13.69-16.17,23-17.28c1.08-.13,8.3,1.07,11.7,4.6S90.61,58,93,73.27s5.55,16.59,5.55,16.59l-13,3.54-19.3,1.1L49.16,92.1S51.33,80,52.48,77.71s6.14-22.64,6.14-22.64L53.9,57.68l-6.14.68L43,58.15Z" transform="translate(-30.18 -34.36)"/><path class="cls-2" d="M31.09,56.88s2.29-5.1,7-4,5.26,6.62,5.26,6.62l-1.51,3.75L38,64.94,33.27,63l-2.58-3.93Z" transform="translate(-30.18 -34.36)"/><polygon class="cls-2" points="30.23 59.41 16.57 57.9 12.09 63.47 13.09 69.55 27.49 72.87 55.16 72.22 72.65 67.65 75.48 63.58 70.86 54.71 58.7 58.1 41.4 60.28 30.23 59.41"/><path class="cls-3" d="M98.54,88.36c-6.6,1.74-16.2,7.81-44.42,3.9-3.1-.43-7.51-2.47-10.07,1s-4.8,7.83-2,10.76,16.34,5,30.95,4.12,24.45-2.6,30.76-5.87C108.81,99.68,105.14,86.62,98.54,88.36Zm3.61,12.76c-2.19,1.47-15.48,4.4-20.47,4.84s-38.89,1.92-38.27-5.42c0.64-7.5,4.92-7.54,4.92-7.54,2,0,17.09,3.14,31.72,1.77,15.58-1.46,19.52-7.14,22.2-2.75S104.34,99.65,102.15,101.12Z" transform="translate(-30.18 -34.36)"/><path class="cls-3" d="M58,53.51S54.7,59,43.32,56.66L43,58.15c3,0.92,10.26,2.64,14.4-.86,0,0-9.93,28.56-9,35.72L50,92.94S58,57.34,62.29,49C62.29,49,59.15,48.12,58,53.51Z" transform="translate(-30.18 -34.36)"/><path class="cls-3" d="M64.19,34.58C53,32.14,38.28,51,37.48,52.3l2.88,0.34c1.51-3,14.3-18.37,23-16.49,8.18,1.77,23.38,9.59,32.9,53.82l2.3-.1S90.17,40.21,64.19,34.58Z" transform="translate(-30.18 -34.36)"/><path class="cls-3" d="M37.43,51.87c-4.73.49-8.38,3.65-6.92,8.33S42.89,70.56,44,58.28C44,58.28,42.16,51.38,37.43,51.87ZM31.77,59c-0.91-6.89,7.83-5.84,9.8-2.36C46.16,64.76,32.73,66.3,31.77,59Z" transform="translate(-30.18 -34.36)"/></svg>\n'
}, function(t, e) {
    t.exports = '<svg id="halloween" data-name="halloween" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 134.02 101.52"><defs><style>.cls-1{fill:#231f20;}.cls-2{fill:#4f4f4f;}.cls-3{fill:none;stroke:#fff;stroke-miterlimit:10;}</style></defs><title>halloween-hat</title><path class="cls-1" d="M1.08,111.8s42.52,12.28,72.74,5.59,56.17-13.56,61.28-13.1c0,0-21.83-13.86-40.37-17C93.2,87,87.65,72.71,86.87,61.55A76.44,76.44,0,0,0,69.6,17.87s-3.19,26.47-8.32,39.28C55,72.78,49,73.82,44.86,95.42,44.86,95.42,23.55,104.3,1.08,111.8Z" transform="translate(-1.08 -17.87)"/><path class="cls-2" d="M9.46,111.29s28.3,4.56,40.31,4.87c12.16,0.32,17.84.81,30.42-3,21.57-6.54,48.55-9.5,48.55-9.5s-21.6-12.6-32.47-13l3.34,5.82s-4.43-.18-9.74-10.34S83.76,65.1,83.66,60.48,80.84,37.83,71.1,25.37c0,0-2.5,20.47-7.62,32.81s-8.47,15-11,22.67-4.21,13.82-3.25,24.46A8.38,8.38,0,0,1,45,99.51S31.63,104.66,9.46,111.29Z" transform="translate(-1.08 -17.87)"/><polyline class="cls-3" points="68.04 57.2 82.97 70.94 83.88 54.61"/><path class="cls-3" d="M62.71,91.15c0.59,0,21.34-2.34,21.34-2.34l-1.85,3.7L75.49,106" transform="translate(-1.08 -17.87)"/><polyline class="cls-3" points="95.44 80.38 82.97 70.94 91.53 68.38"/><polyline class="cls-3" points="85.71 70.29 82.97 67.11 78.98 67.27 77.21 71.58 80.23 76.44 87.69 74.62 88.94 69.16 83.43 62.77 74.5 63.15 70.71 72.78 77.56 81.8 90.88 76.92 90.05 68.82 83.69 58.03 70.88 59.82 65.47 73.73 76.28 84.37 92.79 78.37"/></svg>\n'
}, function(t, e) {
    t.exports = '<svg id="new_year" data-name="new year" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.35 79.52"><defs><style>.cls-1{fill:#f3cb4d;}.cls-2{fill:#3975bb;}.cls-3{fill:#e11d3f;}.cls-4{fill:#231f20;}</style></defs><title>newyear-hat</title><path class="cls-1" d="M68.76,32.8L45.58,100.45s26.79,17.91,57.71-5.09Z" transform="translate(-43.45 -28.87)"/><polygon class="cls-2" points="14.07 63.37 10.6 62.11 12.01 65.55 8.06 68.1 12.46 68.17 15.16 71.78 16.02 68.11 19.95 67.63 16.95 65.2 17.77 61.41 14.07 63.37"/><polygon class="cls-2" points="42.96 51.1 41.59 47.67 39.96 51.01 35.43 49.75 38.3 53.08 37.4 57.5 40.71 55.71 43.68 58.32 43.5 54.47 46.88 52.56 42.96 51.1"/><polygon class="cls-3" points="43.44 74.38 47.14 74.62 44.82 71.71 47.89 68.16 43.66 69.32 40.05 66.61 40.25 70.37 36.62 71.94 40.18 73.42 40.45 77.29 43.44 74.38"/><polygon class="cls-2" points="36.4 24.84 36.27 21.14 33.61 23.73 29.77 21.02 31.34 25.12 29.01 28.98 32.73 28.41 34.65 31.87 35.77 28.18 39.6 27.53 36.4 24.84"/><polygon class="cls-3" points="23.34 40.8 20.38 38.58 20.73 42.28 16.21 43.57 20.39 44.92 21.93 49.16 23.82 45.9 27.72 46.58 25.55 43.39 27.44 40 23.34 40.8"/><path class="cls-4" d="M68.23,28.87l-24.78,72s28.19,20.44,61.35-5.88ZM46.34,99.59l22.51-65,32.73,60.17C71.5,116.43,46.34,99.59,46.34,99.59Z" transform="translate(-43.45 -28.87)"/></svg>'
}, function(t, e) {
    t.exports = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1088 1024">\n<title>speaker</title>\n<path class="path1" d="M890.040 922.040c-12.286 0-24.566-4.686-33.942-14.056-18.744-18.746-18.744-49.136 0-67.882 87.638-87.642 135.904-204.16 135.904-328.1 0-123.938-48.266-240.458-135.904-328.098-18.744-18.746-18.744-49.138 0-67.882s49.138-18.744 67.882 0c105.77 105.772 164.022 246.4 164.022 395.98s-58.252 290.208-164.022 395.98c-9.372 9.372-21.656 14.058-33.94 14.058zM719.53 831.53c-12.286 0-24.566-4.686-33.942-14.056-18.744-18.744-18.744-49.136 0-67.882 131.006-131.006 131.006-344.17 0-475.176-18.744-18.746-18.744-49.138 0-67.882 18.744-18.742 49.138-18.744 67.882 0 81.594 81.59 126.53 190.074 126.53 305.466 0 115.39-44.936 223.876-126.53 305.47-9.372 9.374-21.656 14.060-33.94 14.060v0zM549.020 741.020c-12.286 0-24.568-4.686-33.942-14.058-18.746-18.746-18.746-49.134 0-67.88 81.1-81.1 81.1-213.058 0-294.156-18.746-18.746-18.746-49.138 0-67.882s49.136-18.744 67.882 0c118.53 118.53 118.53 311.392 0 429.922-9.372 9.368-21.656 14.054-33.94 14.054z"></path>\n<path class="path2" d="M416.006 960c-8.328 0-16.512-3.25-22.634-9.374l-246.626-246.626h-114.746c-17.672 0-32-14.326-32-32v-320c0-17.672 14.328-32 32-32h114.746l246.626-246.628c9.154-9.154 22.916-11.89 34.874-6.936 11.958 4.952 19.754 16.622 19.754 29.564v832c0 12.944-7.796 24.612-19.754 29.564-3.958 1.64-8.118 2.436-12.24 2.436z"></path>\n</svg>\n'
}, function(t, e) {
    t.exports = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024">\n<title>twitter</title>\n<path class="path1" d="M1024 194.418c-37.676 16.708-78.164 28.002-120.66 33.080 43.372-26 76.686-67.17 92.372-116.23-40.596 24.078-85.556 41.56-133.41 50.98-38.32-40.83-92.922-66.34-153.346-66.34-116.022 0-210.088 94.058-210.088 210.078 0 16.466 1.858 32.5 5.44 47.878-174.6-8.764-329.402-92.4-433.018-219.506-18.084 31.028-28.446 67.116-28.446 105.618 0 72.888 37.088 137.192 93.46 174.866-34.438-1.092-66.832-10.542-95.154-26.278-0.020 0.876-0.020 1.756-0.020 2.642 0 101.788 72.418 186.696 168.522 206-17.626 4.8-36.188 7.372-55.348 7.372-13.538 0-26.698-1.32-39.528-3.772 26.736 83.46 104.32 144.206 196.252 145.896-71.9 56.35-162.486 89.934-260.916 89.934-16.958 0-33.68-0.994-50.116-2.94 92.972 59.61 203.402 94.394 322.042 94.394 386.422 0 597.736-320.124 597.736-597.744 0-9.108-0.206-18.168-0.61-27.18 41.056-29.62 76.672-66.62 104.836-108.748z"></path>\n</svg>\n'
}, , function(t, e, n) {
    var a, s;
    n(148), a = n(76);
    var o = n(185);
    s = a = a || {}, "object" != typeof a.default && "function" != typeof a.default || (s = a = a.default), "function" == typeof s && (s = s.options), s.render = o.render, s.staticRenderFns = o.staticRenderFns, t.exports = a
}, function(t, e, n) {
    var a, s;
    n(150), a = n(77);
    var o = n(187);
    s = a = a || {}, "object" != typeof a.default && "function" != typeof a.default || (s = a = a.default), "function" == typeof s && (s = s.options), s.render = o.render, s.staticRenderFns = o.staticRenderFns, s._scopeId = "data-v-f720c7ce", t.exports = a
}, function(t, e, n) {
    var a, s;
    n(138), a = n(79);
    var o = n(177);
    s = a = a || {}, "object" != typeof a.default && "function" != typeof a.default || (s = a = a.default), "function" == typeof s && (s = s.options), s.render = o.render, s.staticRenderFns = o.staticRenderFns, s._scopeId = "data-v-30a6ec88", t.exports = a
}, function(t, e, n) {
    var a, s;
    n(144), a = n(80);
    var o = n(181);
    s = a = a || {}, "object" != typeof a.default && "function" != typeof a.default || (s = a = a.default), "function" == typeof s && (s = s.options), s.render = o.render, s.staticRenderFns = o.staticRenderFns, s._scopeId = "data-v-72444790", t.exports = a
}, function(t, e, n) {
    var a, s;
    n(137), a = n(81);
    var o = n(176);
    s = a = a || {}, "object" != typeof a.default && "function" != typeof a.default || (s = a = a.default), "function" == typeof s && (s = s.options), s.render = o.render, s.staticRenderFns = o.staticRenderFns, s._scopeId = "data-v-22b90c4f", t.exports = a
}, function(t, e, n) {
    var a, s;
    n(146), a = n(82);
    var o = n(183);
    s = a = a || {}, "object" != typeof a.default && "function" != typeof a.default || (s = a = a.default), "function" == typeof s && (s = s.options), s.render = o.render, s.staticRenderFns = o.staticRenderFns, s._scopeId = "data-v-7fa68512", t.exports = a
}, function(t, e, n) {
    var a, s;
    n(145), a = n(83);
    var o = n(182);
    s = a = a || {}, "object" != typeof a.default && "function" != typeof a.default || (s = a = a.default), "function" == typeof s && (s = s.options), s.render = o.render, s.staticRenderFns = o.staticRenderFns, s._scopeId = "data-v-7cb110a0", t.exports = a
}, function(t, e, n) {
    var a, s;
    n(143), n(142), a = n(84);
    var o = n(180);
    s = a = a || {}, "object" != typeof a.default && "function" != typeof a.default || (s = a = a.default), "function" == typeof s && (s = s.options), s.render = o.render, s.staticRenderFns = o.staticRenderFns, s._scopeId = "data-v-596ffc48", t.exports = a
}, function(t, e, n) {
    var a, s;
    n(147), a = n(85);
    var o = n(184);
    s = a = a || {}, "object" != typeof a.default && "function" != typeof a.default || (s = a = a.default), "function" == typeof s && (s = s.options), s.render = o.render, s.staticRenderFns = o.staticRenderFns, s._scopeId = "data-v-7fcd9192", t.exports = a
}, function(t, e, n) {
    var a, s;
    n(139), a = n(86);
    var o = n(178);
    s = a = a || {}, "object" != typeof a.default && "function" != typeof a.default || (s = a = a.default), "function" == typeof s && (s = s.options), s.render = o.render, s.staticRenderFns = o.staticRenderFns, s._scopeId = "data-v-3c8423e8", t.exports = a
}, function(t, e, n) {
    var a, s;
    n(141), n(140), a = n(87);
    var o = n(179);
    s = a = a || {}, "object" != typeof a.default && "function" != typeof a.default || (s = a = a.default), "function" == typeof s && (s = s.options), s.render = o.render, s.staticRenderFns = o.staticRenderFns, s._scopeId = "data-v-546b77d6", t.exports = a
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                class: "game " + (!t.hover || t.found || t.expertMode ? "" : "hover"),
                on: {
                    mousemove: t.onMouseMove,
                    touchmove: t.onMouseMove,
                    click: t.onClick
                }
            }, [t.found ? n("find-animal", {
                attrs: {
                    animal: t.animal,
                    initialX: t.x,
                    initialY: t.y
                },
                on: {
                    complete: t.onAnimalComplete
                }
            }) : t._e()], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", [n("div", {
                staticClass: "left"
            }, [n("h1", [t._v(t._s(t.$t("success.congratulations")))]), t._v(" "), n("p", [t._v("\n      " + t._s(t.$t("success.found", {
                points: t.points
            })) + "\n      "), 1 === t.points ? n("span", [t._v(t._s(t.$t("success.keepItUp")))]) : t._e()]), t._v(" "), n("div", {
                staticClass: "label label--for-checkbox"
            }, [n("label", [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.expertMode,
                    expression: "expertMode"
                }],
                attrs: {
                    type: "checkbox"
                },
                domProps: {
                    checked: Array.isArray(t.expertMode) ? t._i(t.expertMode, null) > -1 : t.expertMode
                },
                on: {
                    __c: function(e) {
                        var n = t.expertMode,
                            a = e.target,
                            s = !!a.checked;
                        if (Array.isArray(n)) {
                            var o = null,
                                l = t._i(n, o);
                            s ? l < 0 && (t.expertMode = n.concat(o)) : l > -1 && (t.expertMode = n.slice(0, l).concat(n.slice(l + 1)))
                        } else t.expertMode = s
                    }
                }
            }), t._v("\n        " + t._s(t.$t("config.expertMode")) + "\n        "), n("br"), t._v(" "), n("small", [t._v(t._s(t.$t("config.expertModeDescription")))])])]), t._v(" "), n("div", {
                staticClass: "label label--for-select"
            }, [n("label", [t._v("\n        " + t._s(t.$t("config.findA")) + "\n        "), n("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.animal,
                    expression: "animal"
                }],
                on: {
                    change: function(e) {
                        var n = Array.prototype.filter.call(e.target.options, function(t) {
                            return t.selected;
                        }).map(function(t) {
                            var e = "_value" in t ? t._value : t.value;
                            return e
                        });
                        t.animal = e.target.multiple ? n : n[0]
                    }
                }
            }, t._l(t.unlockedAnimals, function(e) {
                return n("option", {
                    domProps: {
                        value: e.key
                    }
                }, [t._v("\n            " + t._s(t.$t("animal." + e.key)) + "\n          ")])
            }))])]), t._v(" "), t.points < t.ANIMALS[1].pointsRequired ? n("small", {
                staticClass: "tip",
                domProps: {
                    innerHTML: t._s(t.$t("success.unlockAtFive"))
                }
            }) : t._e(), t._v(" "), t.points >= t.ANIMALS[1].pointsRequired && t.points < t.ANIMALS[2].pointsRequired ? n("small", {
                staticClass: "tip",
                domProps: {
                    innerHTML: t._s(t.$t("success.unlockAtFifty"))
                }
            }) : t._e(), t._v(" "), t.points >= t.ANIMALS[2].pointsRequired ? n("small", {
                staticClass: "tip",
                domProps: {
                    innerHTML: t._s(t.$t("success.unlockedAll"))
                }
            }) : t._e(), t._v(" "), n("find-button", {
                staticClass: "button",
                on: {
                    click: function(e) {
                        t.setPage(t.PAGE_GAME)
                    }
                }
            }, [t._v("\n      " + t._s(t.$t("cta.findA", {
                animal: t.$t("animal." + t.animal)
            })) + "\n    ")]), t._v(" "), n("div", {
                staticClass: "social"
            }, [n("find-social-button", {
                attrs: {
                    network: "facebook"
                }
            }), t._v(" "), n("find-social-button", {
                attrs: {
                    network: "twitter"
                }
            })], 1)], 1), t._v(" "), t._m(0)])
        },
        staticRenderFns: [function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "right"
            }, [n("ins", {
                staticClass: "adsbygoogle",
                staticStyle: {
                    width: "300px",
                    height: "250px"
                },
                attrs: {
                    "data-ad-client": "ca-pub-7708254463438007",
                    "data-ad-slot": "2580619829"
                }
            })])
        }]
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", [n("h1", [t._v(t._s(t.$t("support.webExperiment")))]), t._v(" "), n("p", [t._v("\n    " + t._s(t.$t("support.sorry")) + "\n  ")]), t._v(" "), n("p", {
                staticClass: "note",
                domProps: {
                    innerHTML: t._s(t.$t("support.browsers"))
                }
            })])
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", [n("h1", [t._v(t._s(t.$t("findTheInvisibleCow")))]), t._v(" "), n("p", [t._v(t._s(t.$t("instruction.intro")))]), t._v(" "), n("div", {
                staticClass: "audio-warning"
            }, [n("div", {
                staticClass: "audio-warning__icon",
                domProps: {
                    innerHTML: t._s(t.image.speaker)
                }
            }), t._v(" "), n("p", {
                staticClass: "auto-warning__text"
            }, [t._v(t._s(t.$t("instruction.audio")))])]), t._v(" "), t.audioPlayer.loaded ? t._e() : n("div", {
                staticClass: "loading-bar"
            }, [n("div", {
                staticClass: "loading-bar-inner",
                style: "width:" + 100 * t.audioPlayer.loadedAmount + "%;"
            })]), t._v(" "), t.audioPlayer.loaded ? n("div", {
                staticClass: "start-button"
            }, [n("find-button", {
                on: {
                    click: function(e) {
                        t.setPage(t.PAGE_GAME)
                    }
                }
            }, [t._v("\n      " + t._s(t.$t("cta.start")) + "\n    ")])], 1) : t._e(), t._v(" "), n("p", {
                staticClass: "note"
            }, [t._v("\n    " + t._s(t.$t("support.possiblyUnsupported")) + "\n    "), n("span", {
                domProps: {
                    innerHTML: t._s(t.$t("support.browsers"))
                }
            })])])
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("button", {
                class: "social-button network-" + t.network,
                domProps: {
                    innerHTML: t._s(t.image[t.network])
                },
                on: {
                    click: t.handleClick
                }
            })
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("footer", [n("p", {
                staticClass: "left"
            }, [n("find-locale")], 1), t._v(" "), n("p", {
                staticClass: "right",
                domProps: {
                    innerHTML: t._s(t.$t("footer.byScriptist"))
                }
            })])
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                class: "modal " + (t.wide ? "wide" : "")
            }, [t._t("default")], 2)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "wrap"
            }, [n("button", {
                staticClass: "current",
                on: {
                    click: function(e) {
                        t.open = !t.open
                    }
                }
            }, [t._v("\n    " + t._s(t.$t("language")) + "\n  ")]), t._v(" "), t.open ? n("div", {
                staticClass: "options"
            }, t._l(t.locales, function(e) {
                return n("button", {
                    staticClass: "option",
                    on: {
                        click: function(n) {
                            t.setLocale(e.code)
                        }
                    }
                }, [t._v("\n      " + t._s(e.name) + "\n    ")])
            })) : t._e()])
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "stats"
            }, [n("div", {
                staticClass: "stats__line stats__line--feedback"
            }, [n("button", {
                on: {
                    click: function(e) {
                        t.share("twitter")
                    }
                }
            }, [t._v(t._s(t.$t("social.shareOnTwitter")))])]), t._v(" "), n("div", {
                staticClass: "stats__line stats__line--total"
            }, [n("span", {
                staticClass: "stats__line__label"
            }, [t._v("\n      " + t._s(t.$t("stats.globalPoints")) + "\n    ")]), t._v("\n    " + t._s(t._f("number")(t.globalPoints || "20,000,000+")) + "\n  ")]), t._v(" "), n("div", {
                staticClass: "stats__line stats__line--points"
            }, [n("span", {
                staticClass: "stats__line__label stats__line__label--block"
            }, [t._v("\n      " + t._s(t.$t("stats.points")) + "\n    ")]), t._v("\n    " + t._s(t._f("number")(t.points)) + "\n  ")])])
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                attrs: {
                    id: "app"
                }
            }, [n("find-stats"), t._v(" "), t.page === t.PAGE_UNSUPPORTED ? n("find-modal", [n("find-unsupported")], 1) : t._e(), t._v(" "), t.page === t.PAGE_WELCOME ? n("find-modal", [n("find-welcome")], 1) : t._e(), t._v(" "), t.page === t.PAGE_CONGRATULATIONS ? n("find-modal", {
                attrs: {
                    wide: ""
                }
            }, [n("find-congratulations")], 1) : t._e(), t._v(" "), t.page === t.PAGE_GAME ? n("find-game") : t._e(), t._v(" "), n("find-footer")], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("button", {
                on: {
                    click: t.handleClick
                }
            }, [t._t("default")], 2)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "container",
                style: "transform: translate(" + t.x + "px, " + t.y + "px) scale(" + t.scale + ");"
            }, [n("div", {
                staticClass: "animal",
                domProps: {
                    innerHTML: t._s(t.image.animal[t.playing ? t.animal + "Sound" : t.animal])
                }
            }), t._v(" "), t.hat ? n("div", {
                staticClass: "hat",
                style: "left: " + 100 * t.hatPosition.x + "%; top: " + 100 * t.hatPosition.y + "%; width: " + 100 * t.hat.width + "%;",
                domProps: {
                    innerHTML: t._s(t.image.hat[t.hat.key])
                }
            }) : t._e()])
        },
        staticRenderFns: []
    }
}, function(t, e, n) {
    function a(t) {
        return n(s(t))
    }

    function s(t) {
        return o[t] || function() {
            throw new Error("Cannot find module '" + t + "'.")
        }()
    }
    var o = {
        "./en.js": 64,
        "./es.js": 65,
        "./fr.js": 66,
        "./pt.js": 67,
        "./ru.js": 68,
        "./tr.js": 69
    };
    a.keys = function() {
        return Object.keys(o)
    }, a.resolve = s, t.exports = a, a.id = 188
}, function(t, e) {}]);
//# sourceMappingURL=app.fc261c6949ccc7be570d.js.map