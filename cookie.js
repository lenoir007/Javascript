
    class Cookie{
        set(sName, sValue = "", expire = null,path = "",domaine = "") {
            if(expire > 0 || expire == null){
                var today = new Date(), expires = new Date(),todT = today.getTime();
                domaine = domaine.trim();
                if(expire == null){expire = todT+(365*24*60*60*1000);}

                expires.setTime(expire);
                document.cookie = sName + "=" + encodeURIComponent(sValue) + ";expires=" + expires.toGMTString()+(path!=""?";path="+path:"")+(domaine!=""?";domain="+domaine:"");   
            }
        }
        get(sName) {
            var cookContent = document.cookie.split(";");
            for (var i=0; i<cookContent.length; i++) {
                var cCookie = cookContent[i].split("=");
                if(cCookie.length == 2 && cCookie[0].trim() == sName){
                    return decodeURIComponent(cCookie[1]);
                }
            }      
            return null;
        }
        delete(sName){
            var exs = this.get(sName);
            if(exs != null){this.set(sName,"",((new Date()).getTime()-(60*60*24*360*1000)));}
            return true;
        }
    }
