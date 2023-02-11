/**
 * Custom Terminal Commands
 * -----------------------------
 * In this file, define custom commands for your terminal application.
 * This will overwrite any built-in system commands if they exist.
 */
var customCommands = {};

/**
 * Base64 encodes a string.
*/
builtInCommands.base64enc = {
    about: "base64enc [string]<br>&nbsp;&nbsp;Base64 encode a string.",
    exe: function (args) {
        if(args.length == 1){
            return "No string specified.";
        }
        args.shift();
        return btoa(args.join(" "));
    }
}

/**
 * Base64 decodes a string.
*/
builtInCommands.base64dec = {
    about: "base64dec [string]<br>&nbsp;&nbsp;Base64 decode a string.",
    exe: function (args) {
        if(args.length == 1){
            return "No string specified.";
        }
        args.shift();
        return atob(args.join(" "));
    }
}

/**
 * Print a simple message.
 **/
customCommands.cow = {
    about:  "cow<br>&nbsp;&nbsp;What does a cow say?",     // Help text for this command.
    exe:  function() {                                     // Executed for this command.
            return "Moooooo!";
    }
};

/**
 * Prints a greeting to the user or to the given name.
 **/
customCommands.hello = {
    about: "hello [name ...]<br>&nbsp;&nbsp;Greet the user with a message.",
    exe: function (args) {                          // Executed for this command. args[0] contains the command name.
        if (args.length < 2) {
            return "Hello. Why don't you tell me your name?";
        }
        var name = "";
        for (var i = 1; i < args.length; i++) {
            name += args[i] + " ";
        }
        return "Hello " + name.trim();
    }
};

/**
 * Print certain system information.
 **/
customCommands.uname = {
    about: "Usage: uname [OPTION]...<br>Print certain system information.  With no OPTION, same as -s.<br><br>&nbsp;&nbsp;-a (all)<br>&nbsp;&nbsp;-s (kernel-name)<br>&nbsp;&nbsp;-n (nodename)<br>&nbsp;&nbsp;-r (kernel-release)<br>&nbsp;&nbsp;-v (kernel-version)<br>&nbsp;&nbsp;-m (machine)<br>&nbsp;&nbsp;-p (processor)<br>&nbsp;&nbsp;-i (hardware-platform)<br>&nbsp;&nbsp;-o (operating-system)<br>&nbsp;&nbsp;&nbsp;&nbsp;--help<br>&nbsp;&nbsp;&nbsp;&nbsp;--version",
    exe: function (args) {
        var information = "";
        if ( args[1] && args[1] == "-a") {
            information += "Linux arch 6.1.9-arch1-2 #1 SMP PREEMPT_DYNAMIC Fri, 03 Feb 2023 18:49:53 +0000<br>x86_64 GNU/Linux";
        } else if ( args[1] && args[1] == "-s" ) {
            information += "Linux";
        } else if ( args[1] && args[1] == "-n" ) {
            information += "arch";
        } else if ( args[1] && args[1] == "-r" ) {
            information += "6.1.9-arch1-2";
        } else if ( args[1] && args[1] == "-v" ) {
            information += "#1 SMP PREEMPT_DYNAMIC Fri, 03 Feb 2023 18:49:53 +0000";
        } else if ( args[1] && args[1] == "-m" ) {
            information += "x86_64";
        } else if ( args[1] && args[1] == "-p" ) {
            information += "unknown";
        } else if ( args[1] && args[1] == "-i" ) {
            information += "unknown";
        } else if ( args[1] && args[1] == "-o" ) {
            information += "GNU/Linux";
        } else if ( args[1] && args[1] == "--help" ) {
            information += "Usage: uname [OPTION]...<br>Print certain system information.  With no OPTION, same as -s.<br><br>&nbsp;&nbsp;-a (all)<br>&nbsp;&nbsp;-s (kernel-name)<br>&nbsp;&nbsp;-n (nodename)<br>&nbsp;&nbsp;-r (kernel-release)<br>&nbsp;&nbsp;-v (kernel-version)<br>&nbsp;&nbsp;-m (machine)<br>&nbsp;&nbsp;-p (processor)<br>&nbsp;&nbsp;-i (hardware-platform)<br>&nbsp;&nbsp;-o (operating-system)<br>&nbsp;&nbsp;&nbsp;&nbsp;--help<br>&nbsp;&nbsp;&nbsp;&nbsp;--version";
        } else if ( args[1] && args[1] == "--version" ) {
            information += "uname (GNU coreutils) 9.1<br>Copyright (C) 2022 Free Software Foundation, Inc.<br>License GPLv3+: GNU GPL version 3 or later <https://gnu.org/licenses/gpl.html>.<br>This is free software: you are free to change and redistribute it.<br>There is NO WARRANTY, to the extent permitted by law.<br><br>Written by David MacKenzie.";
        } else if ( ! args[1] ) {
            information += "Linux";
        } else {
            information += "uname: No such option.";
        }
        return information;
    }
}

/**
 * Fastboot
 **/
