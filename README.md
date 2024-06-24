# Jumbleum
Notes. A lot of them.

## Build Instructions

To build the notes, CD to the parent directory of Documentation.docc and run the make script.
 - `make`, `make all`, or `make local deploy` to build both local and github pages versions of the Jumbleum.
 - `make local` to build only the local version of the Jumbleum.
 - `make deploy` to build only the github pages version of the Jumbleum.
 - `make run` to run the local version of the Jumbleum.
 - `make commit msg="commit msg here"` to build deploy version and commit

Note that we use a custom build of `swift-docc-render`, which provides LaTeX support and other features not 
present in the default version of `swift-docc-render`. It sometimes doesn't apply itself, so if you encounter
issues, run these commands in the terminal:
```shell
export DOCC_HTML_DIR="/path/to/this/directory/dist"
xcrun docc convert . --transform-for-static-hosting
make run
```

Visit http://localhost:8000/documentation/home/ to view the Jumbleum locally.

Note that by default, the script produces TWO versions of the Jumbleum. 
The first is the one that is hosted locally for debugging, which is gitignored and not included on the github.
The second is the one that is hosted on Github Pages. The local server version is useful for debugging purposes.
