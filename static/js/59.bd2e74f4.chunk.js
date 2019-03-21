(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{283:function(e,n){e.exports={title:"1.4.22 Release",description:"Recent clan chat listings, inventory/equipment tagging and tag tab export/import",author:"Jordan",__content:'<p>Recent Clan chats are now listed in the clan chat tab when not already in a clan chat room. Thanks\nto <a href="https://github.com/raiyni">@raiyni</a> for this feature.</p>\n<p><img src="/img/blog/1.4.22-Release/recent-clan-chats-listing.png" alt="Recent clan chats listing in the clan chat tab"/></p>\n<p>An enhancement has been added to the bank tags feature to tag items in your inventory or equipment\ndirectly, also thanks to <a href="https://github.com/raiyni">@raiyni</a>.</p>\n<p><img src="/img/blog/1.4.22-Release/bank-tag-inventory-and-equipment.gif" alt="bank tags: Tag inventory and equipment"/></p>\n<p>Tag tabs can now be imported from and exported to the clipboard. After exporting tag tab from RuneLite,\nclipboard contents should look like this (this is mining tag tab with prospectors and d pick):</p>\n<pre><code>mining,12797,12020,12019,12016,12015,12014,12797,1712,1710\n</code></pre><p>and you can view it online <a href="https://runelite.net/tag/show/mining,12797,12020,12019,12016,12015,12014,12797,1712,1710">here</a>.\nThanks to <a href="https://github.com/deathbeam">@deathbeam</a> for this feature.</p>\n<p><img src="/img/blog/1.4.22-Release/bank-tag-import-export.gif" alt="bank tags: Import and export using clipboard"/></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Fixed a bug where the OSBuddy price overlay text was duplicated on the Grand Exchange offer screen</li>\n<li>Motherlode Mine and raiding have been added to the Discord plugin activity reporter</li>\n<li>Private messages received from player moderators are now properly recolored</li>\n<li>The Chambers of Xeric scouting overlay now displays while at the nearby bank</li>\n<li>Bank tag icons now display a higher quantity for stackable items</li>\n<li>Bank searching (and thus bank tags) now allows for terms larger than 15 characters</li>\n<li>The wilderness kill/death counter, Bounty Hunter stats widget, and Zeah mess hall widgets are now\nmoveable</li>\n<li>Fixed some slayer plugin parsing bugs</li>\n<li>An option has been added to the Bank Tags plugin to remember the last-opened tag tab</li>\n<li>An option has been added to the Runelite settings to display your username in the window title</li>\n<li>Some bugfixes for clues (particularly the newly-added 3-cryptic clues) have been added</li>\n<li>Runelite on OSX will now attempt to use terminal-notifier for better-quality notifications</li>\n<li>The Menu Entry Swapper plugin can now swap Quick-pass/travel/start menu options</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 17 contributors this release!</p>\n<pre><code>Adam (2):\n      Revert &quot;Remove zoom plugin&quot;\n      clue plugin: fix spelling of Peksa&#39;s name\n\nBruno_ (1):\n      Fix OSB price duplicationon delayed lookup (#5860)\n\nConnor S. Parks (1):\n      DiscordPlugin: Add MLM\n\nFarmour (1):\n      Add PRIVATE_MESSAGE_RECEIVED_MOD to chat recoloring (#5977)\n\nHydrox6 (1):\n      Correctly reset widget.originalY in WidgetOverlay (#6004)\n\nJordan Atwood (3):\n      time tracking: Remove deprecated config migration\n      GameEventManager: Simulate Actor spawn events\n      slayer: Add combat bracelet task update handling\n\nKamiel (2):\n      Fix raid scout overlay not rendering at bank\n      Add examine info to dev tools\n\nMagic fTail (1):\n      Fix zoom after update\n\nMattias Cederlund (1):\n      Fix ASGARNIA_MIAZRQA Hot-Cold clue location.\n\nNathen (1):\n      Log if we fail to match clue text\n\nRon Young (11):\n      Fix spellbook home teleport widget ids (#5928)\n      ConfigManager: don&#39;t post an update if the values are the same (#5480)\n      Add recent clan chats plugin\n      Bank tags: add ability to tag inventory/equipment (#5988)\n      Tag tabs: Add to existing tags instead of overwriting them from inv/eq (#6025)\n      widget: expose itemQuantityMode (#6020)\n      Tag tabs: show largest quantity icon (#6040)\n      Relate worn weight reducing items to their inventory version\n      Don&#39;t show recent clan chats with CC req popup (#6067)\n      Don&#39;t limit bank search explicitly to 15 characters\n      Don&#39;t fetch itemid of Change Icon menu option on tabs\n\nSebastiaanVanspauwen (1):\n      WidgetOverlay: Make k/d counter moveable (#5829)\n\nTomas Slusny (34):\n      Make bounty hunter stats widget layoutable\n      Move raid scouter layout to title\n      Correctly parse slayer task with the and breaks in npc name\n      Do not reset equipment/inventory in clues croll plugin each tick\n      Remove duplicate &quot;Patches&quot; from time track overview\n      Add Gout Tuber heal info to Item Stats plugin\n      Add option to remember last opened tag tab\n      Fix cave kraken boss task name\n      Add optional &quot;the&quot; when checking slayer task progress message\n      Remove invalid properties from map on property load\n      Use UTF-8 instead of ISO 8859-1 when loading/saving config\n      Lock configuration file when writing to filesystem\n      Reorder menu swaps again by name\n      Add quick pass/travel/start menu entry swapping\n      Disable bury and harpoon swaps by default\n      Limit widget overlay bounds to parent\n      Move ChatMessageManager#refreshAll to client thread\n      Move local player hiscore type check to client thread\n      Add option to choose interface (layoutable) overlay font\n      Add toggle for displaying username in title\n      Sort config panel options by name as well\n      Add raiding activity to Discord plugin\n      Make 3 step cryptic clues more robust (better splitting)\n      Null-check location for multi-location clues\n      Fix punctionation in &quot;Fiendish cooks&quot; cryptic clue\n      Add ability to import/export tag tabs with clipboard\n      Properly update 3 step cryptic clues on step completion\n      Use terminal-notifier when available for OSX\n      Unify calls for getting real item id for bank tag\n      Make Zeah Mess Hall display layoutable\n      Invoke GameEventManager events on ClientThread\n      Clear hint arrow when switching 3 step NPCs\n      Update active tag tab containing edited tag\n      Filter &gt; 0 when tagging inventory/equipment\n\nellscape (1):\n      Mystic Mist Staff buy limit corrected from 6 to 8\n\nforsco (1):\n      Remove switch case for swapQuick that would cause rest of swaps to be skipped (#6007)\n\nrobinwithes (4):\n      Update slayer task based on VarPlayer value if available (#5989)\n      Revert &quot;Update slayer task based on VarPlayer value if available (#5989)&quot;\n      Add diamond bolts to the ge limits (#6042)\n      Add lockpick requirement to magical axe hut clue (#6045)\n\ntrimbe (1):\n      Fix lava maze dungeon cryptic clue\n</code></pre>'}}}]);
//# sourceMappingURL=59.bd2e74f4.chunk.js.map