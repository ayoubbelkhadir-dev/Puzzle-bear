var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.objectCreate = $jscomp.ASSUME_ES5 || "function" == typeof Object.create ? Object.create : function(a) {
    var b = function() {};
    b.prototype = a;
    return new b
};
$jscomp.underscoreProtoCanBeSet = function() {
    var a = {
            a: !0
        },
        b = {};
    try {
        return b.__proto__ = a, b.a
    } catch (f) {}
    return !1
};
$jscomp.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function(a, b) {
    a.__proto__ = b;
    if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
    return a
} : null;
$jscomp.inherits = function(a, b) {
    a.prototype = $jscomp.objectCreate(b.prototype);
    a.prototype.constructor = a;
    if ($jscomp.setPrototypeOf) {
        var f = $jscomp.setPrototypeOf;
        f(a, b)
    } else
        for (f in b)
            if ("prototype" != f)
                if (Object.defineProperties) {
                    var h = Object.getOwnPropertyDescriptor(b, f);
                    h && Object.defineProperty(a, f, h)
                } else a[f] = b[f];
    a.superClass_ = b.prototype
};
var game_music, Boot = function() {
    return Phaser.Scene.call(this, "boot") || this
};
$jscomp.inherits(Boot, Phaser.Scene);
Boot.prototype.preload = function() {
    this.load.image("background", "img/background.png");
    this.load.image("bar", "img/bar.png");
    this.load.image("progress", "img/progress.png");
    this.load.image("game_title", "img/game_title.png");
    //this.load.image("btn_start", "img/btn_start.png")
};
Boot.prototype.create = function() {
    this.scene.start("load")
};
var Load = function() {
    return Phaser.Scene.call(this, "load") || this
};
$jscomp.inherits(Load, Phaser.Scene);
Load.prototype.preload = function() {
    this.add.sprite(360, 540, "background");
    var a = this.add.sprite(360, 300, "game_title");
    this.tweens.add({
        targets: a,
        y: a.y + 30,
        duration: 2E3,
        ease: "Sine.easeInOut",
        yoyo: !0,
        loop: -1
    });
    this.tweens.add({
        targets: a,
        scaleX: 1.05,
        duration: 800,
        ease: "Sine.easeInOut",
        yoyo: !0,
        loop: -1
    });
    var b = this.add.sprite(360, 750, "bar"),
        f = this.add.tileSprite(91, 745, 1, 32, "progress");
    f.setOrigin(0, .5);
    this.load.on("progress", function(a) {
        f.setScale(538 * a, 1)
    });
    this.load.spritesheet("blocks", "img/blocks.png", {
        frameWidth: 64,
        frameHeight: 64
    });
    this.load.spritesheet("p", "img/p.png", {
        frameWidth: 64,
        frameHeight: 64
    });
    this.load.spritesheet("stars", "img/stars.png", {
        frameWidth: 186,
        frameHeight: 70
    });
    this.load.spritesheet("stars_small", "img/stars_small.png", {
        frameWidth: 64,
        frameHeight: 26
    });
    this.load.spritesheet("blocks_small", "img/blocks_small.png", {
        frameWidth: 50,
        frameHeight: 50
    });
    this.load.image("btn_home", "img/btn_home.png");
    this.load.image("btn_sound", "img/btn_sound.png");
    this.load.image("btn_sound_off", "img/btn_sound_off.png");
    this.load.image("btn_info", "img/btn_info.png");
    this.load.image("btn_music", "img/btn_music.png");
    this.load.image("btn_music_off", "img/btn_music_off.png");
    this.load.image("btn_restart", "img/btn_restart.png");
    this.load.image("btn_play", "img/btn_play.png");
    this.load.image("btn_arrow_up", "img/btn_arrow_up.png");
    this.load.image("btn_arrow_down", "img/btn_arrow_down.png");
    this.load.image("footer", "img/footer.png");
    this.load.image("header", "img/header.png");
    this.load.image("line", "img/line.png");
    this.load.image("grid", "img/grid.png");
    this.load.image("target_bar", "img/target_bar.png");
    this.load.image("target_on", "img/target_on.png");
    this.load.image("target_done", "img/target_done.png");
    this.load.image("btn_restart2", "img/btn_restart2.png");
    this.load.image("btn_menu", "img/btn_menu.png");
    this.load.image("btn_next", "img/btn_next.png");
    this.load.image("btn_yes", "img/btn_yes.png");
    this.load.image("btn_no", "img/btn_no.png");
    this.load.image("btn_yes2", "img/btn_yes2.png");
    this.load.image("btn_no2", "img/btn_no2.png");
    this.load.image("reward_title",
        "img/reward_title.png");
    this.load.image("win_win", "img/win_win.png");
    this.load.image("win_lose", "img/win_lose.png");
    this.load.image("win_prompt", "img/win_prompt.png");
    this.load.image("mascot", "img/mascot.png");
    this.load.image("glow", "img/glow.png");
    this.load.image("blue", "img/blue.png");
    this.load.image("loading", "img/loading.png");
    this.load.image("horizontal", "img/horizontal.png");
    this.load.image("vertical", "img/vertical.png");
    this.load.image("boom", "img/boom.png");
    this.load.image("blend", "img/blend.png");
    this.load.image("lvl_unlock", "img/lvl_unlock.png");
    this.load.image("lvl_current", "img/lvl_current.png");
    this.load.image("lvl_lock", "img/lvl_lock.png");
    this.load.image("map1", "img/map1.png");
    this.load.image("map2", "img/map2.png");
    this.load.image("map3", "img/map3.png");
    this.load.image("window", "img/window.png");
    this.load.image("about", "img/about.png");
    this.load.image("arrow_current", "img/arrow_current.png");
    this.load.audio("completed", "audio/completed.mp3");
    this.load.audio("gameover", "audio/gameover.mp3");
    this.load.audio("click", "audio/click.mp3");
    this.load.audio("swap", "audio/swap.mp3");
    this.load.audio("blop", "audio/blop.mp3");
    this.load.audio("positive", "audio/positive.mp3");
    this.load.audio("break", "audio/break.mp3");
    this.load.audio("boom", "audio/boom.mp3");
    this.load.audio("music", "audio/music.mp3");
    this.load.audio("level_click", "audio/level_click.mp3");
    this.load.json("map", "map.json");
    for (a = 1; a <= game_data.total_level; a++) this.load.json("level-" + a, "level/level-" + a + ".json");
    this.load.once("complete",
        function() {
            b.destroy();
            f.destroy()
        }.bind(this))
};
Load.prototype.create = function() {
    var a = localStorage.getItem("rf_magicmatch");
    null != a && (a = JSON.parse(a), game_data.unlocked_level = Number(a.unlocked), levels_star = a.stars);
    /*a = this.add.sprite(360, 750, "btn_start").setInteractive();
    this.tweens.add({
        targets: a,
        scaleY: 1.1,
        scaleX: 1.1,
        yoyo: !0,
        loop: -1,
        duration: 600,
        ease: "Sine.easeOut"
    });
    this.input.on("gameobjectdown", function(a, f) {
        this.scene.start("menu")
    }, this);*/
	this.scene.start("menu");
};
var Menu = function() {
    return Phaser.Scene.call(this, "menu") || this
};
$jscomp.inherits(Menu, Phaser.Scene);
Menu.prototype.create = function() {
    function a() {
        b = "preinfo";
        h = f.add.container(360, 540);
        h.setDepth(1);
        var a = f.add.rectangle(360, 540, 720, 1080, 0);
        a.alpha = 0;
        a.name = "dark";
        f.tweens.add({
            targets: a,
            alpha: .7,
            duration: 200
        });
        var c = f.add.sprite(0, -12, "window"),
            k = f.add.sprite(0, -30, "about");
        h.add([c, k]);
        h.setScale(0);
        f.tweens.add({
            targets: h,
            scaleX: 1,
            duration: 400,
            ease: "Back.easeOut"
        });
        f.tweens.add({
            targets: h,
            scaleY: 1,
            duration: 500,
            ease: "Back.easeOut",
            onComplete: function() {
                h.add(a);
                a.setPosition(0, 0);
                h.sendToBack(a);
                b = "info"
            }
        })
    }
    play_music("music", this);
    var b = "play",
        f = this,
        h;
    this.add.sprite(360, 540, "background");
    var r = this.add.sprite(360, 300, "game_title");
    this.tweens.add({
        targets: r,
        y: r.y + 30,
        duration: 2E3,
        ease: "Sine.easeInOut",
        yoyo: !0,
        loop: -1
    });
    this.tweens.add({
        targets: r,
        scaleX: 1.05,
        duration: 800,
        ease: "Sine.easeInOut",
        yoyo: !0,
        loop: -1
    });
    var k = this.add.sprite(-260, 400, "mascot");
    k.setScale(.7);
    setTimeout(function() {
        this.tweens.add({
            targets: k,
            x: 1E3,
            duration: 2500,
            onComplete: function() {
                k.setScale(1);
                k.x = -420;
                k.y = 600;
                f.tweens.add({
                    targets: k,
                    x: 150,
                    duration: 1E3,
                    ease: "Sine.easeInOut"
                });
                f.tweens.add({
                    targets: k,
                    y: k.y + 20,
                    duration: 1E3,
                    ease: "Sine.easeInOut",
                    yoyo: !0,
                    loop: -1
                })
            }
        })
    }.bind(this), 100);
    this.tweens.add({
        targets: k,
        rotation: k.rotation + .2,
        duration: 1E3,
        ease: "Sine.easeInOut",
        yoyo: !0,
        loop: -1
    });
    draw_button(360, 700, "play", this);
    r = draw_button(240, 820, "sound", this);
    var A = draw_button(360, 820, "music", this);
    draw_button(480, 820, "info", this);
    game_data.music || A.setTexture("btn_music_off");
    game_data.sound || r.setTexture("btn_sound_off");
    this.input.on("gameobjectdown",
        function(k, c) {
            c.button && (play_sound("click", this), this.tweens.add({
                targets: c,
                scaleX: .9,
                scaleY: .9,
                ease: "Linear",
                duration: 100,
                yoyo: !0,
                onComplete: function() {
                    "play" === b ? "play" === c.name ? fade("in", f).then(function(a) {
						gradle.event('btn_play');
						f.scene.start("map");
                    }) : "sound" === c.name ? (gradle.event('btn_sound'),switch_audio("sound", c)) 
					   : "music" === c.name ? (gradle.event('btn_sound'), switch_audio("music", c, f) )
					   : "info" === c.name && (gradle.event('more_games')/*,a()*/ )
					   : "restart2" === c.name || "yes_restart" === c.name ? (gradle.event('btn_restart'),f.scene.start("game") )
					   : "no" === c.name && remove_popup(h, f).then(function(a) {
                        h.destroy(!0, !0);
                        b = "play"
                    })
                }
            }))
        }, this);
    this.input.on("pointerdown",
        function() {
            "info" === b && (b = "preplay", remove_popup(h, f).then(function(a) {
                h.destroy(!0, !0);
                b = "play"
            }))
        }, this)
};
var LevelMap = function() {
    return Phaser.Scene.call(this, "map") || this
};
$jscomp.inherits(LevelMap, Phaser.Scene);
LevelMap.prototype.create = function() {
    function a(a) {
        "up" === a ? 0 < k.y - 360 && (b(), h.tweens.add({
            targets: k,
            y: k.y - 360,
            duration: 300,
            ease: "Sine.easeInOut",
            onComplete: function() {
                f()
            }
        })) : 4320 > k.y + 360 && (b(), h.tweens.add({
            targets: k,
            y: k.y + 360,
            duration: 300,
            ease: "Sine.easeInOut",
            onComplete: function() {
                f()
            }
        }))
    }

    function b() {
        e.setVisible(!1);
        l.setVisible(!1);
        t.setVisible(!1)
    }

    function f() {
        t.y = A.scrollY + 80;
        e.y = A.scrollY + 80;
        l.y = A.scrollY + 1E3;
        e.setVisible(!0);
        l.setVisible(!0);
        t.setVisible(!0);
        l.visible && Math.round(A.scrollY) ===
            4320 - config.height ? l.setVisible(!1) : l.setVisible(!0);
        e.visible && 0 === Math.round(A.scrollY) ? e.setVisible(!1) : e.setVisible(!0)
    }
    var h = this,
        r = this.cache.json.get("map"),
        k = this.add.rectangle(360, 3960, 30, 30, 1048575);
    this.cameras.main.setBounds(0, 0, 720, 4320);
    this.cameras.main.startFollow(k, !0);
    for (var A = this.cameras.main, z = 3, c = 0; 6 > c; c++) this.add.sprite(0, 720 * c, "map" + z).setOrigin(0), z--, 1 > z && (z = 3);
    z = r.length;
    for (c = 0; c < z; c++) {
        var p = "lvl_lock";
        c + 1 < game_data.unlocked_level ? p = "lvl_unlock" : c + 1 === game_data.unlocked_level &&
            (p = "lvl_current");
        p = this.add.sprite(r[c][1], r[c][2], p);
        if (c + 1 === game_data.unlocked_level) {
            var d = p.x;
            var y = p.y
        }
        c + 1 <= game_data.unlocked_level && (p.setInteractive(), p.id = c + 1, this.add.text(p.x, p.y - 20, String(c + 1), {
            fontFamily: "impact",
            fontSize: 28,
            align: "center",
            color: "#FFFFFF"
        }).setOrigin(.5));
        c + 1 < game_data.unlocked_level && this.add.sprite(p.x, p.y + 10, "stars_small").setFrame(levels_star[c])
    }
    r = this.add.sprite(d, y - 80, "arrow_current");
    this.tweens.add({
        targets: r,
        y: r.y - 30,
        yoyo: !0,
        loop: -1,
        duration: 600
    });
    fade("out",
        this);
    var t = draw_button(80, 100, "home", this),
        e = draw_button(360, 0, "arrow_up", this);
    this.tweens.add({
        targets: e,
        scaleX: .85,
        scaleY: .85,
        yoyo: !0,
        loop: -1,
        duration: 500
    });
    var l = draw_button(360, 0, "arrow_down", this);
    this.tweens.add({
        targets: l,
        scaleX: .85,
        scaleY: .85,
        yoyo: !0,
        loop: -1,
        duration: 500
    });
    f();
    this.input.keyboard.on("keydown", function(d) {
        "ArrowUp" === d.key ? a("up") : "ArrowDown" === d.key && a("down")
    }, this);
    this.input.on("gameobjectdown", function(d, b) {
        b.button ? (play_sound("click", h), "arrow_up" === b.name ? a("up") :
            "arrow_down" === b.name ? a("down") : "home" === b.name && this.tweens.add({
                targets: b,
                scaleX: .9,
                scaleY: .9,
                ease: "Linear",
                duration: 100,
                yoyo: !0,
                onComplete: function() {
                    h.scene.start("menu")
                }
            })) : (play_sound("level_click", h), game_data.cur_level = b.id, fade("in", h).then(function(a) {
            h.scene.start("game")
        }))
    }, this)
};
var Game = function() {
    return Phaser.Scene.call(this, "game") || this
};
$jscomp.inherits(Game, Phaser.Scene);
Game.prototype.create = function() {
    function a(a) {
        m = "drop";
        q.drop().then(function(d) {
            q.respawn(a).then(function(a) {
                0 >= game_data.cur_moves ? (m = "over", a = Math.round(4 * Math.random()), game_data.enable_reward || (a = 4), 2 >= a && !G && game_data.reward.loaded ? (G = !0, setTimeout(A, 1E3)) : setTimeout(z, 1E3)) : r("ffff")
            })
        });
        q.clear("reset");
        q.clear("matching")
    }

    function b(b, u, g) {
        var w = q.get("array"),
            v = 2,
            h = 0,
            e = 0;
        if ("horizontal" === u) {
            var c = 1;
            if ("left" === g) {
                h = game_data.size;
                var k = 1;
                var m = .5;
                var D = 0;
                var r = .5;
                for (var n = b.pos_x; 0 <
                    n && (v++, w[b.pos_y][n].filled && !w[b.pos_y][n].blank); n--);
            } else if ("right" === g)
                for (v = 1, h = -1 * game_data.size, k = 0, m = .5, D = 1, r = .5, n = b.pos_x; n < game_data.row && w[b.pos_y][n].filled && !w[b.pos_y][n].blank; n++) v++
        } else if ("vertical" === u)
            if (c = 1, "up" === g)
                for (v = 1, e = game_data.size, k = 1, m = .5, D = 0, r = .5, n = b.pos_y; 0 < n && (v++, w[n][b.pos_x].filled && !w[n][b.pos_x].blank); n--);
            else {
                if ("down" === g)
                    for (v = 1, e = -1 * game_data.size, k = 0, m = .5, D = 1, r = .5, n = b.pos_y; n < game_data.col && w[n][b.pos_x].filled && !w[n][b.pos_x].blank; n++) v++
            }
        else if ("boom" ===
            u) {
            n = b.pos_x - 1;
            var l = b.pos_x + 1,
                p = b.pos_y - 1,
                E = b.pos_y + 1;
            0 > n && (n = 0);
            l >= game_data.row && (l = game_data.row - 1);
            0 > p && (p = 0);
            E >= game_data.col && (E = game_data.col - 1);
            for (var t = n; t <= l; t++)
                for (var C = p; C <= E; C++) !w[C][t].blank && w[C][t].filled && (B.setPosition(game_data.start_x + t * game_data.size, game_data.start_y + C * game_data.size), B.explode());
            w = q.booster_removal({
                x: n,
                y: p,
                xx: l,
                yy: E
            }, u);
            0 < w.length && f(w);
            a(0)
        }
        if (1 == c) {
            var x = d.add.sprite(b.x + h, b.y + e, "blend").setBlendMode(Phaser.BlendModes.ADD);
            "vertical" === u && (x.rotation =
                1.5708);
            x.setOrigin(k, m);
            x.setDepth(3);
            d.tweens.add({
                targets: x,
                displayWidth: v * game_data.size,
                duration: 200,
                ease: "Sine.easeOut",
                onComplete: function() {
                    if ("left" === g || "down" === g) {
                        var w = q.booster_removal({
                            x: b.pos_x,
                            y: b.pos_y
                        }, u);
                        0 < w.length && f(w);
                        a(0)
                    }
                    x.setOrigin(D, r);
                    "left" === g ? x.x -= game_data.size * v : "right" === g ? x.x += game_data.size * v : "up" === g ? x.y -= game_data.size * v : "down" === g && (x.y += game_data.size * v);
                    d.tweens.add({
                        targets: x,
                        scaleX: 0,
                        duration: 200,
                        ease: "Sine.easeIn",
                        onComplete: function() {
                            x.destroy(!0, !0)
                        }
                    })
                }
            })
        }
    }

    function f(a) {
        for (var b = a.length, g = t.blocks.getChildren(), f = [], v = 0, h = [], e = 0; e < b; e++)
            for (var c = a[e], k = 0; 3 > k; k++)
                if (c.frame === game_data.targets[k] && 0 < game_data.values[k]) {
                    v++;
                    if (0 === f.length) f.push(k);
                    else {
                        c = !1;
                        for (var l = 0; l < f.length; l++)
                            if (f[l] === k) {
                                c = !0;
                                break
                            }
                        c || f.push(k)
                    }
                    break
                }
        e = {};
        for (k = 0; k < b; e = {
                $jscomp$loop$prop$sound_ex$19: e.$jscomp$loop$prop$sound_ex$19,
                $jscomp$loop$prop$o$13$20: e.$jscomp$loop$prop$o$13$20
            }, k++) {
            c = a[k];
            var p = -1;
            l = Math.round(700 + c.y);
            for (var q = 0; 3 > q; q++)
                if (c.frame === game_data.targets[q] &&
                    0 < game_data.values[q]) {
                    var n = g[q].x;
                    var y = g[q].y;
                    p = q;
                    break
                }
            if (0 <= p) {
                e.$jscomp$loop$prop$sound_ex$19 = !1;
                p = h.length;
                for (q = 0; q < p; q++)
                    if (Math.round(c.y) === h[q]) {
                        e.$jscomp$loop$prop$sound_ex$19 = !0;
                        break
                    }
                e.$jscomp$loop$prop$sound_ex$19 || h.push(Math.round(c.y));
                0 === p && h.push(Math.round(c.y));
                e.$jscomp$loop$prop$o$13$20 = d.add.sprite(c.x, c.y, "blocks");
                e.$jscomp$loop$prop$o$13$20.setDepth(2);
                e.$jscomp$loop$prop$o$13$20.setFrame(c.frame);
                d.tweens.add({
                    targets: e.$jscomp$loop$prop$o$13$20,
                    y: y,
                    ease: "Back.easeIn",
                    duration: l,
                    onComplete: function(b) {
                        return function() {
                            b.$jscomp$loop$prop$sound_ex$19 || play_sound("blop", d);
                            b.$jscomp$loop$prop$o$13$20.destroy(!0, !0);
                            v--;
                            if (0 === v) {
                                for (var u = a.length, e = 0; e < u; e++)
                                    for (var c = 0; 3 > c; c++) game_data.targets[c] === a[e].frame && (game_data.values[c]--, 0 > game_data.values[c] && (game_data.values[c] = 0));
                                u = t.value.getLength();
                                e = t.value.getChildren();
                                for (c = 0; c < u; c++) {
                                    var h = e[c];
                                    h.setText(String(game_data.values[c]));
                                    0 === game_data.values[c] && (h.setVisible(!1), t.bar.getChildren()[c].setTexture("target_done"))
                                }
                                "wait" !==
                                m && "play" !== m || r("hahahah " + m);
                                for (u = 0; u < f.length; u++) d.tweens.add({
                                    targets: g[f[u]],
                                    scaleX: 1.5,
                                    scaleY: 1.5,
                                    duration: 200,
                                    yoyo: !0
                                }), 0 === game_data.values[f[u]] && (B.setPosition(g[f[u]].x, g[f[u]].y), B.explode(), play_sound("positive", d))
                            }
                        }
                    }(e)
                });
                d.tweens.add({
                    targets: e.$jscomp$loop$prop$o$13$20,
                    x: n,
                    scaleX: .8,
                    scaleY: .8,
                    rotation: 6.28319,
                    ease: "Sine.easeIn",
                    duration: l
                })
            }
        }
    }

    function h() {
        game_data.cur_moves <= game_data.moves / 4 ? y.setFrame(1) : game_data.cur_moves <= game_data.moves / 2 ? y.setFrame(2) : y.setFrame(3);
        I.setText("MOVES\n" + game_data.cur_moves)
    }

    function r(a) {
        if ("drop" === m || "play" === m) {
            a = !0;
            for (var b = 0; 3 > b; b++) 0 < game_data.values[b] && (a = !1);
            a ? (m = "comp", setTimeout(c, 1E3)) : m = "play"
        }
    }

    function k(a) {
        m = a;
        g = d.add.container(360, 540);
        g.setDepth(1);
        var b = d.add.rectangle(360, 540, 720, 1080, 0);
        b.alpha = 0;
        b.name = "dark";
        d.tweens.add({
            targets: b,
            alpha: .7,
            duration: 200
        });
        var c = d.add.sprite(0, -12, "win_prompt"),
            f = d.add.text(0, -108, "Are you sure?", {
                fontFamily: "impact",
                fontSize: 60,
                align: "center",
                color: "#F5603E"
            }).setOrigin(.5),
            e = d.add.sprite(0,
                4, "btn_yes").setInteractive();
        e.button = !0;
        e.name = "yes_" + a;
        a = d.add.sprite(0, 100, "btn_no").setInteractive();
        a.button = !0;
        a.name = "no";
        g.add([c, f, e, a]);
        g.setScale(0);
        d.tweens.add({
            targets: g,
            scaleX: 1,
            duration: 400,
            ease: "Back.easeOut"
        });
        d.tweens.add({
            targets: g,
            scaleY: 1,
            duration: 500,
            ease: "Back.easeOut",
            onComplete: function() {
                g.add(b);
                b.setPosition(0, 0);
                g.sendToBack(b)
            }
        })
    }

    function A(a) {
        m = "reward";
        g = d.add.container(360, 540);
        g.setDepth(1);
        var b = d.add.rectangle(360, 540, 720, 1080, 0);
        b.alpha = 0;
        b.name = "dark";
        d.tweens.add({
            targets: b,
            alpha: .7,
            duration: 200
        });
        a = d.add.sprite(0, -12, "window");
        var c = d.add.sprite(0, -128, "reward_title"),
            f = d.add.sprite(0, 24, "btn_yes2").setInteractive();
        f.button = !0;
        f.name = "yes";
        var e = d.add.sprite(0, 120, "btn_no2").setInteractive();
        e.button = !0;
        e.name = "no";
        g.add([a, c, f, e]);
        g.setScale(0);
        d.tweens.add({
            targets: g,
            scaleX: 1,
            duration: 400,
            ease: "Back.easeOut"
        });
        d.tweens.add({
            targets: g,
            scaleY: 1,
            duration: 500,
            ease: "Back.easeOut",
            onComplete: function() {
                g.add(b);
                b.setPosition(0, 0);
                g.sendToBack(b)
            }
        })
    }

    function z() {
        play_sound("gameover",
            d);
        m = "gameover";
        g = d.add.container();
        g = d.add.container(360, 540);
        g.setDepth(1);
        var a = d.add.rectangle(360, 540, 720, 1080, 0);
        a.alpha = 0;
        a.name = "dark";
        d.tweens.add({
            targets: a,
            alpha: .7,
            duration: 400
        });
        var b = d.add.sprite(0, -12, "win_lose"),
            f = d.add.text(0, -108, "Game Over!", {
                fontFamily: "impact",
                fontSize: 70,
                align: "center",
                color: "#F5603E"
            }).setOrigin(.5);
        d.time.delayedCall(3E3, function() {
            f.setText("Out of moves")
        });
        var e = d.add.sprite(0, -20, "stars");
        e.setFrame(y.frame.name);
        var c = d.add.sprite(0, 84, "btn_restart2").setInteractive();
        c.button = !0;
        c.name = "restart2";
        var h = d.add.sprite(0, 180, "btn_menu").setInteractive();
        h.button = !0;
        h.name = "menu";
        g.add([b, f, e, c, h]);
        g.setScale(0);
        d.tweens.add({
            targets: g,
            scaleX: 1,
            duration: 450,
            ease: "Back.easeOut"
        });
        d.tweens.add({
            targets: g,
            scaleY: 1,
            duration: 600,
            ease: "Back.easeOut",
            onComplete: function() {
                g.add(a);
                a.setPosition(0, 0);
                g.sendToBack(a)
            }
        })
    }

    function c() {
		gradle.event('game_end');
        play_sound("completed", d);
        game_data.cur_level === game_data.unlocked_level ? levels_star.push(y.frame.name) : levels_star[game_data.cur_level - 1] = y.frame.name;
        game_data.cur_level === game_data.unlocked_level && game_data.unlocked_level < game_data.total_level && game_data.unlocked_level++;
        localStorage.setItem("rf_magicmatch", JSON.stringify({
            unlocked: game_data.unlocked_level,
            stars: levels_star
        }));
        m = "completed";
        g = d.add.container(360, 540);
        g.setDepth(1);
        var a = d.add.rectangle(360, 540, 720, 1080, 0);
        a.alpha = 0;
        a.name = "dark";
        d.tweens.add({
            targets: a,
            alpha: .7,
            duration: 200
        });
        var b = d.add.sprite(0, 0, "glow");
        d.tweens.add({
            targets: b,
            rotation: 6.28319,
            duration: 6E3,
            loop: -1
        });
        var f =
            d.add.sprite(0, -12, "win_win"),
            c = d.add.text(0, -108, "Level " + game_data.cur_level + "\nCompleted!", {
                fontFamily: "impact",
                fontSize: 50,
                align: "center",
                color: "#68A511"
            }).setOrigin(.5),
            e = d.add.sprite(0, -10, "stars");
        e.setFrame(y.frame.name);
        var h = d.add.sprite(0, 84, "btn_next").setInteractive();
        h.button = !0;
        h.name = "next";
        var k = d.add.sprite(0, 180, "btn_menu").setInteractive();
        k.button = !0;
        k.name = "menu";
        g.add([b, f, c, e, h, k]);
        g.setScale(0);
        d.tweens.add({
            targets: g,
            scaleX: 1,
            duration: 450,
            ease: "Back.easeOut"
        });
        d.tweens.add({
            targets: g,
            scaleY: 1,
            duration: 600,
            ease: "Back.easeOut",
            onComplete: function() {
                g.add(a);
                a.setPosition(0, 0);
                g.sendToBack(a)
            }
        })
    }
    var p = this,
        d = this;
    fade("out", this);
    this.add.sprite(360, 540, "background");
    this.add.sprite(360, 1016, "footer");
    this.add.sprite(360, 68, "header");
    var y = this.add.sprite(596, 56, "stars");
    y.setFrame(3);
    var t = {
        blocks: this.add.group(),
        bar: this.add.group(),
        value: this.add.group()
    };
    this.add.sprite(116, 60, "target_bar");
    for (var e = 0; 3 > e; e++) {
        var l = this.add.sprite(59 + 56 * e, 58, "blocks_small");
        l.id = e;
        t.blocks.add(l)
    }
    for (e =
        0; 3 > e; e++) l = this.add.sprite(76 + 56 * e, 72, "target_on"), l.id = e, t.bar.add(l);
    e = this.add.sprite(192, 1020, "btn_home").setInteractive();
    e.button = !0;
    e.name = "home";
    e = this.add.sprite(304, 1020, "btn_restart").setInteractive();
    e.button = !0;
    e.name = "restart";
    e = this.add.sprite(416, 1020, "btn_sound").setInteractive();
    e.button = !0;
    e.name = "sound";
    l = this.add.sprite(528, 1020, "btn_music").setInteractive();
    l.button = !0;
    l.name = "music";
    game_data.music || l.setTexture("btn_music_off");
    game_data.sound || e.setTexture("btn_sound_off");
    var I = this.add.text(360, 58, "MOVES", {
        fontFamily: "impact",
        fontSize: 40,
        align: "center",
        color: "#FFFFFF"
    }).setOrigin(.5);
    e = this.add.particles("blue");
    e.setDepth(3);
    var B = e.createEmitter({
        x: -400,
        y: 300,
        scale: {
            start: .7,
            end: 0
        },
        speed: {
            min: 100,
            max: 160
        },
        quantity: 30,
        rotate: {
            start: 0,
            end: Math.floor(360 * Math.random()) - 180
        },
        lifespan: {
            min: 500,
            max: 800
        },
        blendMode: "ADD"
    });
    B.explode();
    e = this.add.particles("p");
    e.setDepth(1);
    var F = e.createEmitter({
        x: -400,
        y: 300,
        scale: {
            start: .7,
            end: 0
        },
        speed: {
            min: 100,
            max: 180
        },
        quantity: 10,
        gravityY: 300,
        rotate: {
            start: 0,
            end: Math.floor(360 * Math.random()) - 180
        },
        lifespan: {
            min: 500,
            max: 800
        }
    });
    F.explode();
    var g, m = "load",
        G = !1,
        H = this.add.sprite(360, 540, "loading");
    this.tweens.add({
        targets: H,
        rotation: 6.28319,
        duration: 3E3,
        loop: -1
    });
    var q = new Match_Tap(this);
    q.get_level(game_data.cur_level).then(function(a) {
        q.generate("level");
        t.blocks.getLength();
        a = t.blocks.getChildren();
        for (var b = 0; 3 > b; b++) {
            var d = p.add.text(76 + 56 * b, 72, String(game_data.values[b]), {
                fontFamily: "impact",
                fontSize: 20,
                align: "center",
                color: "#FFFFFF"
            }).setOrigin(.5);
            d.id = b;
            t.value.add(d);
            a[b].setFrame(game_data.targets[b])
        }
        h();
        m = "play";
        console.log(game_data);
        H.destroy()
    });
    this.input.on("gameobjectdown", function(e, c) {
        if (c.block && "play" === m)
            if (c.booster) c.booster && (m = "wait", "horizontal" === c.boost_type ? (play_sound("swap", d), b(c, "horizontal", "left"), b(c, "horizontal", "right")) : "vertical" === c.boost_type ? (play_sound("swap", d), b(c, "vertical", "up"), b(c, "vertical", "down")) : "boom" === c.boost_type && (play_sound("boom", d), b(c, "boom")));
            else {
                var l = q.matching(c.pos_x, c.pos_y,
                    c.frame.name);
                2 <= l ? (play_sound("break", d), m = "wait", q.remove_match(F).then(function(b) {
                    f(b);
                    a(l)
                }), game_data.cur_moves--, h()) : q.clear("matching")
            }
        else c.button && (play_sound("click", d), this.tweens.add({
            targets: c,
            scaleX: .9,
            scaleY: .9,
            ease: "Linear",
            duration: 100,
            yoyo: !0,
            onComplete: function() {
                "play" === m ? "restart" === c.name ? k("restart") : "home" === c.name ? k("home") : "music" === c.name ? switch_audio(c.name, c, d) : "sound" === c.name && switch_audio(c.name, c) : "reward" === m ? "yes" === c.name ? remove_popup(g, d).then(function(a) {
                    g.destroy(!0, !0);
                    m = "play";
                    game_data.cur_moves = 5;
                    h()
                }) : "no" === c.name && remove_popup(g, d).then(function(a) {
                    g.destroy(!0, !0);
                    z()
                }) : "restart2" === c.name || "yes_restart" === c.name ? remove_popup(g, d, !0).then(function(a) {
                    d.scene.start("game")
                }) : "yes_home" === c.name ? remove_popup(g, d).then(function(a) {
                    d.scene.start("menu")
                }) : "no" === c.name ? remove_popup(g, d).then(function(a) {
                    g.destroy(!0, !0);
                    m = "play"
                }) : "next" === c.name ? remove_popup(g, d, !0).then(function(a) {
                    game_data.cur_level < game_data.total_level ? (game_data.cur_level++, d.scene.start("game")) :
                        d.scene.start("menu")
                }) : "menu" === c.name && remove_popup(g, d).then(function(a) {
                    d.scene.start("menu")
                })
            }
        }))
    }, this);
    this.input.keyboard.on("keydown", function(a) {
        " " !== a.key && "z" !== a.key && "p" === a.key && (game_data.cur_moves -= 5)
    })
};

