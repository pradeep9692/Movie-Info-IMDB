Vue.config.devtools = true;
new Vue({
    el: 'app',
    data: {
        currencies: {},
        amount: 0,
        from: 'EUR',
        to: 'USD'

    },

    mounted() {
        //this.getCurrencies();
        axios.get('https://free.currencyconverterapi.com/api/v6/currencies?apiKey=635c4b9e66ca50588a28')
            .then(response => {
                //console.log(response.data.results);
                this.currencies = response.data.results;
                // localStorage.setItem('currencies', JSON.stringify(response.data.results))
            });

    },
    computed: {
        formattedCurrencies(currencies) {

            return Object.values(this.currencies);
        }
    },
    methods: {

    }

})