const CounterValue = function ({roofSelector, initialValue = 0, step = 1,} = {}) {
    
    this.value = initialValue;
    this.step = step;
    this.refs = this.getRefs(roofSelector);
    this.bindEvents();
    this.updateValueUI();
};

CounterValue.prototype.getRefs = function (roofSelector) {

    const refs = {};
    refs.container = document.querySelector(roofSelector);
    refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
    refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
    refs.value = refs.container.querySelector("#value");

    return refs;
};

CounterValue.prototype.bindEvents = function() {

this.refs.incrementBtn.addEventListener('click', () => {
    console.log('CounterValue.prototype.bindEvents -> this', this);
    this.increment();
    this.updateValueUI();
});

this.refs.decrementBtn.addEventListener('click', () => {
    console.log('CounterValue.prototype.bindEvents -> this', this);
    this.decrement();
    this.updateValueUI();
});
};

CounterValue.prototype.updateValueUI = function () {
    this.refs.value.textContent = this.value;
}

CounterValue.prototype.increment = function () {
    this.value += this.step;
};

CounterValue.prototype.decrement = function () {
    this.value -= this.step;
};

new CounterValue({ roofSelector: "#counter", step: 1 });

