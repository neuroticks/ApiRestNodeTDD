module.exports={
    test:{
        client:'pg',
        connection:{
            host: 'localhost',
            user:'postgres',
            password:'senha-pgsql',
            database:'barriga',
        },
        migrations:{
            directory:'src/migrations',
        }
    }
}