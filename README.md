## How to run

- Install OpenSSL
- Run the following command at this directory

```bash
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes
```

---

- Change the index.html at public folder to have what you want there

---

- Have node installed
- Run the following command at this directory

```bash
npm install
npm start
```
