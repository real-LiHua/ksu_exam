var builtInCommands = {};



builtInCommands.cat = {
    about: "cat [arg]<br>&nbsp;&nbsp;Display the contents of the specified file.",
    exe: function (args) {
        if(args.length != 2){
            return "No such file.";
        }
        var result = term.catFile(args[1]);
        if(result === false){
            return "No such file, or argument is a directory.";
        }
        return result;
    }
}

/**
 * Change into a directory.
 **/
builtInCommands.cd = {
    about: "cd [arg]<br>&nbsp;&nbsp;Change directory to the specified path.",
    exe: function (args) {
        if(args.length != 2){
            return "";
        }
        var result = term.changeDirectory(args[1]);
        if(!result){
            return "No such directory.";
        }
        return "";
    }
}


/**
 * Clears the terminal using a special flag on the resetPrompt function.
 **/
builtInCommands.clear = {
    about: "clear<br>&nbsp;&nbsp;Clear the terminal window.",
    exe: function () {
        return "";    // Functionality is handled internally by watching for this specific command name when resetting the prompt.
    }
};


/**
 * Lists all available commands or the help for a given command.
 **/
builtInCommands.help = {
    about: "help [arg]<br>&nbsp;&nbsp;Show a list of available commands, or help for a specific command.",
    exe: function (args) {
        var output = "";
        if (args.length == 2 && args[1] && args[1].toLowerCase() in commands) {
            output += "<strong>" + args[1].toLowerCase() + "</strong>: " + commands[args[1].toLowerCase()].about + "";
        } else {
            output += "TERM bash, version " + version + "-release (x86_64-pc-linux-gnu)<br>These shell commands are defined internally.  Type 'help' to see this list.<br>Type `help name' to find out more about the function 'name'.<br><br>";
            output += "";

            Object.keys(commands).forEach(function (cName) {
                output += "<strong>" + cName + "</strong>&nbsp;&nbsp;";
            });
        }
        output += "<br><br>";
        return output;
    }
};

/**
 * Lists the recent builtInCommands.
 **/
builtInCommands.history = {
    about: "history [-c]<br>&nbsp;&nbsp;Display the list of recent commands.<br>&nbsp;&nbsp;-c clear the history list.",
    exe: function (args) {
        if (args.length == 2 && args[1] == "-c") {
            localStorage.setItem("history", []);
            term.history = [];

        }
        var history = term.history;
        var output = "";

        history.forEach(function (element, index) {
            output += index + "&nbsp;&nbsp;" + element + "<br>";
        });
        return output;
    }
};

/**
 * Lists the files and directories in the current path.
 **/
builtInCommands.ls = {
    about: "ls [-l]<br>&nbsp;&nbsp;List directory contents.<br>&nbsp;&nbsp;-l list contents vertically.",
    exe: function (args) {
        var listing = "";
        var children = Array.prototype.slice.call(term.filesystemPointer.querySelector('c').children);
        children.forEach(function(element, index){
            listing += "<span class='filesystem-"+element.nodeName+"'>"+element.getAttribute('name')+"</span>";
            if( args[1] && args[1] == "-l"){
                listing += "<br>";
            }else{
                listing += "&nbsp;&nbsp;";
            }
        });

        return listing;
    }
}

/**
 * Get the version, author and repo information for Terminal Faker.
 */
builtInCommands.version = {
    about: "version<br>&nbsp;&nbsp;Display the version and attribution of this terminal application.",
    exe: function () {
        return "Terminal Faker: version " + version + " https://github.com/syntaxseed/terminalfaker by Sherri Wheeler.";
    }
};
