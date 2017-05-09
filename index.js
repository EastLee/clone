Object.prototype.clone = function(isDeep) {
        var Constructor = this.constructor;
        var obj = new Constructor();

        for (var attr in this) {
            if (this.hasOwnProperty(attr)) {
                if (typeof(this[attr]) !== "function") {
                    if (this[attr] == null) {
                        obj[attr] = this[attr];
                    } else {
                        obj[attr] = isDeep ? this[attr].clone() : this[attr];
                    }
                }
            }
        }
        return obj;
    };

    Array.prototype.clone = function() {
        var thisArr = this.valueOf();
        var newArr = [];
        if (thisArr.length && typeof thisArr[0] == 'string' && hasOwnProperty.call(thisArr, 'index')) {
            newArr.index = thisArr.index;
            newArr.input = thisArr.input;
        }
        for (var i = 0; i < thisArr.length; i++) {
            newArr.push(isDeep ? thisArr[i].clone() : thisArr[i]);
        }
        return newArr;
    };

    /* Method of Boolean, Number, String*/
    Boolean.prototype.clone = function() {
        return this.valueOf();
    };
    Number.prototype.clone = function() {
        return this.valueOf();
    };
    String.prototype.clone = function() {
        return this.valueOf();
    };

    /* Method of Date*/
    Date.prototype.clone = function() {
        return new Date(this.valueOf());
    };

    /* Method of RegExp*/
    RegExp.prototype.clone = function() {
        var pattern = this.valueOf();
        var flags = '';
        flags += pattern.global ? 'g' : '';
        flags += pattern.ignoreCase ? 'i' : '';
        flags += pattern.multiline ? 'm' : '';
        return new RegExp(pattern.source, flags);
    };