function draw_button(a, b, f, h) {
    a = h.add.sprite(a, b, "btn_" + f).setInteractive();
    a.button = !0;
    a.name = f;
    return a
}

function remove_popup(a, b, f) {
    return new Promise(function(h) {
        var r = 0;
        f && (r = 1);
        a.remove(a.getByName("dark"));
        var k = b.add.rectangle(360, 540, 720, 1080, 0);
        k.alpha = .7;
        b.tweens.add({
            targets: k,
            alpha: r,
            duration: 600,
            ease: "Sine.easeOut",
            onComplete: function() {
                f || k.destroy();
                h(!0)
            }
        });
        b.tweens.add({
            targets: a,
            scaleX: 0,
            duration: 300,
            ease: "Back.easeIn"
        });
        b.tweens.add({
            targets: a,
            scaleY: 0,
            duration: 350,
            ease: "Back.easeIn"
        })
    })
}

function play_sound(a, b) {
    game_data.sound && b.sound.play(a)
}

function play_music(a, b) {
    var f = !0;
    game_data.music && game_music && game_music.isPlaying && (f = !1);
    f && game_data.music && (game_music = b.sound.add(a, {
        loop: !0
    }), game_music.play())
}

function stop_music() {
    "undefined" !== typeof game_music && game_music.stop()
}

