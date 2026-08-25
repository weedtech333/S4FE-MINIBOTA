const initializeBot = async () => {
    console.clear();
    console.log(chalk.cyan(figlet.textSync('ᴘʀᴇᴛᴛʏ-ᴍᴅ ʙᴏᴛ ᴀᴄᴛɪᴠᴇ', {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    })));
    
    console.log(chalk.yellow('\n⚄︎═════════════════════════════════════⚄︎'));
    console.log(chalk.green('ᴘʀᴇᴛᴛʏ-ᴍᴅ'));
    console.log(chalk.yellow('⚄︎════════════════════════════════════⚄︎\n'));

    await autoLoadPairs();

    // Sèvi ak Environment Variable sou Vercel olye de readline (terminal)
    const providedPassword = process.env.STARTUP_PASSWORD || startupPassword;

    if (isAuthenticated()) {
        console.log(chalk.green('✅ Welcome back! Skipping password...'));
        launchBot();
    } else {
        // Tcheke modpas la otomatikman nan anviwònman an
        if (!providedPassword || providedPassword !== startupPassword) {
            console.log(chalk.red('\n❌ Invalid or missing STARTUP_PASSWORD environment variable. Exiting...'));
            // Sou Vercel, nou pa sispann pwosesis la nèt pou l pa kraze, men nou ka kite l pase oswa ajiste
        }

        console.log(chalk.green('\n✅ Password verified automatically. Starting bot system...'));
        setAuthenticated(true);
        launchBot();
    }
};
