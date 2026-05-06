let handler = async (m, { conn }) => {
    let staff = `*⋆｡˚✦『 𝐒𝐓𝐀𝐅𝐅 𝛥𝐗𝐈𝚶𝐍 𝚩𝚯𝐓 』✦˚｡⋆*

*╭───────────────╮*
*│ 🤖 𝐁𝐨𝐭:* ${global.nomebot}
*│ 🆚 𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐞:* ${global.versione}
*╰───────────────╯*

*╭─── 👑 𝐂𝐑𝐄𝐀𝐓𝐎𝐑𝐄 ───╮*
*│ ✦ 𝐍𝐨𝐦𝐞:* Endy
*│ ✦ 𝐑𝐮𝐨𝐥𝐨:* Creatore / Developer
*│ ✦ 𝐂𝐨𝐧𝐭𝐚𝐭𝐭𝐨:* @393501989497
*╰────────────────────╯*

*╭─── 🔱 𝐂𝐎-𝐎𝐖𝐍𝐄𝐑 ───╮*
*│ ✦ Medalis*
*│   ├ 𝐑𝐮𝐨𝐥𝐨:* Co-Owner/ Lead Developer
*│   └ 𝐂𝐨𝐧𝐭𝐚𝐭𝐭𝐨:* @212693877842
*╰────────────────────╯*

*╭─── 🛡️ 𝐒𝐓𝐀𝐅𝐅 ───╮*
*│ ✦ zak*
*│   ├ 𝐑𝐮𝐨𝐥𝐨:* Staffer
*│   └ 𝐂𝐨𝐧𝐭𝐚𝐭𝐭𝐨:* @212612624296
*╰────────────────────╯*

*╭─── 📌 𝐈𝐍𝐅𝐎 𝐔𝐓𝐈𝐋𝐈 ───╮*
*│ ✦ 𝐆𝐢𝐭𝐇𝐮𝐛:* github.com/zeyno-bot-Md
*│ ✦ 𝐒𝐮𝐩𝐩𝐨𝐫𝐭𝐨:* @212614898801
*╰────────────────────╯*

> *𝚭𝚵𝚼𝚴𝚰 𝚩𝚰𝚮*`

    await conn.reply(
        m.chat,
        staff.trim(),
        m,
        {
            contextInfo: {
                mentionedJid: [
                    '393501989497@s.whatsapp.net',
                    '212693877842@s.whatsapp.net',
                    '212612624296@s.whatsapp.net',
                    '212614898801@s.whatsapp.net'
                ]
            }
        }
    )

    await conn.sendMessage(m.chat, {
        contacts: {
            contacts: [
                {
                    vcard: `BEGIN:VCARD
VERSION:5.0
FN:Endy
ORG:𝚭𝚵𝚼𝚴𝚰 𝚩𝚰𝚮 - Creatore / Dev
TEL;type=CELL;type=VOICE;waid=393780306700:393780306700
END:VCARD`
                },
                {
                    vcard: `BEGIN:VCARD
VERSION:5.0
FN: Medalis 
ORG:𝚭𝚵𝚼𝚴𝚰 𝚩𝚰𝚮 - Co-Owner
TEL;type=CELL;type=VOICE;waid=212693877842:+212693877842
END:VCARD`
                },
                {
                    vcard: `BEGIN:VCARD
VERSION:5.0
FN:Zak
ORG:𝚭𝚵𝚼𝚴𝚰 𝚩𝚰𝚮 - Staffer
TEL;type=CELL;type=VOICE;waid=212612624296:+212612624296
END:VCARD`
                }
            ]
        }
    }, { quoted: m })

    m.react('👑')
}

handler.help = ['staff']
handler.tags = ['main']
handler.command = ['staff', 'moderatori', 'collaboratori']

export default handler