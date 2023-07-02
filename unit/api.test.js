require('dotenv').config()
const axios = require('axios');

const { BUG_ID = '0', URL } = process.env;

const urlProducts = `${URL}api/products?bug_id=${BUG_ID}`;
const urlItem = `${URL}api/products/7?bug_id=${BUG_ID}`;
const postUrl = `${URL}api/checkout?bug_id=${BUG_ID}`;


describe('Тестирование api', () => {
    it("Наличие всех полей у продукта", async () => {
        const response = await axios.get(urlProducts);
        expect(response.data[0]).toHaveProperty('name');
    });

    it("Наличие актуальных данных по товару", async () => {
        const response = await axios.get(urlItem);
        expect(response.data.id).toBe(7);
    });
});


describe('Тестирование api', () => {
    it("Отправка тестового запроса на оформление заказа", async () => {
        expect.assertions(1);
        const data = {
            "form": { "name": "Леонид", "phone": "79600447093", "address": "Дом" },
            "cart": {
                "0": {
                    "name": "Practical Chair",
                    "count": 1,
                    "price": 388
                }
            }
        }
    
        try {
            const response = await axios.post(postUrl, data);
            const id = response.data.id;
    
            const orders = await axios.get(`${URL}api/orders/`);
            const ordersInfo = orders.data;
            expect(id).toBe(ordersInfo.length);
        } 
        catch (error) {
            expect(error).toMatch('error');
        }
    });

});



