# Valv-Vcert

Important notes (feel free to edit if you have more):
- THOU SHALT NOT directly edit .css files in the styles folder. Always edit the scss files, then compile.
- THOU SHALT NOT directly edit scripts in the bin folder. Babel is set to transpile all scripts in the src folder and spit out the final product in the bin folder. It follows that you should always use the bin scripts to reap the benefits of Babel, which makes more recent javascript cross-compatible with older browsers. We explicitly use this in the header and footer files. To transpile the src scripts, use the command line 'npm run-script build' in a terminal window pointed to the project's main directory.
- THOU SHALT NOT import scripts from the src folder in your pages in keeping with the above. Use their corresponding scripts in the bin folder instead.
- THOU SHALT comment your code, at least while doing things that may hard to understand to others.
- THOU SHALT make your variables, functions names, etc. descriptive
- THOU SHALT use descriptive commits, and strive to not use similar commit descriptions for multiple commits in the same day (but ideally be specific enough that you don't EVER use the same commit description).

Other considerations:
- In Firebase, queries are limited, especially if you are used to MySQL You are only allowed to use order_by once, and that's it. You need to do some pretty specific manuevering to get what you want in some cases, which is detailed in the accepted answer to https://stackoverflow.com/questions/26700924/query-based-on-multiple-where-clauses-in-firebase. We used to use this method on the leaderboard before we changed to multiple classes for a single user.

To create the app via Cordova:
- To install cordova, use the 'npm install -g cordova' command.
- Brian made a npm script for creating the app: run the command 'npm run-script app' from the main VCERT directory. It copies the necessary folders, and all .html files in the main directory. This means it will also leave out some files and folders not important to runtime. If a folder is added in the main directory OR a file is added to the main directory that is not an html file (the latter at least should probably never happen), let Brian know so he can update the script accordingly.
- You'll need to install prerequisites for android or ios development. Consult https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#requirements-and-support and https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html#requirements-and-support for android and ios respectively. You can also use the 'cordova requirements' command in the app folder to check if you have everything you need.
- Use 'cd app' to change directory to the app folder, and then use 'cordova run android' to build android. If you have an android device connected in developer mode and USB debugging, the app will appear straight on your device. If not, you can use an emulator.
- For Apple, you need a Mac (Boo!). But you would do the above step, instead using 'cordova run ios' to build for ios.
- Doing a official release would require doing 'cordova run android --release', and the resulting app package would be at app/platforms/android/app/build/outputs/apk/release. Releasing for ios would be similar.