---
title: Turn Your Phone into a Dumb Phone- A No-Root Guide to Simplifying Your Smartphone
excerpt: Reclaim focus and reduce distractions by transforming your smartphone into a dumb phone. This step-by-step guide shows you how to use ADB App Control, FOSS apps, and a few tweaks to create a distraction-free, privacy-friendly device—no rooting required!
featured: true
publishDate: Dec 12 2024
tags:
  - programing
  - life tip
  - simple life
seo:
  image:
    src: /dumb-down-your-phone.jpg
    alt: How to dumb down your smart phone

---
         
![How to dumb down your smart phone](/dumb-down-your-phone.jpg)

## Turning Your Android Phone into a Dumb Phone: A Step-by-Step Guide

The idea of a "dumb phone" has gained traction as more people seek to reclaim focus and reduce the distractions of modern smartphones. Devices like the Lightphone or Punkt. have made headlines, but they come with limitations (I know kinda the whole point). But if you’re like me, there are just a few apps you feel you can’t live without but you’re tired of feeling chained to your phone. That’s where this guide comes in.

I decided to transform my Android phone into a smart dumb-phone a distraction-less device.With no rooting required you can do it too. Along the way, I developed a process that works for anyone, whether you’re aiming for a full "dumb phone" experience want to de-Google your phone for greater privacy or just limit your phone a bit.

My first shot was to build my own custom launcher that allowed me to hide apps and prevent myself from undoing the hiding. While this worked initially, it didn’t quite give me the control or simplicity I was after. So, I dug deeper and found a method that’s both accessible and effective. Read on and find out how **you** can do this.

### How I Did It

Here’s the process I followed, and you can do it too:

### Step 1: Factory Reset Your Phone

Start with a clean slate. Perform a factory reset on your phone to remove all previously installed apps and data. This ensures you’re not dealing with years (or lets be real a year lol) installed and forgotten apps and game or lingering distractions.

### Step 2: Activate Your Phone but Skip Signing In

Once the reset is complete, activate your phone as usual, but **do not sign in** to any Google or Samsung accounts. This step is crucial to avoid reintroducing big tech tracking or unnecessary services. This way anything you didnt remove wont be connected to your account and they are smart enough to tie you to your activities on this phone its one less bit of data for them.

### Step 3: Become a developer 

Dont worry this is much easier then learning to program and takes less time.
* Open your settings app
* Open `About Phone`
* Click on your build number (should be near the bottom) just keep clicking until you get a popup saying your a developer.
* go to your developer options and turn on USB DEBUGGING dont worry you can turn this off after your done.


### Step 4: Install ADB App Control on Your Computer

