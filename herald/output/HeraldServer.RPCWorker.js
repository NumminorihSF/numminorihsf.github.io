Ext.data.JsonP.HeraldServer_RPCWorker({"tagname":"class","name":"HeraldServer.RPCWorker","autodetected":{},"files":[{"filename":"rpc.js","href":"rpc.html#HeraldServer-RPCWorker"}],"alternateClassNames":["RPCWorker"],"owner":"HeraldServer","members":[{"name":"rpcFunction","tagname":"property","owner":"HeraldServer.RPCWorker","id":"property-rpcFunction","meta":{}},{"name":"constructor","tagname":"method","owner":"HeraldServer.RPCWorker","id":"method-constructor","meta":{}},{"name":"addRpcWorker","tagname":"method","owner":"HeraldServer.RPCWorker","id":"method-addRpcWorker","meta":{}},{"name":"do","tagname":"method","owner":"HeraldServer.RPCWorker","id":"method-do","meta":{"protected":true}},{"name":"remoteProcedure","tagname":"method","owner":"HeraldServer.RPCWorker","id":"method-remoteProcedure","meta":{}},{"name":"removeRpcWorker","tagname":"method","owner":"HeraldServer.RPCWorker","id":"method-removeRpcWorker","meta":{}}],"aliases":{},"id":"class-HeraldServer.RPCWorker","short_doc":"Module that managed rpc. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>RPCWorker</div><h4>Files</h4><div class='dependency'><a href='source/rpc.html#HeraldServer-RPCWorker' target='_blank'>rpc.js</a></div></pre><div class='doc-contents'><p>Module that managed rpc.\n     Модуль, управляющий удаленным вызовом процедур.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-rpcFunction' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HeraldServer.RPCWorker'>HeraldServer.RPCWorker</span><br/><a href='source/rpc.html#HeraldServer-RPCWorker-property-rpcFunction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/HeraldServer.RPCWorker-property-rpcFunction' class='name expandable'>rpcFunction</a> : {name: Function}<span class=\"signature\"></span></div><div class='description'><div class='short'>Object for route rpc. ...</div><div class='long'><p>Object for route rpc.\n     Объект для управления rpc.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HeraldServer.RPCWorker'>HeraldServer.RPCWorker</span><br/><a href='source/rpc.html#HeraldServer-RPCWorker-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/HeraldServer.RPCWorker-method-constructor' class='name expandable'>HeraldServer.RPCWorker</a>( <span class='pre'></span> ) : <a href=\"#!/api/HeraldServer.RPCWorker\" rel=\"HeraldServer.RPCWorker\" class=\"docClass\">RPCWorker</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Constructor. ...</div><div class='long'><p>Constructor.\n     Конструктор.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/HeraldServer.RPCWorker\" rel=\"HeraldServer.RPCWorker\" class=\"docClass\">RPCWorker</a></span><div class='sub-desc'><p>RPCWorker object.\n     Объект RPCWorker.</p>\n</div></li></ul></div></div></div><div id='method-addRpcWorker' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HeraldServer.RPCWorker'>HeraldServer.RPCWorker</span><br/><a href='source/rpc.html#HeraldServer-RPCWorker-method-addRpcWorker' target='_blank' class='view-source'>view source</a></div><a href='#!/api/HeraldServer.RPCWorker-method-addRpcWorker' class='name expandable'>addRpcWorker</a>( <span class='pre'>actionName, callback</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Add function to work with rpc calls. ...</div><div class='long'><p>Add function to work with rpc calls.\n     Добавляет функцию для удаленного использования.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>actionName</span> : String<div class='sub-desc'><p>Action name. Название действия.</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>Function to call. <a href=\"#!/api/HeraldServer.RPCWorker-method-remoteProcedure\" rel=\"HeraldServer.RPCWorker-method-remoteProcedure\" class=\"docClass\">Should be like this</a>.\n     Вызываемая функция. <a href=\"#!/api/HeraldServer.RPCWorker-method-remoteProcedure\" rel=\"HeraldServer.RPCWorker-method-remoteProcedure\" class=\"docClass\">Должна соответствовать этому шаблону</a>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if added. false if was function with such name.\nFalse means, that you should remove old rpc function with such actionName.\n     True если добавленно. false если есть функция с таким именем.\n     False означает, что Вам необходимо удалить старую функцию с таким названием действия.</p>\n</div></li></ul></div></div></div><div id='method-do' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HeraldServer.RPCWorker'>HeraldServer.RPCWorker</span><br/><a href='source/rpc.html#HeraldServer-RPCWorker-method-do' target='_blank' class='view-source'>view source</a></div><a href='#!/api/HeraldServer.RPCWorker-method-do' class='name expandable'>do</a>( <span class='pre'>action, body, callback</span> ) : *<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Call rpcWorker with name, arguments and callback. ...</div><div class='long'><p>Call rpcWorker with name, arguments and callback.\n     Вызывает функцию с соответсвующим именем, прокидывая аргументы и callback.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>action</span> : String<div class='sub-desc'><p>Action name. Название действия.</p>\n</div></li><li><span class='pre'>body</span> : Object<div class='sub-desc'><p>Message body. Тело сообщения.</p>\n<ul><li><span class='pre'>args</span> : Object<div class='sub-desc'><p>Arguments object for call function.\n     Объект аргументов для вызова процедуры.</p>\n</div></li></ul></div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-remoteProcedure' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HeraldServer.RPCWorker'>HeraldServer.RPCWorker</span><br/><a href='source/rpc.html#HeraldServer-RPCWorker-method-remoteProcedure' target='_blank' class='view-source'>view source</a></div><a href='#!/api/HeraldServer.RPCWorker-method-remoteProcedure' class='name expandable'>remoteProcedure</a>( <span class='pre'>uid, args, callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Function for remote calling. ...</div><div class='long'><p>Function for remote calling. It is callback for <a href=\"#!/api/HeraldServer.RPCWorker-method-addRpcWorker\" rel=\"HeraldServer.RPCWorker-method-addRpcWorker\" class=\"docClass\">HeraldServer.RPCWorker.addRpcWorker()</a> method.\n     Функция для удаленного вызова. Передается как callback в метод <a href=\"#!/api/HeraldServer.RPCWorker-method-addRpcWorker\" rel=\"HeraldServer.RPCWorker-method-addRpcWorker\" class=\"docClass\">HeraldServer.RPCWorker.addRpcWorker()</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>uid</span> : String<div class='sub-desc'><p>Uid of application that want to call this.\n     Uid приложения, которое пытается вызвать данную функцию.</p>\n</div></li><li><span class='pre'>args</span> : Object<div class='sub-desc'><p>Arguments for call. Аргументы для вызова.</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>Callback function to return result. First arg is Error object or null. Second response data if is.\n     Функция для возврата результатов. Первый аргумент - объект ошибки или null. Второй - результат.</p>\n</div></li></ul></div></div></div><div id='method-removeRpcWorker' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HeraldServer.RPCWorker'>HeraldServer.RPCWorker</span><br/><a href='source/rpc.html#HeraldServer-RPCWorker-method-removeRpcWorker' target='_blank' class='view-source'>view source</a></div><a href='#!/api/HeraldServer.RPCWorker-method-removeRpcWorker' class='name expandable'>removeRpcWorker</a>( <span class='pre'>actionName</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove rpc function. ...</div><div class='long'><p>Remove rpc function. Удаляет функцию из используемых.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>actionName</span> : String<div class='sub-desc'><p>Action name. Название действия.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>true if was such function. Else returns false.\n   true если такая функция была. false, если нет.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});