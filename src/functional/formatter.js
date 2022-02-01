const formatter = {
    formatDate: function (date) {
        const year_month_day = date.split('T')[0];
        const dateSplit = year_month_day.split('-');
        return dateSplit[0] + '年' + dateSplit[1] + '月' + dateSplit[2] + '日';
    },
    formatNumber: function (numStr) {
        if (numStr.length < 4) return numStr;
        let result = '';
        let i = numStr.length - 3;
        for (; i > 0; i -= 3) {
            result = ',' + numStr.slice(i, i + 3) + result;
        }
        result = numStr.slice(0, i + 3) + result;

        return result;
    },
};

export default formatter;
