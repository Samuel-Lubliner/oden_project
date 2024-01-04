# Browser Compatibility

applications may behave differently in the browser. Due to Chrome dominance, the vast majority of applications are designed to work smoothly with Chromium.

For your web development projects to have a broader reach, you must make sure that you’re testing your web applications against the browsers which are most likely to be used by the users. Chrome, Safari, Firefox, and other Chromium-based browsers (Microsoft Edge, Brave, etc.) are more common among regular users. But you may find you need to support less common ones (like Internet Explorer) as well depending on the user base or the company you work for.

<https://caniuse.com/>

“Can I Use” is a great resource to help you validate if new features are supported by the browsers.

## Mobile browsers

Mobile devices mostly consist of smartphones and tablets. The most popular mobile operating systems are Android and Apple’s iOS.

On iOS and iPadOS, Safari is technically the only supported browser. You can install Chrome or Firefox, and you can even set them as a default, but they are not full browsers. They are still using the Safari rendering engine (WebKit). Therefore, for your web application to work for the Apple users, you have to ensure support for WebKit and other technologies used in Safari. It’s important to remember that mobile browsers are not one-to-one with their desktop counterparts. A project that works in the desktop version of Safari might still need adjustments to work properly on the mobile version of the same browser.

Another consideration for mobile browsers are different screen sizes. Remember is that when, for example, you emulate an iPhone in Chrome, all that you’re emulating is the screen size. Even though everything functions well in Chrome when emulating a device, it could behave differently on the actual phone or tablet device.

