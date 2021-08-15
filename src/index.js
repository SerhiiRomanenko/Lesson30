'use strict';

const DEFAULT_TIMER = 0;
const DELAY = 2000;

function foo() {
    const div = document.createElement('div');
    div.className = 'alert';
    div.innerHTML = '<strong>Всем привет!</strong> Вы прочитали важное сообщение.';

    document.body.append(div);
}

function debounce(fn, timer = DEFAULT_TIMER) {
    let flag = false;

    return function () {
        return new Promise(function (onResolve) {
            if (flag === true) {
                return;
            } else {
                flag = true;
                setTimeout(() => {
                    onResolve(fn.apply(this, arguments));
                    flag = false;
                }, timer);
            }
        });
    };
}

const btn1 = document.querySelector('.btn1');
btn1.addEventListener('click', debounce(foo, DELAY));

const btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', foo);
