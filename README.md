# Everything
Notes. A lot of them.

## Build Instructions

To build the notes, CD to the parent directory of Documentation.docc and run the make script.
 - `make`, `make all`, or `make local deploy` to build both local and github pages versions of the portfolio.
 - `make local` to build only the local version of the portfolio.
 - `make deploy` to build only the github pages version of the portfolio.
 - `make run` to run the local version of the portfolio.
 - `make commit msg="commit msg here"` to build deploy version and commit

Visit http://localhost:8000/documentation/home/ to view the portfolio locally.

Note that by default, the script produces TWO versions of the portfolio. 
The first is the one that is hosted locally for debugging, which is gitignored and not included on the github.
The second is the one that is hosted on Github Pages. The local server version is useful for debugging purposes.
