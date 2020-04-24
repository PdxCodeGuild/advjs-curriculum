# Using the CLI

CLI stands for 'command-line interface', and it was the only way to use a computer before the development of GUIs 'graphical user interface'. It's still used to perform many computer operations that go 'under the hood'.

Basic competency with the command line will be very helpful for your success in this course (and in industry). You should be comfortable with all of the common commands and CLI programs listed below. Think of that list as a bare-bones, lowest acceptable bar. 

#### Opening the CLI

In OS X, the default CLI is called `Terminal`, which you can find by typing `terminal` in search, or under `Finder -> Applications -> Utilities`.

In Windows, the default CLI is `cmd`, which you can find by typing `cmd` in search, or pressing `Windows+R`, typing `cmd`, and hitting `enter`. This will work for executing python, but there's no color differentiation, and some commands like `ls` and `rm` won't work in `cmd`. A much better CLI is [Cmder](http://cmder.net/). Another option for Windows is [Powershell](https://msdn.microsoft.com/en-us/powershell/scripting/setup/installing-windows-powershell).

In some Linux distributions you can open a terminal with `Ctrl + Alt + T` or `super + T`.

#### Common CLI Commands

- `pwd` displays the path of the current directory
- `ls` lists the contents of the current directory
- `cd <directoryname>` change directory
    - `cd ..` will bring you into the parent directory
    - `cd` alone will return you to your 'home' directory
- `mkdir <foldername>` create a new folder 
- `rmdir <foldername>` removes a folder
- `rm <filename>` removes a file
- `mv filename1 filename2` moves or renames a file
- `cp filename1 filename2` copies a file
- `up-arrow` will bring up the last command entered
- `tab` will attempt to autocomplete whatever you're typing
    - try `cd D` + `tab` + `tab`
- `ctrl+c` kill currently running process
- `chmod` change permissions. Useful for making a bash script "executable", for example
- `cat` Concatenate files. Often used to just output the contents of a file to the screen.
- `less` Display output into a pager. Useful for viewing large output.
- `touch <filename>` creates an empty file.

#### Other CLI programs you should know how to use

- `git` Version control system. You should be comfortable with command-line git, not just a GUI interface to git.
- `grep` Search text for patterns. One of my go-to tools when searching for text on the command line
- `find` Search for files
- `man` "manual page" viewer. Use it to quickly read docs at the command line

#### Other CLI concepts you should know

- **Pipes**. You should know how to pipe unix commands together to create a "pipeline" of data transformations
- **bash**. You should know basic bash syntax and how to create a script file to execute commands
- **Regular Expressions**. You should be comfortable with basic regex, which will be extremely helpful on the command line, especially when using tools like grep or find. More here: [Regular Expressions](./regular-expressions.md)
- **I/O Redirection**. You should know, for example, how to redirect the output of a command to a file.

Ask me about anything if you need more info or if you can't find what you are looking for online!
