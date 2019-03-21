(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{238:function(e,n){e.exports={title:"1.2.11 Release",description:"New 1.2.11 release of RuneLite is out. Notable new features are an awesome Hunter Plugin and support for more potion timers",author:"Tomas",__content:'<p>In this release we made a lot of improvements to client source, performance and\noverall stability of the client. But there are few new features that are\ndefinitely worth mentioning.</p>\n<p>First, and the biggest one is <strong>Hunter</strong> plugin (thanks to\n<a href="https://github.com/RobinWeymans">@RobinWeymans</a>). Hunter plugin will show you\nstate of your traps and also time until they will break. That should improve\nyour overall hunting experience (and makes the terrible skill less terrible).\nHere is small preview:</p>\n<p><img src="/img/blog/1.2.11-Release/hunterplugin.png" alt="hunter-plugin"/></p>\n<p>We also added support for some missing potions for the <strong>Timers</strong> plugin, and that\nalso includes the newest released potion, Super Antifire Potion.</p>\n<p><img src="/img/blog/1.2.11-Release/newtimers.png" alt="newtimers"/></p>\n<p>And last feature on the list is support for <strong>native window decorations</strong>. That\nmeans now you have option to let your window manager handle the window\ndecorations (title bar, window borders). Here is small preview using my window\nmanager (bspwm) without any window borders:</p>\n<p><img src="/img/blog/1.2.11-Release/nativewindow.png" alt="native-window"/></p>\n<p>As I said in the beginning of the post, we made a lot of improvements to the\nclient source code (mainly decoupling), so if you are bored Java developer\nlooking for project to contribute to, you are always welcome!</p>\n<p>Hopefully you will like the new release, enjoy!</p>\n<p>~ Tomas</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 15 contributors this release!</p>\n<pre><code>Abex (1):\n      client: Add option to disable custom window chrome/style\n\nAdam (30):\n      Skip archetype test by default\n      cache: default index data to protocol 6\n      runelite-api: add equipment inventory slot id, inventory id, logout widget and chat message type 7\n      cache: fix writeBigSmart\n      cache: fix readBigSmart\n      cache: fix readString to not sign extend negative values\n      cache: rename some fields of object and interface\n      cache: lombok definitions\n      cache: add a few more write* to outputstream\n      cache: add savers\n      cache: add map and location definition, convert Region loading to use it\n      cache: split cache client and server into their own projects\n      runelite-proxy: subtree split into separate repository\n      cache: disable map image dumper test\n      cache: also disable map dumper test\n      runelite-client: move infoboxes back to top left\n      runelite-client: always render tooltips on top\n      cache test: get tmpdir from a system property\n      injector: allow method hooking to end of methods with multiple returns\n      Consistently capitalize RuneLite\n      Update logo\n      xp tracker: reset on world hop and on logging in\n      xp tracker: remove unused import\n      runelite-client: fix --no-rs\n      dev tools: draw over everything\n      http-service: fix item price cache to use fetched time instead of price time\n      http-service: remove junit/mockito dependencies since spring pulls them in\n      http-service: disable default cache control provided by spring-security\n      http-service: add cache control to item price\n      http-service: change item price cache to 30 minutes\n\nAlexander (2):\n      Fall back to default font for glyphs not in the custom font\n      ExaminePlugin: Make sure widget children array index is valid\n\nDevin (3):\n      Add fight cave plugin config\n      Update fight cave plugin overlay\n      Update zulrah plugin overlay\n\nDevin French (1):\n      Combine BOTTOM_RIGHT and ABOVE_CHATBOX_RIGHT overlays for fixed mode\n\nJulian Tith (1):\n      Add craft spinning animation ID and idle notification\n\nMax Weber (1):\n      runelite-client: add ConfigItem.warnOnDisable and warnOnEnable to configure when confirmationWarning is shown\n\nOnvo (6):\n      New MenuActions related to the hunter plugin\n      Add Widget.contains point\n      Add GameObjectsChanged event\n      Make ground items overlay use new Widget.contains\n      Add hunter plugin\n      Add colors for impling types\n\nRunelite auto updater (2):\n      [maven-release-plugin] prepare for next development iteration\n      [maven-release-plugin] prepare release runelite-parent-1.2.11\n\nSomeoneWithAnInternetConnection (5):\n      Actually fix example plugin archetype\n      Add tests for archetype-plugin compilability\n      Reduce clearRect calls to improve framerate\n      Prevent cursor icon from getting stuck as the wrong shape\n      Slayer plugin - fix &quot;count on items&quot; feature\n\nTomas Slusny (20):\n      Fix OkHttp connection leaks on connection error\n      Change UIManager defaults to use OSRS font\n      Change XP tracker button to use image\n      Simplify navigation button code\n      Move IconTextField to Hiscore plugin\n      Normalize plugin panel display\n      Change Notifier to be injectable service\n      Extract session-related logic to SessionManager\n      Extract runQuery to QueryRunner service\n      Move creation of client to RuneLite\n      Move setTitle to ClientUI\n      Move creation of tray icon to ClientUI\n      Cleanup RuneLite class fields\n      Move creation of UI to ClientUI class\n      Remove unnecessary null checks for game client\n      Show account and config plugins when outdated\n      Change warning for not found task to debug\n      Add support for super antifire potion\n      Add Antidote++ timer to TimerPlugin\n      Improve clan rank caching\n\nUniquePassive (10):\n      Don&#39;t NPE when Player name is null\n      Expand the hiscore panel when looking up players\n      Fix BackgroundComponent&#39;s background overflow\n      Fix previous result not being cleared in hiscore plugin\n      Fix ground items not being toggleable\n      Fix the UI freezing when refreshing widgets in the Dev Tools\n      runescape-client: Rename RSCanvas to GameCanvas\n      runescape-client: Rename RSSocket to GameSocket\n      Add a world list lookup client\n      Add world types\n\nUnmoon (4):\n      Ground Items - Fix alch value not applying to whole stack\n      Ground Items - Fix coins not having value\n      Ground Items - Fix quantity in high alch value display\n      Ground Items - Always show highlighted items\n\nkokkue (1):\n      idle plugin: add ornament dragon pickaxe\n\nnoremac201 (11):\n      Added missing skilling skills from boosts overlay. Reordered from left to right and up to down.\n      Add new overlay position for above right side of chatbox\n      Change attack style plugin to use overlay position ABOVE_CHATBOX_RIGHT\n      Added ProgressBar Component\n      Modified PanelComponent to hold a ProgressBarComponent\n      Updated XpGlobes to use new Components\n      Fixed setStroke not being reset in Graphics object\n      Added ReportButton Widget to api\n      Added Report Button Utilities Plugin\n      Fixed attackStyle not being correct without configChangeEvent\n      Fixed type 20 attack weapon styles\n\nutsukami (1):\n      Fixes idle notifications occurring when they shouldn&#39;t (interacting with bankers/players). See #282\n</code></pre>'}}}]);
//# sourceMappingURL=14.b1ac9748.chunk.js.map