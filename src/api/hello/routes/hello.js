"use strict";

module.exports = {
	routes: [
		{
			method: "GET",          // メソッドの定義。 （GET, POST, PUT, DELETE or PATCH）
			path: "/hello",         // パスの定義。動的パスの場合は、"/hello/:id"のように。
			handler: "hello.world", // 実行される関数。<controllerName>.<actionName>で定義。
		},// こちらの詳細は、次の3.で説明します。
	],
};