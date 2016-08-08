var a = 0;

var signup = {
    "sbtn": function() {
        var sbtn = {};
        var btn = document.getElementById("signup");
        // var a = 0;
        sbtn.confirmSignUp = function() {
            btn.onclick = function() {
                a++;
                // alert(a);
                (function rt() {
                    if (a == 1) {
                        sbtn.unaccess();
                        var btnin = signin.ibtn();
                        btnin.access();
                    }
                })();
            };
        };
        sbtn.rta = function() {
            return a;
        };
        sbtn.unaccess = function() {
            btn.disabled = "disabled";
        };
        return sbtn;
        // sbtn.makeSound = function() { alert("miaomiao") };
        // return sbtn;
    }
}

var signin = {
    "ibtn": function() {
        var ibtn = document.getElementById("signin");
        ibtn.unaccess = function() {
            ibtn.disabled = "disabled";
        };
        ibtn.access = function() {
            ibtn.removeAttribute("disabled");
        };
        ibtn.shoucore = function() {
            ibtn.onclick = function() {
                var _a = 0;
                var c = document.getElementById("score");
                c.innerHTML = _a += 2;
            }
        }
        return ibtn;
    }
}

var btnup = signup.sbtn();
btnup.confirmSignUp();

var btnin = signin.ibtn();
btnin.unaccess();
btnin.shoucore();