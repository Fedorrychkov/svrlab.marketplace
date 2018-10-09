# svr marketplace SERVER
 `npm run run-server:dev` for start development

 ## logs
For colorfull logs i use chalk library, [here](https://github.com/chalk/chalk).
<br>
This use with `Log` class example. Is it here /server/config/color.log.js.
<br>
<code>const log = new Log();<br> log.debug('message text');</code>
<br>
<br>
For logging some information on files use `winston` module, is it here /server/config/winston.js.<br>
This application have next log states, info and err. on `logs` folder we have app.log file for combine logs and error.log file for all errors. 
<br>
Usage: <code>winston.info(`message')</code><br>

 ## Syntax
 For development use ES Next syntax. We have async/await and class syntax.
