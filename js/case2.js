var oNav = document.getElementById("DR");

//			window.onscroll = function(){
//		
//				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//				
//				console.log(scrollTop);
//				
//				
//				if(scrollTop >= 332){
//					
//					oNav.style.position = "fixed";
//					
//				}else{
//					
//					oNav.style.position = "static";
//					
//				}
//				
//			}
window.onscroll = function(){
			var flag = isPC();
			//如果是PC端,则执行doSomething函数
			if(flag) {
				doSomething();
			}

			function isPC() {
				var userAgentInfo = navigator.userAgent;
				var Agents = ["Android", "iPhone",
					"SymbianOS", "Windows Phone",
					"iPad", "iPod"
				];
				var flag = true;
				for(var v = 0; v < Agents.length; v++) {
					if(userAgentInfo.indexOf(Agents[v]) > 0) {
						flag = false;
						break;
					}
				}
				return flag;
			}

			function doSomething() {
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

				console.log(scrollTop);

				if(scrollTop >= 332) {

					oNav.style.position = "fixed";

				} else {

					oNav.style.position = "static";

				}
			}
			}