customCommands.fastboot = {
    about: "usage: fastboot [OPTION...] COMMAND...",
    exe: function (args) {
        var information = "";
        if ( args[1] && args[1] == "flash" ) {
            if ( args[2] && args[2] == "boot" ) {
                if ( args[3] && args[3] == "boot-offical.img" ) {
                    information += "Sending 'boot_a' (196608 KB)&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  4.848s]<br>Writing 'boot_a'&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  0.314s]<br>Finished. Total time: 5.312s<br>Nothing happened.";
                } else if ( args[3] && args[3] == "ksu-10581-Image-android12-5.10.81_2022-03-boot-gz.img" ) {
                    information += "Sending 'boot_a' (196608 KB)&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  4.848s]<br>Writing 'boot_a'&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  0.314s]<br>Finished. Total time: 5.312s<br>Congratulations!!You have successfully completed this exam.<br>Telegram Group Password:114514";
                } else if ( args[3] && args[3] == "ksu-10581-Image-android12-5.10.81_2022-03-boot-lz4.img" ) {
                    information += "Sending 'boot_a' (196608 KB)&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  4.848s]<br>Writing 'boot_a'&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  0.314s]<br>Finished. Total time: 5.312s<br>Congratulations!!Your device has become a brick!<br>Please continue to finish exam.";
                } else if ( args[3] && args[3] == "ksu-10581-Image-android12-5.10.81_2022-03-boot.img" ) {
                    information += "Sending 'boot_a' (196608 KB)&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  4.848s]<br>Writing 'boot_a'&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  0.314s]<br>Finished. Total time: 5.312s<br>Congratulations!!Your device has become a brick!<br>Please continue to finish exam.";
                } else if ( args[3] && args[3] == "ksu-10581-Image-android13-5.10.107_2022-05-boot.img" ) {
                    information += "Sending 'boot_a' (196608 KB)&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  4.848s]<br>Writing 'boot_a'&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  0.314s]<br>Finished. Total time: 5.312s<br>Congratulations!!Your device has become a brick!<br>Please continue to finish exam.";
                } else if ( ! args[3] ) {
                    information += "fastboot: flash: Please choose a file which you need to flash.";
                } else {
                    information += "fastboot: error: No such file or directory.";
                }
            } else if ( ! args[2] ) {
                information += "fastboot: flash: Please choose the partition which you need to flash.<br>(Just need to flash boot.)";
            } else {
                information += "fastboot: flash: Needn't flash this partition.";
            }
        } else if ( args[1] && args[1] == "devices" ) {
            information += "a9d45561&nbsp;&nbsp;&nbsp;&nbsp;fastboot<br>&nbsp;";
        } else if ( args[1] && args[1] == "-h" ) {
            information += "usage: fastboot [OPTION...] COMMAND...<br><br>&nbsp;flash PARTITION [FILENAME]<br>&nbsp;devices<br>&nbsp;-h";
        } else {
            information += "fastboot: usage: no command";
        } 
        return information;
    }
}

/**
 * whoami
 **/
customCommands.whoami = {
    about: "Usage: whoami [OPTION]...<br>Print the user name associated with the current effective user ID.<br>Same as id -un.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--help&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display this help and exit<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--version&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;output version information and exit<br><br>GNU coreutils online help: (https://www.gnu.org/software/coreutils/)<br>Report any translation bugs to (https://translationproject.org/team/)<br>Full documentation (https://www.gnu.org/software/coreutils/whoami)<br>or available locally via: info '(coreutils) whoami invocation'",
    exe: function (args) {
        var information = "";
        if ( args[1] && args[1] == "--help" ) {
            information += "Usage: whoami [OPTION]...<br>Print the user name associated with the current effective user ID.<br>Same as id -un.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--help&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display this help and exit<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--version&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;output version information and exit<br><br>GNU coreutils online help: (https://www.gnu.org/software/coreutils/)<br>Report any translation bugs to (https://translationproject.org/team/)<br>Full documentation (https://www.gnu.org/software/coreutils/whoami)<br>or available locally via: info '(coreutils) whoami invocation'";
        } else if ( args[1] && args[1] == "--version" ) {
            information += "whoami (GNU coreutils) 9.1<br>Copyright (C) 2022 Free Software Foundation, Inc.<br>License GPLv3+: GNU GPL version 3 or later (https://gnu.org/licenses/gpl.html).<br>This is free software: you are free to change and redistribute it.<br>There is NO WARRANTY, to the extent permitted by law.<br><br>Written by Richard Mlynarik.";
        } else if ( ! args[1] ) {
            information += "root";
        } else {
            information += "whoami: No such options!"
        }
        return information;
    }
}

/**
 * Print a simple message.
 **/
customCommands.secret = {
    about:  "secret<br>&nbsp;&nbsp;A command that is not listed in the help.",  // Help text for this command.
    hidden: true,                                                               // Whether to hide this command from the help list.
    exe:  function() {                                                          // Executed for this command.
            return "The password is: goldfish";
    }
};

// Use the commands in this file, to extend the built-in commands:
var commands = extendObject(builtInCommands, customCommands);