function switch_audio(a, b, f) {
    "music" === a ? game_data.music ? (game_data.music = !1, b.setTexture("btn_" + a + "_off"), stop_music()) : (game_data.music = !0, b.setTexture("btn_" + a), play_music("music", f)) : game_data.sound ? (game_data.sound = !1, b.setTexture("btn_" + a + "_off")) : (game_data.sound = !0, b.setTexture("btn_" + a))
}

function fade(a, b) {
    return new Promise(function(f) {
        if ("in" === a) {
            var h = b.add.rectangle(360, b.cameras.main.scrollY, 720, 1080, 0).setOrigin(.5, 0);
            h.alpha = 0;
            b.tweens.add({
                targets: h,
                alpha: 1,
                duration: 300,
                ease: "Linear",
                onComplete: function() {
                    f(!0)
                }
            })
        } else h = b.add.rectangle(360, b.cameras.main.scrollY, 720, 1080, 0).setOrigin(.5, 0), h.alpha = 1, h.setDepth(5), b.tweens.add({
            targets: h,
            alpha: 0,
            duration: 300,
            ease: "Linear",
            onComplete: function() {
                f(!0)
            }
        })
    })
}
var config = {
        type: Phaser.AUTO,
        width: 720,
        height: 1080,
        scale: {
            mode: Phaser.Scale.FIT,
            parent: "gradle",
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
        scene: [Boot, Load, Menu, LevelMap, Game]
    },
    game = new Phaser.Game(config);