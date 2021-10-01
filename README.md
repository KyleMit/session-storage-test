# Session Storage Test

An attempt to reproduce session storage constraints on older devices, as mentioned in this Stack Overflow post - [When is sessionStorage actually cleared?](https://stackoverflow.com/q/36604747/1366033).  Which referenced an [archived MDN page on `Window.sessionStorage`](https://web.archive.org/web/20180206072529/https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) claiming:


> **Note**: since iOS 5.1, Safari Mobile stores localStorage data in the cache folder, which is subject to occasional clean up, at the behest of the OS, typically if space is short.