[ADB (Android Debug Bridge) App Control](https://adbappcontrol.com/en/) is a tool that allows you to manage apps on your phone from your computer. It’s an essential part of this process, as it lets you uninstall unwanted apps without needing root access. Plug in your phone and allow access to your computer.

### Step 5: Uninstall Unwanted Apps

Using ADB App Control, start removing apps you know you don’t need. At first, keep a web browser,file browser and keyboard, installed for convenience. Avoid uninstalling anything that sounds critical to your phone’s basic functionality. but we you can end up replacing every app in the list almost with a FOSS version. Here is a partial list of first wave apps I removed:

* Calculator
* Clock
* Play Store
* Drive
* Contacts But not apps like `Contact storage`
* Phone
* Verison trash

And avoid removing apps like:
* `carrier Commuacations` or any Carrier apps 
* com.google.android.hardware.info 
If you know what your doing do your thing but if your just like me and dont know these apps from adam leave them alone.

### Step 6: Test and Remove More Apps

Once the obvious bloatware/pre installed version of things are gone, you can start removing less obvious apps. Proceed cautiously and test your phone’s functionality after each removal. This ensures you don’t accidentally delete something vital. Dont worry if you remove something you ended up needing ADB App Control will let you undo it. This is where we can get into these more strange apps like:
* system parental controls 

<details>
<summary>My Removed apps</summary>

 ![removed apps](/adb1.png)
  ![removed apps](/adb2.png)

 ![removed apps](/adb3.png)
  ![removed apps](/adb4.png)


</details>

### Step 7: Install F-Droid

[F-Droid](https://f-droid.org/docs/Get_F-Droid/) is an open-source app store like Play Store. There are lots of awesome apps on f-droid, but you wont find Instagram or tiktok here. So its perfect for us.

### Step 8: Install Basic Apps
Now that we have gone and removed everything good and bad we need some stuff to make our phone work again here is a list of apps I installed to get basics back:
* [Fossify Phone](https://f-droid.org/en/packages/org.fossify.phone/) for making phone calls
* [Fossify Notes](https://f-droid.org/en/packages/org.fossify.notes/) for simple notes like a shopping list
* [Fossify Clock](https://f-droid.org/en/packages/org.fossify.clock/) for alarms
* [Fossify Calendar](https://f-droid.org/en/packages/org.fossify.calendar/) for keeping track of peoples birthdays
* [Fossify File Manager](https://f-droid.org/en/packages/org.fossify.filemanager/) for browsing files and sideloading apps downloaded from the web
* [Fossify Gallery](https://f-droid.org/en/packages/org.fossify.gallery/) for looking at photos you took
* [Fossify Contacts](https://f-droid.org/en/packages/org.fossify.contacts/)
* [Fossify Calculator](https://f-droid.org/en/packages/org.fossify.calculator/)for simple math
* [Open Camera](https://f-droid.org/en/packages/net.sourceforge.opencamera/) to take photos in a pinch
* [HeliBoard](https://f-droid.org/en/packages/helium314.keyboard/) a great keyboard
* [MuPDF mini](https://f-droid.org/en/packages/com.artifex.mupdf.mini.app/) to open and view pdfs some times needed for food menus
* [Fossify SMS Messenger](https://f-droid.org/en/packages/org.fossify.messages/) I didnt love this one but its foss
* [Free Browser](https://f-droid.org/en/packages/org.woheller69.browser/) A great simple browser that will stop you from doing too much on the web

Now go through and add back in that list of Must have apps for you. For me it was:
* [Signal](https://signal.org/android/apk/)
* kisi
* Banking app for checks
All of these I downloaded and side loaded from the web browser.

If you dont have a self control problem you can use [Aurora Store](https://auroraoss.com/) a Play Store client that does not need a google account.


### Step 9: Remove the Browser and F-Droid
You can can be done now and not remove anything else but if you like and want a more true dumb phone experience.

Return to ADB App Control and uninstall your browser and F-Droid and even the file browser (for full dumb phone). This step locks your phone down, ensuring you’re not tempted to install new apps or revert to old habits.


### Step 10: Keep going

Now this is really your phone. Make it work for you dont let it control you, add back in some apps remove more. Experiment and find how to make this the best phone it can be for you.


### Outcome

- **Fewer Distractions:** With most apps removed, my phone became a tool, not a source of endless distractions.
- **Improved Privacy:** By avoiding Google and using FOSS apps, I significantly reduced big tech’s footprint on my device.
- **Battery Life:** One side benefit I didn't expect was 2 days of battery life where I was getting .7 days before but removing all that bloat really help and I use it far less now. 


### Conclusion

Transforming your Android phone into a dumb phone is a simple way to put you back in control. Whether you’re seeking fewer distractions, greater privacy, this method offers a flexible way to achieve your goals. Plus, it’s all possible without rooting your device all you need to do is a factory reset and your back to old. 

Beyond the personal benefits, this approach also helps address the growing problem of e-waste. Instead of buying a new "dumb phone" that will eventually end up as trash, you’re repurposing a device you already own. This free method reduces the demand for new electronics and keeps one more gadget out of landfills. Give it a try, and see how simplifying your phone can enhance your life while contributing to a more sustainable future for you and the world


