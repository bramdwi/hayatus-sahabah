// =============================================================================
// Hayatus Sahabah — data file
// -----------------------------------------------------------------------
// HOW TO ADD A NEW CHAPTER (kisah) to an existing jilid:
//   Find the right volume below (by "id"), then add an object to its
//   "chapters" array in this exact shape:
//
//     { "id": <next number>, "title": "Judul Kisah", "paragraphs": ["Paragraf satu.", "Paragraf dua.", ...] }
//
//   - "id" must be unique WITHIN that volume and should continue the
//     existing numbering (e.g. if the last chapter is id 29, the next is 30).
//   - "paragraphs" is a plain list of strings, one string per paragraph.
//     No HTML needed — just plain text with normal punctuation.
//
// HOW TO ACTIVATE A NEW JILID (e.g. Jilid 3):
//   1. Add your chapters to its "chapters" array (as above, starting id at 1).
//   2. Change "available": false to "available": true.
//   That's it — the app automatically shows the tab, table of contents,
//   chapter counter, and navigation for any volume marked available.
//
// Everything else in the app (index.html, app.js, styles.css, sw.js,
// manifest.json) reads from this file automatically — no other file needs
// to change when you only add or edit chapters/volumes here.
// =============================================================================
const HAYATUS_DATA = {
 "title": "Hayatus Sahabah",
 "subtitle": "Kehidupan Para Sahabat Radhiyallahu 'Anhum",
 "volumes": [
  {
   "id": 1,
   "label": "Jilid 1",
   "theme": "Dakwah Rasulullah ◆ Menuju Cahaya Islam",
   "available": true,
   "chapters": [
    {
     "id": 1,
     "title": "Rasulullah ﷺ Menawarkan Dakwah kepada Kaumnya saat Abu Thalib Sakit",
     "paragraphs": [
      "Ibnu Jarir mengeluarkan riwayat dari Ibnu Abbas radhiyallahu 'anhuma, ia menceritakan bahwa ketika Abu Thalib jatuh sakit, sekelompok orang dari pemuka kaum Quraisy datang menjenguknya, dan di antara mereka yang hadir terdapat Abu Jahl.",
      "Orang-orang Quraisy itu berkata kepada Abu Thalib, \"Sesungguhnya keponakanmu telah mencaci maki tuhan-tuhan kami, dia melakukan ini dan itu, serta mengatakan ini dan itu. Seandainya engkau mengirim utusan kepadanya untuk melarangnya, tentu itu lebih baik.\" Maka Abu Thalib mengirim utusan untuk memanggil beliau.",
      "Ketika Nabi Muhammad ﷺ datang dan memasuki rumah, di antara orang-orang Quraisy dan Abu Thalib terdapat celah tempat duduk yang hanya seukuran tempat duduk satu orang pria. Abu Jahl merasa khawatir jika Nabi Muhammad ﷺ duduk di samping Abu Thalib, maka pamannya itu akan menjadi lebih bersikap lunak dan mengasihi beliau.",
      "Oleh karena itu, Abu Jahl segera bangkit dan menduduki celah tempat duduk tersebut. Karena tidak menemukan tempat duduk yang dekat dengan pamannya, Rasulullah ﷺ akhirnya memilih untuk duduk di dekat pintu. Abu Thalib kemudian berkata kepada beliau, \"Wahai keponakanku, mengapa kaummu mengadukanmu?",
      "Mereka mengklaim bahwa engkau telah mencaci maki tuhan-tuhan mereka serta mengatakan ini dan itu.\" Orang-orang Quraisy yang hadir di sana pun terus memperbanyak perkataan dan tuduhan mereka kepada beliau. Setelah itu, Rasulullah ﷺ berbicara dan bersabda, \"Wahai pamanku, sesungguhnya aku hanya menginginkan mereka mengucapkan satu kalimat saja.",
      "Jika mereka mau mengucapkannya, bangsa Arab akan tunduk kepada mereka, dan bangsa non-Arab akan membayar upeti kepada mereka.\" Mendengar ucapan dan tawaran tersebut, orang-orang Quraisy terkejut dan terperanjat. Kaum tersebut berkata, \"Satu kalimat saja? Ya, demi ayahmu, bahkan sepuluh kalimat pun akan kami ucapkan!",
      "Kalimat apakah itu?\" Abu Thalib pun ikut bertanya, \"Kalimat apakah itu, wahai keponakanku?\" Nabi Muhammad ﷺ menjawab, \"Lailaha illallah.\" Mendengar kalimat tersebut, mereka langsung berdiri dengan penuh rasa terkejut sambil mengibaskan pakaian mereka, seraya berkata, \"Apakah dia ingin menjadikan tuhan-tuhan yang banyak ini menjadi Tuhan Yang Maha Esa?",
      "Sesungguhnya ini benar-benar suatu hal yang sangat mengherankan.\" Ibnu Abbas radhiyallahu 'anhuma mengatakan bahwa setelah peristiwa di tempat tersebut, turunlah ayat Al-Qur'an dari awal surah hingga firman-Nya yang berbunyi: \"Tetapi mereka belum merasakan azab-Ku.\" Peristiwa ini diriwayatkan seperti itu oleh Imam Ahmad, An-Nasa'i, Ibnu Abi Hatim, dan Ibnu Jarir, yang semuanya mencantumkannya di dalam kitab-kitab tafsir mereka.",
      "Imam At-Tirmidzi juga meriwayatkannya dan menyatakan bahwa hadits ini berstatus hasan, sebagaimana disebutkan dalam Tafsir Ibnu Katsir.",
      "Selain itu, Al-Baihaqi dan Al-Hakim juga mengeluarkan riwayat yang semakna, di mana Al-Hakim menyatakan bahwa hadits ini memiliki sanad yang shahih meskipun tidak dikeluarkan oleh Al-Bukhari dan Muslim, dan pendapat kesahihan ini disetujui oleh Adz-Dzahabi."
     ]
    },
    {
     "id": 2,
     "title": "Menawarkan Kalimat Syahadat kepada Abu Thalib saat Wafat",
     "paragraphs": [
      "Ibnu Ishaq meriwayatkan dari Ibnu Abbas radhiyallahu 'anhuma—sebagaimana tercantum dalam Al-Bidayah—ia menceritakan bahwa ketika orang-orang dari kalangan terhormat kaum Quraisy berjalan menemui Abu Thalib dan berbicara kepadanya, para pemuka yang hadir di antaranya adalah Utbah bin Rabi'ah, Syaibah bin Rabi'ah, Abu Jahl bin Hisyam, Umayyah bin Khalaf, Abu Sufyan bin Harb, serta beberapa pria lainnya dari pemuka mereka.",
      "Mereka berkata, \"Wahai Abu Thalib, sesungguhnya engkau berada di kalangan kami sebagaimana yang telah engkau ketahui, dan kini telah datang kepadamu kondisi sakit yang engkau lihat sendiri, sehingga kami mengkhawatirkan keselamatanmu. Engkau juga telah mengetahui apa yang terjadi di antara kami dan keponakanmu.",
      "Maka panggillah dia, ambillah perjanjian darinya untuk kami dan bersaksilah untuknya dari kami agar dia menahan diri dari kami dan kami pun menahan diri darinya, serta biarkanlah dia bersama agamanya dan biarkanlah kami bersama agama kami.\" Maka Abu Thalib mengirim utusan untuk memanggil beliau, dan setelah Nabi Muhammad ﷺ datang, Abu Thalib berkata, \"Wahai keponakanku, mereka adalah para pemuka kaummu yang telah berkumpul demi engkau agar mereka memberi sesuatu kepadamu dan mereka pun mengambil sesuatu darimu.\" Ibnu Abbas menceritakan bahwa Rasulullah ﷺ kemudian bersabda, \"Satu kalimat saja yang kalian berikan, niscaya dengannya kalian akan menguasai bangsa Arab dan bangsa non-Arab akan tunduk kepada kalian.\" Mendengar hal itu, Abu Jahl berkata, \"Ya, demi ayahmu, bahkan sepuluh kalimat pun akan kami berikan!\" Beliau bersabda, \"Kalian mengucapkan Lailaha illallah, dan kalian menanggalkan apa yang kalian sembah selain-Nya.\" Mendengar hal tersebut, mereka bertepuk tangan lalu berkata, \"Wahai Muhammad, apakah engkau ingin menjadikan tuhan-tuhan yang banyak ini menjadi Tuhan Yang Maha Esa?",
      "Sesungguhnya urusanmu ini benar-benar aneh!\" Kemudian sebagian dari mereka berkata kepada sebagian yang lain, \"Demi Allah, sesungguhnya pria ini tidak akan memberikan sedikit pun dari apa yang kalian inginkan. Maka pergilah dan berjalanlah di atas agama nenek moyang kalian sampai Allah memutuskan perkara di antara kalian dan dia.\" Setelah itu mereka pun membubarkan diri.",
      "Ibnu Abbas melanjutkan kisahnya, Abu Thalib lalu berkata, \"Demi Allah, wahai keponakanku, aku tidak melihat engkau meminta sesuatu yang berlebihan dari mereka.\" Perkataan itu membuat Rasulullah ﷺ menaruh harapan pada pamannya, sehingga beliau terus-menerus berkata kepadanya, \"Wahai paman, engkau ucapkanlah kalimat itu, agar aku dapat menghalalkan syafaat untukmu dengannya pada hari kiamat kelak.\" Ketika Abu Thalib melihat betapa besarnya keinginan Rasulullah ﷺ, ia berkata, \"Wahai keponakanku, demi Allah, seandainya bukan karena rasa takut akan adanya kemudaratan yang mencoreng namamu dan mencoreng keturunan ayahmu setelah aku tiada, serta adanya kekhawatiran kaum Quraisy akan mengira bahwa aku mengucapkannya semata-mata karena merasa takut akan kematian, niscaya aku akan mengucapkannya.",
      "Tidaklah aku mengucapkannya melainkan hanya untuk membuat hatimu menjadi gembira.\" Di dalam riwayat ini disebutkan adanya seorang perawi yang tidak berstatus jelas (mubham) yang tidak diketahui kondisinya.",
      "Sementara itu, di dalam kitab Shahih Al-Bukhari diriwayatkan dari Ibnu al-Musayyab, dari ayahnya, bahwa ketika Abu Thalib menjelang wafatnya, Nabi Muhammad ﷺ masuk menemuinya. Pada saat itu, di sisi Abu Thalib terdapat Abu Jahl.",
      "Beliau bersabda, \"Wahai paman, ucapkanlah Lailaha illallah, sebuah kalimat yang akan aku jadikan sebagai hujah untukmu di hadapan Allah.\" Mendengar sabda tersebut, Abu Jahl dan Abdullah bin Abi Umayyah berkata, \"Wahai Abu Thalib, apakah engkau membenci agama Abdul Muthalib?\" Keduanya terus-menerus berbicara kepadanya hingga perkataan terakhir yang diucapkan Abu Thalib kepada mereka adalah bahwa ia tetap berada di atas agama Abdul Muthalib, dan ia enggan untuk mengucapkan Lailaha illallah.",
      "Maka Nabi Muhammad ﷺ bersabda, \"Sungguh aku akan memohonkan ampunan untukmu selama aku tidak dilarang.\" Maka setelah peristiwa tersebut, turunlah firman Allah SWT: \"Tidak pantas bagi Nabi dan orang-orang yang beriman memohonkan ampunan kepada Allah bagi orang-orang musyrik, sekalipun orang-orang musyrik itu adalah kaum kerabat (mereka), sesudah jelas bagi mereka, bahwasanya orang-orang musyrik itu adalah penghuni neraka jahanam.\" Dan turun pula firman-Nya: \"Sesungguhnya kamu tidak akan dapat memberi petunjuk kepada orang yang kamu kasihi, tetapi Allah memberi petunjuk kepada orang yang dikehendaki-Nya.\" Riwayat ini juga dikeluarkan oleh Imam Muslim.",
      "Al-Bukhari dan Muslim pun mengeluarkannya dari jalur lain yang semakna, di mana dalam riwayat tersebut dikatakan bahwa Rasulullah ﷺ terus-menerus menawarkan kalimat itu kepadanya dan kedua orang musyrik tersebut juga kembali mengulangi perkataan mereka.",
      "Demikian pula yang diriwayatkan oleh Imam Ahmad, Imam Muslim, Imam an-Nasa'i, dan Imam at-Tirmidzi, dari Abu Hurairah radhiyallahu 'anhu, ia berkata bahwa ketika Abu Thalib menjelang wafatnya, Rasulullah ﷺ mendatanginya lalu bersabda, \"Wahai pamanku!",
      "Ucapkanlah Lailaha illallah, aku akan bersaksi untukmu dengannya pada hari kiamat kelak.\" Abu Thalib menjawab, \"Seandainya bukan karena kaum Quraisy akan mencelaku dengan mengatakan bahwa tidak ada yang mendorongnya melakukan itu melainkan karena rasa takut akan kematian, niscaya aku akan membuat matamu menjadi tenang dengan kalimat tersebut, dan tidaklah aku mengucapkannya melainkan hanya untuk menenangkan matamu.\" Maka Allah 'Azza wa Jalla menurunkan ayat: \"Sesungguhnya kamu tidak akan dapat memberi petunjuk kepada orang yang kamu kasihi, tetapi Allah memberi petunjuk kepada orang yang dikehendaki-Nya dan Allah lebih mengetahui orang-orang yang mau menerima petunjuk.\" Keterangan ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 3,
     "title": "Penolakan Nabi Muhammad ﷺ untuk Meninggalkan Dakwah",
     "paragraphs": [
      "Ibnu Asakir, At-Thabrani, dan Al-Bukhari dalam kitab Tarikh-nya meriwayatkan dari Aqil bin Abi Thalib radhiyallahu 'anhu, ia menceritakan bahwa kaum Quraisy pernah mendatangi Abu Thalib. Kisah ini akan dipaparkan secara lengkap pada bab tentang ketabahan para sahabat dalam menghadapi siksaan.",
      "Di dalam riwayat tersebut, Abu Thalib berkata kepada beliau, \"Wahai keponakanku, demi Allah, sepengetahuanku engkau adalah orang yang selalu menaatiku. Namun kini kaummu datang dan mengklaim bahwa engkau mendatangi mereka di Ka'bah dan di tempat-tempat perkumpulan mereka untuk memperdengarkan sesuatu yang menyakiti mereka.",
      "Jika engkau berkenan, menahan dirilah dari mereka.\" Mendengar hal itu, Rasulullah ﷺ melayangkan pandangan beliau ke arah langit lalu bersabda: \"Demi Allah, tidaklah aku lebih mampu untuk meninggalkan apa yang aku diutus dengannya, daripada kemampuan salah seorang dari kalian untuk menyalakan suluh api dari matahari ini.\" Sementara itu, Al-Baihaqi meriwayatkan bahwa Abu Thalib berkata kepada beliau, \"Wahai keponakanku, sesungguhnya kaummu telah mendatangi aku dan mengatakan begini dan begitu.",
      "Maka pertahankanlah kelangsungan hidupku dan hidupmu, dan janganlah engkau membebankan kepadaku perkara yang tidak mampu aku pikul, begitu pula engkau.",
      "Tahanlah dirimu dari kaummu terhadap apa yang mereka benci dari perkataanmu.\" Mendengar perkataan pamannya, Rasulullah ﷺ mengira bahwa telah terjadi perubahan sikap (bada') pada pamannya, dan ia akan membiarkan serta menyerahkan beliau kepada musuh, serta merasa lemah untuk terus berdiri membela beliau.",
      "Maka Rasulullah ﷺ bersabda: \"Wahai paman, seandainya mereka meletakkan matahari di tangan kananku dan bulan di tangan kiriku agar aku meninggalkan urusan ini, niscaya aku tidak akan meninggalkannya hingga Allah memenangkannya atau aku binasa dalam mencapainya.\" Setelah mengucapkan kalimat tersebut, air mata Rasulullah ﷺ berlinang lalu beliau menangis.",
      "Kisah selanjutnya dari peristiwa ini juga akan dipaparkan pada bab berikutnya."
     ]
    },
    {
     "id": 4,
     "title": "Dialog Utbah bin Rabi'ah dan Rasulullah ﷺ",
     "paragraphs": [
      "Abdul bin Humaid dalam kitab Musnad-nya meriwayatkan dari Ibnu Abi Syaibah dengan sanadnya yang sampai kepada Jabir bin Abdullah radhiyallahu 'anhuma, ia menceritakan: Suatu hari kaum Quraisy berkumpul dan saling berkata, \"Carilah orang yang paling mengetahui di antara kalian tentang sihir, perdukunan, dan syair, lalu biarkan ia mendatangi pria ini (Nabi Muhammad ﷺ ) yang telah memecah belah persatuan kita, mengacaukan urusan kita, dan mencela agama kita.",
      "Biarkan ia berbicara kepadanya dan melihat apa jawaban yang akan diberikannya.\" Kaum tersebut menjawab, \"Kami tidak mengetahui ada orang yang lebih tepat selain Utbah bin Rabi'ah.\" Mereka pun berkata, \"Datangilah dia, wahai Abu al-Walid!\" Maka Utbah mendatangi Rasulullah ﷺ lalu berkata, \"Wahai Muhammad, apakah engkau lebih baik, ataukah Abdullah (ayahmu)?\" Rasulullah ﷺ hanya terdiam.",
      "Utbah bertanya lagi, \"Apakah engkau lebih baik, ataukah Abdul Muthalib (kakekmu)?\" Rasulullah ﷺ kembali terdiam. Utbah melanjutkan perkataannya, \"Jika engkau mengklaim bahwa mereka itu lebih baik darimu, sesungguhnya mereka telah menyembah tuhan-tuhan yang engkau cela saat ini.",
      "Namun, jika engkau mengklaim bahwa engkau lebih baik dari mereka, berbicaralah agar kami dapat mendengar perkataanmu! Demi Allah, kami belum pernah melihat ada anak keturunan yang membawa kesialan bagi kaumnya melebihi dirimu. Engkau telah memecah belah persatuan kami, mencerai-beraikan urusan kami, mencela agama kami, dan membuat kami menanggung malu di hadapan bangsa Arab.",
      "Bahkan kini telah tersiar kabar di kalangan mereka bahwa di dalam tubuh kaum Quraisy terdapat seorang penyihir dan tukang dukun.",
      "Demi Allah, tidak ada lagi yang kami tunggu melainkan petaka besar seperti jeritan wanita hamil yang akan membuat sebagian dari kami bangkit menyerang sebagian yang lain dengan pedang hingga kami saling membinasakan!\" Utbah kemudian menawarkan dunia, \"Wahai pria, jika yang engkau inginkan dari urusan ini adalah harta, kami akan mengumpulkan harta untukmu hingga engkau menjadi orang Quraisy yang paling kaya.",
      "Jika yang engkau inginkan adalah pernikahan, pilihlah wanita Quraisy mana saja yang engkau kehendaki, maka kami akan menikahkanmu dengan sepuluh wanita sekaligus.\" Setelah Utbah selesai meluapkan perkataannya, Rasulullah ﷺ bertanya, \"Apakah engkau sudah selesai?\" Utbah menjawab, \"Ya.\" Nabi Muhammad ﷺ kemudian membaca firman Allah SWT: \"Bismillahirrahmanirrahim. Haa Miim.",
      "Diturunkan dari Tuhan Yang Maha Pengasih lagi Maha Penyayang. Kitab yang dijelaskan ayat-ayatnya, ialah Al-Qur'an dalam bahasa Arab, untuk kaum yang mengetahui...\" (QS. Fussilat: 1-3).",
      "Beliau terus membacanya hingga mencapai ayat: \"...Jika mereka berpaling maka katakanlah, 'Aku telah memperingatkan kalian dengan petaka petir seperti petir yang menimpa kaum 'Ad dan Tsamud'.\" (QS. Fussilat: 13). Seketika itu juga Utbah tersentak dan berkata, \"Cukup!",
      "Apakah engkau tidak memiliki perkataan lain selain ini?\" Beliau menjawab, \"Tidak.\" Utbah pun kembali kepada kaum Quraisy.",
      "Mereka bertanya, \"Apa yang engkau bawa di belakangmu?\" Utbah menjawab, \"Tidak ada satu pun perkataan yang sekiranya akan kalian bicarakan kepadanya, melainkan telah aku sampaikan semuanya.\" Mereka bertanya, \"Lalu apakah dia menjawabmu?\" Utbah berkata, \"Ya.\" Kemudian ia melanjutkan, \"Tidak, demi Tuhan yang mendirikan bangunan Ka'bah ini, aku sama sekali tidak memahami apa pun dari apa yang diucapkannya, kecuali bahwa dia memperingatkan kalian dengan petaka petir seperti petir yang menimpa kaum 'Ad dan Tsamud!\" Orang-orang Quraisy itu berseru, \"Celaka engkau!",
      "Pria itu berbicara kepadamu dalam bahasa Arab, lalu bagaimana bisa engkau tidak mengerti apa yang dikatakannya?\" Utbah menjawab, \"Demi Allah, aku benar-benar tidak memahami apa pun dari perkataannya selain penyebutan tentang petaka petir tersebut.\""
     ]
    },
    {
     "id": 5,
     "title": "Tanggapan Utbah bin Rabi'ah Setelah Mendengar Al-Qur'an",
     "paragraphs": [
      "Al-Baihaqi dan perawi lainnya juga meriwayatkan kisah ini dari Al-Hakim, dengan menambahkan bahwa Utbah juga menawarkan kekuasaan dengan berkata, \"Jika yang engkau inginkan adalah kepemimpinan, kami akan menyerahkan panji-panji kami kepadamu sehingga engkau menjadi pemimpin kami selama engkau hidup.\" Di dalam riwayat tersebut disebutkan bahwa ketika Rasulullah ﷺ membaca ayat, \"Jika mereka berpaling maka katakanlah, 'Aku telah memperingatkan kalian dengan petaka petir seperti petir yang menimpa kaum 'Ad dan Tsamud'\", Utbah langsung menutup mulut beliau dengan tangannya.",
      "Ia memohon dengan sangat demi hubungan kekerabatan agar beliau menahan diri dan tidak melanjutkan bacaannya. setelah itu, Utbah pulang ke rumahnya dan tidak mau keluar menemui kaumnya sehingga ia tertahan di sana.",
      "Melihat hal itu, Abu Jahl berkata, \"Demi Allah, wahai sekalian kaum Quraisy, kami tidak melihat Utbah melainkan ia telah berpaling mengikuti agama Muhammad (shaba') dan ia telah takjub dengan makanannya. Hal itu tidak lain terjadi karena adanya suatu kebutuhan (kelaparan) yang menimpanya. Mari kita datangi dia!\" Maka mereka mendatangi Utbah.",
      "Abu Jahl lalu berkata, \"Demi Allah, wahai Utbah, tidaklah kami mendatangi tempatmu ini melainkan karena engkau telah berpaling mengikuti Muhammad dan engkau menyukai urusannya.",
      "Jika engkau memang memiliki suatu kebutuhan (kesulitan harta), kami akan mengumpulkan sebagian dari harta-harta kami untukmu sehingga dapat mencukupimu dari makanan Muhammad.\" Mendengar tuduhan itu, Utbah menjadi marah dan bersumpah demi Allah bahwa ia tidak akan pernah berbicara kepada Muhammad lagi untuk selama-lamanya.",
      "Utbah berkata, \"Kalian semua telah mengetahui bahwa aku adalah salah satu orang Quraisy yang paling banyak hartanya. Namun, ketika aku mendatanginya...\" Utbah pun menceritakan kisah yang dialaminya kepada mereka. Utbah berkata, \"Dia menjawabku dengan suatu perkataan yang demi Allah, demi Allah, itu bukanlah sihir, bukan syair, dan bukan pula perdukunan!",
      "Dia membaca, 'Bismillahirrahmanirrahim. Haa Miim. Diturunkan dari Tuhan Yang Maha Pengasih lagi Maha Penyayang...' sampai dia mencapai ayat, 'Jika mereka berpaling maka katakanlah, \"Aku telah memperingatkan kalian dengan petaka petir seperti petir yang menimpa kaum 'Ad dan Tsamud\"'.",
      "Maka aku langsung menutup mulutnya dengan tanganku dan aku memohon kepadanya demi hubungan kekerabatan agar dia menahan diri. Bukankah kalian telah mengetahui bahwa Muhammad jika mengatakan sesuatu dia tidak pernah berdusta?! Karena itulah, aku merasa takut kalau-kalau azab akan turun menimpa kalian.\" Keterangan ini tercantum di dalam kitab Al-Bidayah.",
      "Abu Ya'la juga mengeluarkan riwayat dari Jabir bin Abdullah raḍiyallahu 'anhu yang semisal dengan hadits Abdul bin Humaid. Abu Nu'aim pun mengeluarkannya di dalam kitab Al-Dala'il dengan redaksi yang serupa.",
      "Al-Haitsami memberikan catatan bahwa di dalam sanadnya terdapat perawi bernama Al-Ablah al-Kindi yang telah ditsiqahkan oleh Ibnu Ma'in dan perawi lainnya, namun didhaifkan oleh An-Nasa'i serta perawi lainnya, sedangkan sisa perawi yang lain berstatus tsiqah.",
      "Sementara itu, Abu Nu'aim dalam kitab Dala'il al-Nubuwwah meriwayatkan dari Ibnu Umar raḍiyallahu 'anhuma bahwa kaum Quraisy pernah berkumpul untuk membicarakan Rasulullah ﷺ ketika beliau sedang duduk di dalam masjid.",
      "Utbah bin Rabi'ah berkata kepada mereka, \"Biarkanlah aku bangkit menemuinya agar aku bisa berbicara kepadanya, karena barangkali aku bisa bersikap lebih lunak kepadanya daripada kalian.\" Maka Utbah bangkit lalu duduk di dekat beliau dan berkata, \"Wahai keponakanku, aku melihat engkau adalah orang yang paling terpandang di antara rumah-rumah kami dan memiliki kedudukan yang paling utama di tengah-tengah kami.",
      "Namun engkau telah membawa urusan kepada kaummu yang belum pernah dibawa oleh seorang pria pun kepada kaumnya! Jika engkau menginginkan harta dari urusan ini, maka itu menjadi kewajiban kaummu untuk mengumpulkannya untukmu hingga engkau menjadi orang yang paling kaya di antara kami.\""
     ]
    },
    {
     "id": 6,
     "title": "Utbah Menawarkan Kemuliaan, Pengobatan, dan Kerajaan",
     "paragraphs": [
      "Utbah melanjutkan tawarannya, \"Jika engkau mencari kemuliaan, kami akan memuliakanmu sehingga tidak ada seorang pun dari kaummu yang lebih mulia darimu, dan kami tidak akan memutuskan suatu perkara tanpa persetujuanmu.",
      "Jika urusan ini datang karena adanya gangguan jin (malam) yang menimpamu dan engkau tidak mampu mengusirnya dari dirimu, kami rela menyerahkan perbendaharaan harta kami untuk mencari pengobatan medik demi kesembuhanmu dari gangguan tersebut.",
      "Dan jika engkau menginginkan kerajaan, kami akan mengangkatmu menjadi raja kami.\" Rasulullah ﷺ lalu bertanya, \"Apakah engkau sudah selesai, wahai Abu al-Walid?\" Utbah menjawab, \"Ya.\" Ibnu Umar menceritakan bahwa Rasulullah ﷺ kemudian membacakan surah Haa Miim As-Sajdah kepadanya.",
      "Ketika sampai pada ayat sajadah, Rasulullah ﷺ pun bersujud, sementara Utbah menyandarkan kedua tangannya di belakang punggungnya hingga beliau selesai membaca seluruh surah tersebut. Setelah itu, Utbah bangkit berdiri dalam kondisi kebingungan dan tidak tahu harus berkata apa untuk menjawab kaumnya di tempat perkumpulan mereka.",
      "Ketika kaum Quraisy melihat Utbah berjalan kembali, mereka saling berkata, \"Sungguh dia telah kembali kepada kalian dengan wajah yang berbeda dari saat dia berangkat dari sisi kalian.\" Utbah kemudian duduk bersama mereka dan berkata, \"Wahai sekalian kaum Quraisy, sesungguhnya aku telah berbicara kepadanya dengan perkara-perkara yang kalian perintahkan kepadaku.",
      "Namun setelah aku selesai, dia berbicara kepadaku dengan suatu perkataan yang demi Allah, kedua telingaku belum pernah mendengar perkataan yang semisal dengannya sama sekali, dan aku tidak tahu apa yang harus aku katakan kepadanya! Wahai sekalian kaum Quraisy, taatilah aku hari ini dan durhakailah aku pada hari-hari setelahnya.",
      "Biarkanlah pria itu dan menjauhlah darinya, karena demi Allah, dia tidak akan pernah meninggalkan urusan yang sedang dijalankannya. Biarkanlah urusannya itu menjadi urusan antara dia dengan seluruh bangsa Arab. Jika dia berhasil menang atas mereka, maka kemuliaannya adalah kemuliaan kalian dan kejayaannya adalah kejayaan kalian.",
      "Namun jika mereka yang berhasil mengalahkannya, maka kalian telah dicukupkan dari urusannya oleh orang lain.\" Mendengar penuturan itu, kaum Quraisy berseru, \"Engkau telah berpaling mengikuti agamanya (shaba'ta), wahai Abu al-Walid!\" Kisah ini disebutkan secara panjang lebar oleh Ibnu Ishaq sebagaimana tercantum di dalam kitab Al-Bidayah.",
      "Al-Baihaqi juga mengeluarkan riwayat singkat dari hadits Ibnu Umar ini. Mengenai jalur ini, Ibnu Katsir memberikan catatan di dalam kitab Al-Bidayah bahwa hadits ini berstatus sangat asing (gharib jiddan)."
     ]
    },
    {
     "id": 7,
     "title": "Keteguhan Rasulullah ﷺ untuk Terus Berjihad dan Berdakwah",
     "paragraphs": [
      "Al-Bukhari meriwayatkan dari Al-Miswar bin Makhramah dan Marwan, keduanya menceritakan bahwa Rasulullah ﷺ keluar pada masa Perjanjian Hudaibiyah. Kisah ini akan dipaparkan secara lengkap pada bab tentang akhlak yang membawa hidayah bagi manusia.",
      "Di dalam riwayat tersebut disebutkan bahwa ketika mereka sedang dalam kondisi demikian, tiba-tiba datanglah Budail bin Warqa al-Khuza'i bersama rombongan pria dari kaumnya, yaitu suku Khuza'ah. Mereka merupakan orang-orang yang menjadi tempat kepercayaan dan penasihat ('aibatu nush'in) Rasulullah ﷺ dari penduduk Tihamah.",
      "Budail berkata, \"Sesungguhnya aku meninggalkan Ka'ab bin Lu'ay dan Amir bin Lu'ay, mereka telah turun dan menetap di sumber-suku air Hudaibiyah.",
      "Mereka membawa serta unta-unta yang baru melahirkan beserta anaknya (al-'uud al-matsafil), dan mereka akan memerangimu serta menghalangimu dari Baitullah.\" Mendengar hal itu, Rasulullah ﷺ bersabda: \"Sesungguhnya kita tidak datang untuk memerangi siapa pun, melainkan kita datang untuk melaksanakan umrah.",
      "Jika peperangan telah melemahkan kaum Quraisy dan mendatangkan kemudaratan bagi mereka, maka jika mereka mau, aku akan memberikan tenggang waktu (gencatan senjata) kepada mereka dan mereka membiarkan urusanku dengan umat manusia. Jika aku menang, lalu jika mereka mau masuk ke dalam apa yang dimasuki oleh manusia, mereka dapat melakukannya.",
      "Namun jika tidak, mereka telah mendapatkan waktu untuk beristirahat (jammuu).",
      "Dan jika mereka tetap enggan, maka demi Dzat yang jiwaku berada di tangan-Nya, sungguh aku benar-benar akan memerangi mereka demi urusanku ini hingga urat leherku terputus (tanfarida salifati), dan sungguh urusan Allah benar-benar akan terlaksana.\" Sementara itu, At-Thabrani meriwayatkan dari Al-Miswar dan Marwan secara marfu', bahwa beliau bersabda: \"Aduhai, celakalah kaum Quraisy!",
      "Mereka telah dimakan oleh peperangan. Apa ruginya bagi mereka seandainya mereka membiarkan urusanku dengan seluruh bangsa Arab? Jika bangsa Arab berhasil membinasakanku, maka itulah yang mereka inginkan. Namun jika Allah memenangkanku atas mereka, mereka dapat masuk ke dalam Islam dalam kondisi utuh.",
      "Dan jika mereka tidak mau menerimanya, mereka dapat berperang dalam kondisi memiliki kekuatan. Maka apa yang dikira oleh kaum Quraisy?!",
      "Demi Allah, aku akan terus-menerus berjihad melawan mereka demi urusan yang Allah telah mengutusku dengannya, hingga Allah memenangkannya atau urat leher ini terputus.\" Demikian pula yang disebutkan oleh Ibnu Ishaq dari jalur Az-Zuhri, di mana di dalam haditsnya terdapat redaksi, \"Maka apa yang dikira oleh kaum Quraisy?!",
      "Demi Allah, aku akan terus berjihad demi urusan yang Allah telah mengutusku dengannya ini, hingga Allah memenangkannya atau urat leher ini terputus.\" Keterangan ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 8,
     "title": "Perintah Rasulullah ﷺ kepada Ali untuk Berdakwah di Perang Khaibar",
     "paragraphs": [
      "Al-Bukhari meriwayatkan dari Sahl bin Sa'ad raḍiyallāhu 'anhu bahwa Rasulullah ﷺ bersabda pada waktu Perang Khaibar: \"Sungguh, besok aku akan menyerahkan panji ini kepada seorang pria yang melalui kedua tangannya Allah akan memberikan kemenangan.",
      "Dia mencintai Allah dan Rasul-Nya, serta dicintai oleh Allah dan Rasul-Nya.\" Sahl bin Sa'ad menceritakan bahwa malam itu orang-orang bermalam dalam kondisi membicarakan dan menebak-nebak (yadukuuna) siapakah di antara mereka yang akan diserahkan panji tersebut.",
      "Ketika pagi hari tiba, mereka segera mendatangi Nabi Muhammad ﷺ, di mana setiap orang sangat berharap agar dirinyalah yang diserahkan panji itu.",
      "Namun, Rasulullah ﷺ bersabda, \"Di manakah Ali bin Abi Thalib?\" Mereka menjawab, \"Dia wahai Rasulullah, sedang menderita sakit pada kedua matanya.\" Beliau lalu bersabda, \"Utuslah seseorang untuk memanggilnya!\" Maka Ali didatangkan menemui beliau.",
      "Rasulullah ﷺ kemudian meludahi kedua mata Ali dan mendoakannya, seketika itu juga matanya sembuh seolah-olah tidak pernah terkena penyakit sebelumnya.",
      "Beliau lalu menyerahkan panji tersebut kepadanya, maka Ali bertanya, \"Wahai Rasulullah, apakah aku harus memerangi mereka hingga mereka menjadi seperti kita?\" Rasulullah ﷺ bersabda: \"Berjalanlah dengan tenang hingga engkau turun di halaman tempat tinggal mereka, kemudian serulah mereka kepada Islam!",
      "Sampaikanlah kepada mereka mengenai apa yang diwajibkan atas mereka dari hak Allah Ta'ala di dalam Islam. Demi Allah, sungguh jika Allah memberikan hidayah kepada seorang pria saja melalui perantaraanmu, itu jauh lebih baik bagimu daripada engkau memiliki unta-unta yang merah (humrun na'am).\" Hadits yang semisal dengan ini juga diriwayatkan oleh Imam Muslim."
     ]
    },
    {
     "id": 9,
     "title": "Kesabaran Rasulullah ﷺ dalam Mendakwahi Al-Hakam bin Kaisan",
     "paragraphs": [
      "Ibnu Sa'ad meriwayatkan dari Al-Miqdad bin Amru raḍiyallāhu 'anhu, ia menceritakan, \"Akulah yang menawan Al-Hakam bin Kaisan. Saat itu, pemimpin pasukan kami (pimpinan sariyah) hendak memenggal lehernya.",
      "Maka aku berkata, 'Biarkanlah dia, kita bawa dia menghadap Rasulullah ﷺ.'\" Mengingat peristiwa itu, Al-Miqdad melanjutkan bahwa setelah mereka tiba, Rasulullah ﷺ mulai mengajak Al-Hakam bin Kaisan untuk masuk ke dalam Islam. Beliau terus-menerus mengajaknya dan memperpanjang penawarannya.",
      "Melihat hal tersebut, Umar bin Khattab raḍiyallāhu 'anhu berkata, \"Mengapa engkau terus berbicara kepada orang ini, wahai Rasulullah? Demi Allah, dia tidak akan pernah masuk Islam untuk selama-lamanya.",
      "Biarkanlah aku memenggal lehernya agar dia segera menuju tempat kembalinya, yaitu neraka Hawiyah!\" Namun, Nabi Muhammad ﷺ terus memalingkan wajah dari Umar hingga akhirnya Al-Hakam menyatakan keislamannya.",
      "Umar bin Khattab raḍiyallāhu 'anhu kemudian menceritakan perasaannya setelah kejadian itu, \"Begitu aku melihatnya telah masuk Islam, seketika itu juga aku teringat akan sikapku yang lalu dan yang belakangan (rasa penyesalan).",
      "Aku bergumam, 'Bagaimana bisa aku menolak suatu urusan di hadapan Nabi Muhammad ﷺ, padahal beliau jauh lebih mengetahui tentangnya daripada aku?!' Namun aku menghibur diri dengan berkata, 'Sesungguhnya aku melakukan itu semata-mata menghendaki nasihat (kebaikan) demi Allah dan Rasul-Nya.'\" Umar lalu menegaskan, \"Demi Allah, dia telah masuk Islam dan keislamannya menjadi sangat baik.",
      "Dia terus berjihad di jalan Allah hingga akhirnya gugur sebagai syahid dalam peristiwa Sumur Ma'unah, dalam kondisi Rasulullah ﷺ ridha kepadanya dan dia pun masuk ke dalam surga.\" Ibnu Sa'ad juga meriwayatkan dari Az-Zuhri, ia menceritakan bahwa Al-Hakam saat itu bertanya, \"Apa itu Islam?\" Rasulullah ﷺ menjawab, \"Engkau menyembah Allah semata dan tidak menyekutukan-Nya dengan sesuatu pun, serta engkau bersaksi bahwa Muhammad adalah hamba dan utusan-Nya.\" Al-Hakam berkata, \"Aku telah masuk Islam.\" Maka Nabi Muhammad ﷺ menoleh kepada para sahabatnya lalu bersabda: \"Seandainya tadi aku menuruti perkataan kalian tentangnya lalu aku membunuhnya, niscaya dia akan masuk ke dalam neraka.\""
     ]
    },
    {
     "id": 10,
     "title": "Kisah Islamnya Wahsyi bin Harb",
     "paragraphs": [
      "At-Thabrani meriwayatkan dari Ibnu Abbas radhiyallahu 'anhuma, ia menceritakan bahwa Rasulullah ﷺ pernah mengirim utusan kepada Wahsyi bin Harb—pembunuh Hamzah—untuk mengajaknya masuk ke dalam Islam.",
      "Namun, Wahsyi mengirim balasan dengan berkata, \"Wahai Muhammad, bagaimana bisa engkau mengajakku sementara engkau mengklaim bahwa barang siapa yang membunuh, menyekutukan Allah, atau berzina, maka dia akan menemui dosa yang besar, dilipatgandakan azabnya pada hari kiamat, dan kekal di dalamnya dalam kondisi terhina; sedangkan aku telah melakukan semua perbuatan itu?!",
      "Maka apakah engkau mendapati adanya keringanan (rukhshah) untukku?\" Maka Allah SWT menurunkan firman-Nya: \"...kecuali orang-orang yang bertobat, beriman, dan mengerjakan amal saleh; maka kejahatan mereka diganti Allah dengan kebajikan. Dan adalah Allah Maha Pengampun lagi Maha Penyayang.\" (QS. Al-Furqan: 70).",
      "Mendengar ayat tersebut, Wahsyi kembali mengirim balasan, \"Wahai Muhammad, ini adalah syarat yang sangat berat: 'kecuali orang-orang yang bertobat, beriman, dan mengerjakan amal saleh', sedangkan aku barangkali tidak mampu memenuhi semua ini.",
      "Apakah ada selain ini?\" Maka Allah 'Azza wa Jalla menurunkan firman-Nya: \"Sesungguhnya Allah tidak akan mengampuni dosa syirik, dan Dia mengampuni segala dosa yang selain dari (syirik) itu, bagi siapa yang dikehendaki-Nya...\" (QS. An-Nisa: 48).",
      "Wahsyi kembali berkata, \"Wahai Muhammad, mengenai ayat ini, aku melihatnya masih digantungkan pada kehendak Allah, sehingga aku tidak tahu apakah Dia akan mengampuniku atau tidak.",
      "Apakah ada yang lain selain ini?\" Maka Allah 'Azza wa Jalla menurunkan firman-Nya: \"Katakanlah: 'Wahai hamba-hamba-Ku yang melampaui batas terhadap diri mereka sendiri, janganlah kalian berputus asa dari rahmat Allah. Sesungguhnya Allah mengampuni dosa-dosa semuanya. Sesungguhnya Dialah Yang Maha Pengampun lagi Maha Penyayang'.\" (QS. Az-Zumar: 53).",
      "Mendengar ayat ini, Wahsyi berkata, \"Kalau yang ini, ya.\" Maka setelah itu ia masuk Islam.",
      "Orang-orang kemudian bertanya, \"Wahai Rasulullah, sesungguhnya kami juga telah tertimpa (melakukan) apa yang telah menimpa Wahsyi?\" Rasulullah ﷺ bersabda, \"Keringanan ini berlaku untuk kaum muslimin secara umum.\" Al-Haitsami memberikan catatan bahwa di dalam sanadnya terdapat perawi bernama Abyan bin Sufyan yang telah didhaifkan oleh Adz-Dzahabi."
     ]
    },
    {
     "id": 11,
     "title": "Sebab Turunnya Ayat tentang Pengampunan Dosa Kaum Musyrik",
     "paragraphs": [
      "Sementara itu, di dalam kitab Shahih Al-Bukhari diriwayatkan dari Ibnu Abbas radhiyallahu 'anhuma, ia menceritakan bahwasanya dahulu ada sekelompok orang dari kalangan ahli syirik yang telah banyak membunuh dan sering berzina. Mereka kemudian mendatangi Nabi Muhammad ﷺ dan berkata, \"Sesungguhnya apa yang engkau katakan dan engkau serukan itu benar-benar sangat baik.",
      "Duhai, seandainya engkau mengabarkan kepada kami bahwa ada kafarat (penebus dosa) atas apa yang telah kami amalkan selama ini.\" Maka setelah peristiwa tersebut, turunlah firman Allah SWT: \"Dan orang-orang yang tidak menyembah tuhan yang lain beserta Allah dan tidak membunuh jiwa yang diharamkan Allah (membunuhnya) kecuali dengan (alasan) yang benar, dan tidak berzina...\" (QS.",
      "Al-Furqan: 68). Serta turun pula firman-Nya: \"Katakanlah: 'Wahai hamba-hamba-Ku yang melampaui batas terhadap diri mereka sendiri, janganlah kalian berputus asa dari rahmat Allah...'\" (QS. Az-Zumar: 53).",
      "Riwayat ini juga dikeluarkan oleh Imam Muslim, Imam Abu Dawud, dan Imam An-Nasa'i sebagaimana tercantum di dalam kitab Umdat al-Qari karya Al-Aini, dan dikeluarkan pula oleh Al-Baihaqi dengan redaksi yang serupa."
     ]
    },
    {
     "id": 12,
     "title": "Tangisan Fatimah Melihat Perubahan Fisik Rasulullah ﷺ",
     "paragraphs": [
      "At-Thabrani, Abu Nu'aim dalam kitab Al-Hilyah, dan Al-Hakim meriwayatkan dari Abu Tsa'labah al-Khusyani radhiyallahu 'anhu, ia menceritakan: Apabila Rasulullah ﷺ baru kembali dari suatu peperangan, beliau akan memasuki masjid terlebih dahulu untuk melaksanakan shalat dua rakaat.",
      "Beliau memang sangat menyukai apabila baru kembali dari suatu perjalanan untuk masuk ke masjid dan melakukan shalat dua rakaat, kemudian mendatangi Fatimah radhiyallahu 'anha sebagai orang pertama yang dikunjungi, baru setelah itu mendatangi istri-istri beliau.",
      "Maka ketika beliau baru kembali dari suatu perjalanan, beliau mendatangi Fatimah terlebih dahulu sebelum ke rumah istri-istri beliau. Fatimah langsung menyambut kedatangan Rasulullah ﷺ di depan pintu rumahnya, lalu ia mulai mencium wajah—di dalam redaksi lain disebutkan mencium mulut—serta kedua mata beliau sambil menangis.",
      "Rasulullah ﷺ lalu bertanya kepadanya, \"Apa yang membuatmu menangis?\" Fatimah menjawab, \"Aku menangis karena melihatmu, wahai Rasulullah, warna kulitmu telah berubah menjadi pucat (syahaba) dan pakaianmu pun telah tampak lusuh (ikhlaualaqat).\" Mendengar penuturan putrinya, Rasulullah ﷺ bersabda: \"Wahai Fatimah, janganlah engkau menangis, karena sesungguhnya Allah telah mengutus ayahmu ini dengan suatu urusan (agama) yang tidak akan menyisakan satu pun rumah di atas permukaan bumi ini, baik itu rumah dari bangunan tanah (madar) maupun rumah dari bulu hewan (wabar) ataupun rambut, melainkan Allah akan memasukkan urusan ini ke dalamnya dengan mendatangkan kemuliaan (bagi yang menerima) atau kehinaan (bagi yang menolak), hingga urusan ini mencapai tempat yang dicapai oleh waktu malam.\" Mengenai riwayat ini, Al-Haitsami memberikan catatan bahwa hadits ini diriwayatkan oleh At-Thabrani, di mana di dalam sanadnya terdapat perawi bernama Yazid bin Sinan Abu Farwah yang haditsnya terhitung mendekati kebaikan (muqarib al-hadits) namun disertai kedhaifan yang banyak.",
      "Sementara itu, Al-Hakim menyatakan bahwa hadits ini memiliki sanad yang shahih meskipun Al-Bukhari dan Muslim tidak mengeluarkannya.",
      "Namun, pendapat Al-Hakim ini disanggah oleh Adz-Dzahabi yang memberikan catatan bahwa Yazid bin Sinan adalah perawi asal ar-Ruha yang telah dilemahkan oleh Imam Ahmad dan ulama lainnya, sedangkan gurunya yang bernama Uqbah merupakan perawi tidak dikenal (nakirah) yang tidak diidentifikasi kondisinya."
     ]
    },
    {
     "id": 13,
     "title": "Janji Rasulullah ﷺ Mengenai Meluasnya Agama Islam",
     "paragraphs": [
      "Di dalam kitab Al-Lisan disebutkan bahwasanya Al-Bukhari memberikan catatan mengenai status kesahihan hadits di atas dengan menyatakan bahwa di dalam keshahihannya terdapat pandangan tertentu (fi shihhatihi nazhar), sementara Ibnu Hibban mencantumkan nama perawi tersebut di dalam kitab Al-Tsiqat."
     ]
    },
    {
     "id": 14,
     "title": "Janji Rasulullah ﷺ Mengenai Tersebarnya Islam ke Seluruh Dunia",
     "paragraphs": [
      "Imam Ahmad dan At-Thabrani meriwayatkan dari Tamim ad-Dari raḍiyallāhu 'anhu, ia menceritakan bahwasanya ia pernah mendengar Rasulullah ﷺ bersabda: \"Sungguh, urusan (agama) ini benar-benar akan mencapai apa yang dicapai oleh waktu malam dan siang.",
      "Dan Allah tidak akan menyisakan satu pun rumah, baik itu rumah dari bangunan tanah (madar) maupun rumah dari bulu hewan (wabar), melainkan Allah akan memasukkan agama ini ke dalamnya dengan mendatangkan kemuliaan bagi orang yang mulia atau kehinaan bagi orang yang hina; yaitu kemuliaan yang dengannya Allah memuliakan Islam dan pemeluknya, serta kehinaan yang dengannya Allah menghinakan kekufuran.\" Tamim ad-Dari raḍiyallāhu 'anhu kemudian menceritakan pembuktian dari janji tersebut, \"Aku benar-benar telah mengetahui kebenaran hal itu di tengah-tengah anggota keluargaku sendiri.",
      "Sungguh, orang yang masuk Islam di antara mereka benar-benar memperoleh kebaikan, kemuliaan, serta kejayaan.",
      "Sementara orang yang tetap dalam kekufuran di antara mereka, mereka pasti ditimpa kehinaan, kenistaan (al-shaghar), serta kewajiban membayar upeti (jizyah).\" Mengenai riwayat ini, Al-Haitsami memberikan catatan di dalam kitab Al-Majma' bahwa para perawi yang digunakan oleh Imam Ahmad merupakan perawi-perawi yang digunakan di dalam kitab Shahih al-Bukhari atau Shahih Muslim (rijal al-shahih).",
      "Selain itu, At-Thabrani juga mengeluarkan riwayat yang semisal dari jalur Al-Miqdad bin Amru raḍiyallāhu 'anhu."
     ]
    },
    {
     "id": 15,
     "title": "Harapan Umar bin Khattab agar Kaum yang Murtad Kembali ke dalam Islam",
     "paragraphs": [
      "Abdurrazzak meriwayatkan dari Anas bin Malik raḍiyallāhu 'anhu, ia menceritakan: Abu Musa al-Asy'ari pernah mengutusku untuk membawa kabar mengenai kemenangan dalam Perang Tustar kepada Umar bin Khattab raḍiyallāhu 'anhu.",
      "Ketika aku menemuinya, Umar bertanya kepadanya mengenai suatu kejadian, di mana saat itu ada enam orang pria dari bani Bakar bin Wa'il yang telah murtad dari Islam lalu memilih bergabung dengan kaum musyrikin.",
      "Umar bertanya, \"Apa yang telah dilakukan oleh rombongan pria dari bani Bakar bin Wa'il itu?\" Aku menjawab, \"Wahai Amirul Mukminin, mereka adalah kaum yang telah murtad dari Islam dan memilih bergabung dengan kaum musyrikin, maka tidak ada jalan lain bagi mereka melainkan hukuman mati.\" Mendengar jawabanku, Umar bin Khattab raḍiyallāhu 'anhu berseru: \"Sungguh, sekiranya aku dapat mengambil mereka dalam kondisi damai (silman), hal itu benar-benar jauh lebih aku sukai daripada segala apa yang disinari oleh matahari, baik itu berupa emas (shafra') maupun perak (baidha').\" Aku pun bertanya, \"Wahai Amirul Mukminin, lalu apa yang akan engkau perbuat kepada mereka seandainya engkau dapat mengambil mereka?\" Umar menjawab kepadaku: \"Aku pasti akan menawarkan kepada mereka untuk kembali memasuki pintu (Islam) yang telah mereka gunakan untuk keluar.",
      "Jika mereka mau melakukannya, aku pasti akan menerima mereka. Namun jika mereka menolak, aku akan menahan mereka di dalam penjara (istuda'tuhum al-sijn).\" Keterangan mengenai peristiwa ini tercantum di dalam kitab Kanz al-Ummal, dan Al-Baihaqi juga mengeluarkan riwayat yang semakna dengan kisah ini."
     ]
    },
    {
     "id": 16,
     "title": "Sikap Umar bin Khattab Terhadap Pemberian Tangguh Kepada Orang Murtad",
     "paragraphs": [
      "Imam Malik, Imam Asy-Syafi'i, Abdurrazzak, Abu Ubaid dalam kitab Al-Gharib, dan Al-Baihaqi meriwayatkan dari Abdul Rahman al-Qari, dari ayahnya, ia menceritakan: Seorang pria datang menemui Umar bin Khattab raḍiyallāhu 'anhu dari utusan Abu Musa al-Asy'ari raḍiyallāhu 'anhu. Umar kemudian bertanya kepadanya mengenai kabar orang-orang, lalu pria itu menceritakannya.",
      "Selanjutnya Umar bertanya, \"Apakah ada di antara kalian kabar yang asing (mugharribah khabar)?\" Pria itu menjawab, \"Ya, ada seorang pria yang telah kufur setelah ia memeluk Islam.\" Umar bertanya, \"Lalu apa yang telah kalian perbuat kepadanya?\" Ia menjawab, \"Kami membawanya mendekat lalu kami memenggal lehernya.\" Umar bin Khattab raḍiyallāhu 'anhu langsung berseru: \"Mengapa kalian tidak mengurungnya terlebih dahulu selama tiga hari, lalu kalian memberinya makan setiap hari dengan sepotong roti, dan kalian memintanya untuk bertobat agar barangkali ia mau bertobat dan kembali kepada perintah Allah?!",
      "Ya Allah, sesungguhnya aku tidak hadir di sana, tidak memerintahkannya, dan aku tidak rida ketika kabar ini sampai kepadaku!\" Sementara itu, Musaddad dan Ibnu Abdil Hakam meriwayatkan dari Amru bin Syu'aib, dari ayahnya, dari kakeknya, ia menceritakan bahwa Amru bin al-Aash raḍiyallāhu 'anhu pernah menulis surat kepada Umar bin Khattab raḍiyallāhu 'anhu untuk bertanya mengenai seorang pria yang masuk Islam kemudian kufur, lalu masuk Islam lagi kemudian kufur lagi, hingga ia melakukannya berulang kali; apakah Islamnya masih diterima?",
      "Maka Umar raḍiyallāhu 'anhu menulis surat balasan kepadanya yang isinya: \"Terimalah Islamnya selama Allah masih menerima hal itu dari mereka. Tawarkanlah Islam kepadanya; jika ia menerimanya maka biarkanlah dia, namun jika ia menolak maka pemenggallah lehernya.\" Keterangan ini tercantum di dalam kitab Kanz al-Ummal."
     ]
    },
    {
     "id": 17,
     "title": "Tangisan Umar bin Khattab Menyaksikan Kepayahan Seorang Pendeta",
     "paragraphs": [
      "Al-Baihaqi, Ibnu al-Mundzir, dan Al-Hakim meriwayatkan dari Abu Imran al-Jauni, ia menceritakan bahwasanya Umar bin Khattab raḍiyallāhu 'anhu pernah berjalan melewati tempat tinggal seorang pendeta.",
      "Umar kemudian berhenti dan pendeta itu pun dipanggil, \"Ini adalah Amirul Mukminin.\" Pendeta itu lalu menjenguk keluar, dan tampaklah sesosok manusia yang pada tubuhnya terdapat kepayahan (dhurr), kesungguhan dalam ibadah (ijtihad), serta sikap meninggalkan kesenangan dunia. Ketika Umar melihat kondisi pendeta tersebut, beliau langsung menangis.",
      "Orang-orang di sekitarnya pun bertanya, \"Sesungguhnya dia adalah seorang Nasrani (mengapa engkau menangisinya)?\" Umar raḍiyallāhu 'anhu menjawab: \"Aku telah mengetahuinya, akan tetapi aku merasa kasihan kepadanya. Aku teringat akan firman Allah 'Azza wa Jalla: 'Bekerja keras lagi kepayahan, mereka memasuki api neraka yang sangat panas'.",
      "Aku merasa kasihan terhadap kepayahan dan kesungguhannya dalam beribadah, padahal dia berakhir di dalam neraka.\" Keterangan mengenai peristiwa ini tercantum di dalam kitab Kanz al-Ummal."
     ]
    },
    {
     "id": 18,
     "title": "Dakwah Rasulullah ﷺ Kepada Abu Bakar Ash-Shiddiq",
     "paragraphs": [
      "Hafiz Abu al-Hasan al-Athorablusi meriwayatkan dari Aisyah radhiyallahu 'anha, ia menceritakan: Abu Bakar raḍiyallāhu 'anhu keluar rumah untuk menemui Rasulullah ﷺ —di mana ia memang merupakan sahabat karib beliau sejak masa jahiliyah.",
      "Ketika bertemu, Abu Bakar berkata, \"Wahai Abu al-Qasim, engkau telah menghilang dari majelis-majelis kaummu, dan mereka menuduhmu telah mencela nenek moyang serta ibu-ibu mereka.\" Maka Rasulullah ﷺ bersabda, \"Sesungguhnya aku adalah utusan Allah, aku mengajakmu kepada Allah.\" Begitu beliau selesai menyampaikan perkataannya, Abu Bakar langsung menyatakan keislamannya.",
      "Setelah itu, Rasulullah ﷺ beranjak pergi dalam kondisi tidak ada seorang pun di antara dua gunung di Mekah (al-akhsyabain) yang merasa lebih gembira melebihi kegembiraan beliau atas keislaman Abu Bakar. Abu Bakar pun segera pergi menemui Utsman bin Affan, Thalhah bin Ubaidillah, Az-Zubair bin al-Awwam, dan Sa'ad bin Abi Waqqas, lalu mereka semua masuk Islam.",
      "Keesokan harinya, Abu Bakar datang lagi bersama Utsman bin Mazh'un, Abu Ubaidah bin al-Jarrah, Abdul Rahman bin Auf, Abu Salamah bin Abdul Asad, dan Al-Arqam bin Abi al-Arqam, lalu mereka pun menyatakan keislaman mereka raḍiyallāhu 'anhum. Kisah ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 19,
     "title": "Kejujuran Abu Bakar Ash-Shiddiq dalam Menerima Dakwah",
     "paragraphs": [
      "Ibnu Ishaq menyebutkan bahwasanya Abu Bakar Ash-Shiddiq raḍiyallāhu 'anhu pernah bertemu dengan Rasulullah ﷺ lalu bertanya, \"Apakah benar apa yang dikatakan oleh kaum Quraisy, wahai Muhammad, bahwasanya engkau meninggalkan tuhan-tuhan kami, menganggap bodoh akal pikiran kami, dan mengkafirkan nenek moyang kami?\" Rasulullah ﷺ menjawab, \"Benar, sesungguhnya aku adalah utusan Allah dan nabi-Nya, Dia mengutusku untuk menyampaikan risalah-Nya, dan aku mengajakmu kepada Allah dengan kebenaran, dan demi Allah sesungguhnya ini adalah kebenaran.",
      "Aku mengajakmu, wahai Abu Bakar, kepada Allah semata yang tidak ada sekutu bagi-Nya, agar engkau tidak menyembah selain-Nya, serta saling menolong di atas ketaatan kepada-Nya.\" Beliau kemudian membacakan Al-Qur'an kepadanya.",
      "Abu Bakar tidak menolak dan tidak pula mengingkarinya, ia langsung masuk Islam, mengingkari berhala-berhala, menanggalkan sekutu-sekutu (al-andad), mengakui kebenaran Islam, lalu pulang dalam kondisi sebagai seorang mukmin yang membenarkan.",
      "Ibnu Ishaq menceritakan, telah menceritakan kepadaku Muhammad bin Abdul Rahman bin Abdullah bin al-Hushain al-Tamimi bahwasanya Rasulullah ﷺ pernah bersabda: \"Tidaklah aku mengajak seorang pun kepada Islam melainkan pasti ia memiliki kebimbangan (kabwah), keraguan (taraddud), dan pandangan tertentu, kecuali Abu Bakar.",
      "Dia tidak tertahan (ta'akkum) ketika aku menyebutkannya kepadanya dan tidak ragu-ragu sedikit pun.\" Kata ta'akkum berarti tertahan atau terdiam. Namun, apa yang disebutkan oleh Ibnu Ishaq mengenai perkataan \"ia tidak menolak dan tidak pula mengingkarinya\" mengandung kemungkaran (munkar).",
      "Hal itu karena Ibnu Ishaq sendiri dan ulama lainnya menyebutkan bahwa Abu Bakar telah menjadi sahabat Rasulullah ﷺ sebelum beliau diutus menjadi nabi. Abu Bakar telah mengetahui kejujuran, amanah, kebaikan perangai, serta kemuliaan akhlak beliau, yang mana semua hal tersebut menghalanginya untuk mengira bahwa beliau berdusta kepada manusia.",
      "Maka bagaimana mungkin beliau akan berdusta atas nama Allah?! Oleh karena itulah, begitu beliau menyebutkan kepadanya bahwasanya Allah telah mengutusnya, Abu Bakar segera membenarkannya tanpa merasa ragu ataupun bimbang sedikit pun.",
      "Hal ini diperkuat oleh riwayat yang telah tetap di dalam kitab Shahih Al-Bukhari dari Abu ad-Darda' raḍiyallāhu 'anhu mengenai hadits tentang perselisihan yang terjadi antara Abu Bakar dan Umar raḍiyallāhu 'anhuma.",
      "Di dalam riwayat tersebut Rasulullah ﷺ bersabda: \"Sesungguhnya Allah telah mengutusku kepada kalian, lalu kalian berkata, 'Engkau berdusta,' sedangkan Abu Bakar berkata, 'Dia benar,' dan dia telah membantuku dengan jiwa dan hartanya; maka apakah kalian mau meninggalkan sahabatku ini untukku?\" Beliau mengucapkannya sebanyak dua kali, dan setelah peristiwa itu Abu Bakar tidak pernah disakiti lagi.",
      "Riwayat ini menjadi teks yang jelas (kal-nash) bahwasanya Abu Bakar adalah orang yang pertama kali masuk Islam. Keterangan ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 20,
     "title": "Doa Rasulullah ﷺ untuk Keislaman Umar bin Khattab",
     "paragraphs": [
      "At-Thabrani meriwayatkan dari Abdullah bin Mas'ud raḍiyallāhu 'anhu, ia berkata bahwa Rasulullah ﷺ pernah berdoa: \"Ya Allah, muliakanlah Islam dengan Umar bin Khattab atau dengan Abu Jahl bin Hisyam.\" Maka Allah SWT menjadikan doa Rasulullah ﷺ tersebut tertuju bagi Umar bin Khattab, sehingga dengan keislamannya, Islam menjadi kokoh dan berhala-berhala pun dihancurkan.",
      "Mengenai riwayat ini, Al-Haitsami memberikan catatan bahwa para perawinya merupakan perawi-perawi yang digunakan di dalam kitab Shahih al-Bukhari atau Shahih Muslim, selain Mujahid bin Said yang telah ditsiqahkan pula.",
      "Sementara itu, At-Thabrani juga mengeluarkan riwayat dari hadits Tsauban raḍiyallāhu 'anhu—yang kisahnya secara lengkap akan dipaparkan pada bab tentang ketabahan para sahabat menghadapi siksaan ketika berada di rumah Said bin Zaid dan istrinya, Fatimah binti Khattab (saudara perempuan Umar).",
      "Di dalam riwayat tersebut dikisahkan bahwasanya Rasulullah ﷺ memegang kedua lipatan baju Umar lalu menggoncangnya seraya bersabda, \"Apa yang engkau inginkan?",
      "Dan untuk apa engkau datang?\" Umar lalu berkata kepada beliau, \"Tawarkanlah kepadaku apa yang engkau serukan.\" Rasulullah ﷺ bersabda, \"Engkau bersaksi bahwa tidak ada tuhan selain Allah semata yang tidak ada sekutu bagi-Nya, dan bahwasanya Muhammad adalah hamba dan utusan-Nya.\" Maka Umar langsung masuk Islam di tempat itu juga dan berkata, \"Keluarlah!\" Di sisi lain, Abu Nu'aim dalam kitab Al-Hilyah meriwayatkan dari Aslam, ia menceritakan bahwa Umar bin Khattab raḍiyallāhu 'anhu pernah berkata kepada kami, \"Apakah kalian suka jika aku memberitahukan kepada kalian tentang awal mula keislamanku?\" Kami menjawab, \"Ya.\" Umar berkisah, \"Dahulu aku adalah orang yang paling keras permusuhannya terhadap Rasulullah ﷺ.",
      "Suatu hari aku mendatangi Nabi Muhammad ﷺ yang sedang berada di sebuah rumah di dekat bukit Shafa, lalu aku duduk di hadapan beliau. Beliau kemudian memegang bagian kerah kemejaku lalu bersabda, 'Masuk Islamlah, wahai putra Khattab!",
      "Ya Allah, berilah dia petunjuk.'\" Umar melanjutkan, \"Maka aku berkata, 'Aku bersaksi bahwa tidak ada tuhan selain Allah dan aku bersaksi bahwasanya engkau adalah utusan Allah.'\" Umar mengisahkan bahwa seketika itu juga kaum muslimin yang berada di sana langsung mengumandangkan takbir dengan satu takbiran yang suaranya terdengar hingga ke jalan-jalan di kota Mekah.",
      "Kisah ini juga dikeluarkan oleh Al-Bazzar dengan redaksi yang berbeda, sebagaimana akan dipaparkan pada bab berikutnya."
     ]
    },
    {
     "id": 21,
     "title": "Dakwah Rasulullah ﷺ Kepada Utsman bin Affan",
     "paragraphs": [
      "Al-Madaini meriwayatkan dari Amru bin Utsman, ia menceritakan bahwa Utsman bin Affan raḍiyallāhu 'anhu pernah berkata: \"Aku pernah masuk menemui bibiku, Arwa binti Abdul Muthalib, untuk menjenguknya. Tidak lama kemudian, Rasulullah ﷺ masuk, lalu aku terus memandangi beliau, yang mana pada hari-hari itu urusan (kenabian) beliau telah menampakkan tanda-tandanya.",
      "Beliau lalu menghadap ke arahku dan bersabda, 'Ada apa denganmu, wahai Utsman?' Aku menjawab, 'Aku merasa heran kepadamu, juga kedudukanmu di tengah-tengah kami, serta apa yang dituduhkan orang-orang kepadamu.'\" Utsman melanjutkan, \"Beliau lalu mengucapkan, 'Lailaha illallah'.",
      "Demi Allah, Allah benar-benar mengetahui bahwasanya tubuhku langsung merinding (iqsya'arrat) saat mendengar kalimat itu. Beliau kemudian membacakan firman Allah: 'Dan di langit terdapat (sebab-sebab) rezekimu dan apa yang dijanjikan kepadamu. Maka demi Tuhan langit dan bumi, sesungguhnya yang dijanjikan itu benar-benar nyata seperti perkataan yang kalian ucapkan'.",
      "Setelah itu beliau bangkit lalu keluar, maka aku segera keluar mengikuti di belakang beliau hingga aku berhasil menyusulnya, lalu aku menyatakan keislamanku.\" Kisah ini tercantum di dalam kitab Al-Isti'ab."
     ]
    },
    {
     "id": 22,
     "title": "Dakwah Rasulullah ﷺ Kepada Ali bin Abi Thalib",
     "paragraphs": [
      "Ibnu Ishaq menyebutkan bahwasanya Ali bin Abi Thalib raḍiyallāhu 'anhu pernah datang ketika Nabi Muhammad ﷺ dan Khadijah radhiyallāhu 'anha sedang melaksanakan shalat. Ali lalu bertanya, \"Wahai Muhammad, apa ini?\" Rasulullah ﷺ bersabda, \"Ini adalah agama Allah yang Dia pilih untuk diri-Nya dan Dia mengutus para rasul-Nya dengan agama ini.",
      "Maka aku mengajakmu kepada Allah semata yang tidak ada sekutu bagi-Nya, mengajakmu untuk menyembah-Nya, serta engkau mengingkari Al-Lat dan Al-Uzza.\" Ali menjawab, \"Ini adalah suatu urusan yang belum pernah aku dengar sebelum hari ini, dan aku tidak akan memutuskan suatu perkara hingga aku membicarakannya terlebih dahulu dengan Abu Thalib.\" Namun, Rasulullah ﷺ tidak menyukai apabila Ali menyebarkan rahasia beliau sebelum beliau menampakkan urusan dakwahnya secara terang-terangan.",
      "Maka beliau bersabda kepadanya, \"Wahai Ali, jika engkau belum masuk Islam, maka jagalah rahasia ini!\" Ali pun melewatkan malam itu, lalu Allah SWT menanamkan ketertarikan kepada Islam di dalam hati Ali.",
      "Ketika pagi hari tiba, ia segera mendatangi Rasulullah ﷺ dan bertanya, \"Apa yang engkau tawarkan kepadaku, wahai Muhammad?\" Rasulullah ﷺ bersabda kepadanya, \"Engkau bersaksi bahwa tidak ada tuhan selain Allah semata yang tidak ada sekutu bagi-Nya, engkau mengingkari Al-Lat dan Al-Uzza, serta berlepas diri dari sekutu-sekutu (al-andad).\" Ali pun memenuhi ajakan tersebut lalu masuk Islam.",
      "Setelah itu, ia selalu mendatangi beliau dalam kondisi menyembunyikan keislamannya karena rasa takut kepada Abu Thalib, dan ia tidak menampakkan keislamannya kepada siapa pun. Kisah ini tercantum di dalam kitab Al-Bidayah.",
      "Sementara itu, Imam Ahmad dan ulama lainnya meriwayatkan dari Habbah al-Arani, ia menceritakan: Aku pernah melihat Ali raḍiyallāhu 'anhu tertawa di atas mimbar, dan aku belum pernah melihatnya tertawa dengan tawa yang lebih banyak daripada hari itu hingga tampaklah gigi gerahamnya. Ali kemudian berkata, \"Aku teringat akan perkataan Abu Thalib.",
      "Dahulu Abu Thalib pernah memergoki kami saat aku sedang bersama Rasulullah ﷺ melaksanakan shalat di lembah Nakhlah. Ia lalu bertanya, 'Apa yang sedang kalian berdua lakukan, wahai putra saudaraku?' Maka Rasulullah ﷺ mengajaknya untuk masuk ke dalam Islam.\""
     ]
    },
    {
     "id": 23,
     "title": "Ali Mengingat Perkataan Ayahnya Mengenai Shalat",
     "paragraphs": [
      "Ali melanjutkan kisahnya di atas mimbar mengenai tanggapan ayahnya, Abu Thalib, saat diajak masuk Islam oleh Rasulullah ﷺ,\" Abu Thalib berkata, 'Tidak mengapa dengan apa yang kalian berdua lakukan, akan tetapi janganlah pantatku berada lebih tinggi dari kepalaku (saat sujud) untuk selama-lamanya.'\" Ali pun tertawa di atas mimbar karena merasa heran mengingat perkataan ayahnya tersebut.",
      "Ali kemudian berkata: \"Ya Allah, aku tidak mengetahui ada seorang hamba pun dari umat ini yang menyembah-Mu sebelumku selain Nabi-Mu ﷺ.\" Ali mengucapkannya sebanyak tiga kali, lalu berkata, \"Sungguh, aku telah melaksanakan shalat sebelum orang-orang melakukannya selama tujuh tahun.\" Mengenai riwayat ini, Al-Haitsami memberikan catatan di dalam kitab Al-Majma' bahwa hadits ini diriwayatkan oleh Imam Ahmad dan Abu Ya'la secara ringkas, serta diriwayatkan pula oleh Al-Bazzar dan At-Thabrani di dalam kitab Al-Mu'jam al-Ausath dengan sanad yang berstatus hasan."
     ]
    },
    {
     "id": 24,
     "title": "Dakwah Rasulullah ﷺ Kepada Amru bin Abasah",
     "paragraphs": [
      "Imam Ahmad meriwayatkan dari Syaddad bin Abdullah, ia menceritakan bahwasanya Abu Umamah pernah bertanya, \"Wahai Amru bin Abasah, dengan alasan apa engkau mengklaim dirimu sebagai seperempat dari Islam (orang keempat yang masuk Islam)?\" Amru bin Abasah raḍiyallāhu 'anhu menjawab: \"Dahulu pada masa jahiliyah, aku berpandangan bahwa manusia berada di atas kesesatan dan aku tidak menganggap berhala-berhala itu sebagai sesuatu yang patut disembah.",
      "Kemudian, aku mendengar kabar tentang seorang pria di Mekah yang menyampaikan berita-berita dan menceritakan berbagai perkataan. Maka aku segera mengendarai tungganganku hingga aku tiba di Mekah. Saat itu, aku mendapati Rasulullah ﷺ sedang menyembunyikan diri (mustakhfiyan), karena kaumnya bersikap berani dan kasar (jura'a') terhadap beliau.",
      "Aku pun bersikap lemah lembut (talthaftu) hingga aku berhasil masuk menemui beliau.",
      "Aku bertanya, 'Siapa engkau?' Beliau menjawab, 'Aku adalah nabi Allah.' Aku bertanya lagi, 'Apa itu nabi Allah?' Beliau bersabda, 'Utusan Allah.' Aku bertanya, 'Apakah Allah yang mengutusmu?' Beliau menjawab, 'Ya.' Aku bertanya, 'Dengan membawa urusan apa Dia mengutusmu?' Beliau bersabda, 'Agar Allah dikesakan dan tidak disekutukan dengan sesuatu pun, agar berhala-berhala dihancurkan, dan agar silaturahmi disambung.' Aku bertanya kepadanya, 'Siapa yang bersamamu di atas urusan ini?' Beliau bersabda, 'Seorang merdeka dan seorang budak.' Saat itu, yang bersama beliau adalah Abu Bakar bin Abi Quhafah dan Bilal yang merupakan budak milik Abu Bakar.",
      "Aku pun berkata kepada beliau, 'Sesungguhnya aku adalah pengikutmu.' Beliau bersabda, 'Sesungguhnya engkau tidak akan mampu melakukan hal itu pada harimu ini, akan tetapi pulanglah ke rumah keluargamu!",
      "Apabila engkau telah mendengar kabar bahwasanya aku telah tampak (menang), maka susullah aku.'\" Amru melanjutkan, \"Maka aku kembali kepada keluargaku dalam kondisi telah masuk Islam. Setelah itu, Rasulullah ﷺ keluar berhijrah ke Madinah, dan aku terus mencari-cari berita mengenai beliau hingga datanglah rombongan pengendara dari Yatsrib (Madinah).",
      "Aku bertanya kepada mereka, 'Apa yang dilakukan oleh pria asal Mekah yang mendatangi kalian itu?' Mereka menjawab, 'Kaumnya sempat menghendaki untuk membunuhnya namun mereka tidak mampu melakukannya, dan ada penghalang di antara mereka dengannya, lalu kami meninggalkan orang-orang dalam kondisi bersegera mendatanginya.'\" Amru bin Abasah berkata, \"Maka aku segera mengendarai tungganganku hingga aku mendatangi beliau di Madinah.",
      "Aku masuk menemui beliau lalu bertanya, 'Wahai Rasulullah, apakah engkau mengenaliku?' Beliau menjawab, 'Ya, bukankah engkau adalah orang yang pernah mendatangiku di Mekah?' Aku menjawab, 'Benar.' Aku lalu berkata, 'Wahai Rasulullah, ajarkanlah kepadaku dari apa yang Allah ajarkan kepadamu sedangkan aku belum mengetahuinya'—kemudian Amru menceritakan hadits ini secara panjang lebar.\""
     ]
    },
    {
     "id": 25,
     "title": "Keteguhan Amru bin Abasah dalam Memegang Perintah Rasulullah ﷺ",
     "paragraphs": [
      "Ibnu Sa'ad juga mengeluarkan riwayat mengenai kisah Amru bin Abasah raḍiyallāhu 'anhu ini secara panjang lebar. Di dalam riwayat Imam Ahmad dari Abu Umamah, dari Amru bin Abasah, dikisahkan mengenai kelanjutan dialognya bersama Nabi Muhammad ﷺ di Mekah.",
      "Amru bertanya, \"Dengan membawa urusan apa Allah mengutusmu?\" Rasulullah ﷺ bersabda: \"Agar tali silaturahmi disambung, darah tidak ditumpahkan, jalan-jalan menjadi aman, berhala-berhala dihancurkan, dan agar Allah disembah semata tanpa disekutukan dengan sesuatu pun.\" Amru berkata, \"Alangkah baiknya urusan yang engkau bawa itu!",
      "Aku bersaksi kepadamu bahwasanya aku telah beriman kepadamu dan membenarkanmu. Maka apakah aku harus menetap bersamamu di sini atau bagaimana menurut pandanganmu?\" Rasulullah ﷺ bersabda: \"Sesungguhnya engkau telah melihat sendiri bagaimana kebencian orang-orang terhadap urusan yang aku bawa ini. Oleh karena itu, menetaplah di tengah-tengah keluargamu!",
      "Apabila engkau telah mendengar kabar bahwasanya aku telah keluar menuju tempat hijrahku, maka susullah aku.\" Hadits yang panjang ini juga dikeluarkan oleh Imam Muslim, At-Thabrani, Abu Nu'aim di dalam kitab Al-Hilyah, serta Ibnu Abdil Barr di dalam kitab Al-Isti'ab melalui jalur Abu Umamah. Kisah ini pun disebutkan oleh Abu Nu'aim di dalam kitab Dala'il al-Nubuwwah."
     ]
    },
    {
     "id": 26,
     "title": "Mimpi Khalid bin Said bin al-Aash dan Awal Mula Keislamannya",
     "paragraphs": [
      "Al-Baihaqi meriwayatkan dari Ja'far bin Muhammad bin Khalid bin az-Zubair, dari ayahnya—atau dari Muhammad bin Abdullah bin Amru bin Utsman—ia menceritakan bahwasanya keislaman Khalid bin Said bin al-Aash raḍiyallāhu 'anhu terjadi pada masa-masa awal, dan dialah orang yang pertama kali masuk Islam di antara saudara-saudaranya.",
      "Awal mula keislamannya bermula dari sebuah mimpi yang dialaminya. Di dalam mimpinya, Khalid melihat dirinya dibawa berdiri di tepi jurang neraka. Ia melihat jurang tersebut memiliki kedalaman dan keluasan yang hanya diketahui oleh Allah SWT.",
      "Di dalam mimpi itu, seolah-olah ada seseorang yang hendak mendorongnya agar jatuh ke dalam jurang api tersebut, namun ia melihat Rasulullah ﷺ segera memegang kain sarungnya (bi-huqwayhi) sehingga ia tidak sampai jatuh terperosok.",
      "Khalid pun tersentak bangun dari tidurnya dalam kondisi terkejut, lalu ia bergumam, \"Aku bersumpah demi Allah, sesungguhnya ini benar-benar mimpi yang nyata (ru'ya haq).\" Ia kemudian menemui Abu Bakar bin Abi Quhafah raḍiyallāhu 'anhu lalu menceritakan perihal mimpi tersebut. Abu Bakar berkata, \"Allah menghendaki kebaikan bersamamu.",
      "Pria (yang memegangmu) itu adalah Rasulullah ﷺ, maka ikutilah dia! Sesungguhnya engkau akan mengikutinya dan masuk bersamanya ke dalam Islam, lalu Islam akan membentengimu agar tidak jatuh ke dalam neraka, sedangkan ayahmu adalah orang yang akan jatuh ke dalamnya.\" Maka Khalid segera mencari Rasulullah ﷺ dan berhasil menemui beliau ketika beliau sedang berada di wilayah Ajyad.",
      "Khalid bertanya, \"Wahai Muhammad, kepada apa engkau mengajak?\" Rasulullah ﷺ bersabda: \"Aku mengajakmu kepada Allah semata yang tidak ada sekutu bagi-Nya, bahwasanya Muhammad adalah hamba dan utusan-Nya, serta engkau menanggalkan apa yang selama ini engkau sembah dari batu yang tidak dapat mendengar, tidak dapat memberi mudarat, tidak dapat melihat, tidak dapat memberi manfaat, dan tidak tahu siapa yang menyembahnya dari siapa yang tidak menyembahnya!\" Khalid langsung berkata, \"Sesungguhnya aku bersaksi bahwa tidak ada tuhan selain Allah dan aku bersaksi bahwasanya engkau adalah utusan Allah.\" Maka Rasulullah ﷺ merasa sangat gembira atas keislamannya.",
      "Keterangan mengenai peristiwa ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 27,
     "title": "Siksaan Said bin al-Aash Kepada Putranya yang Masuk Islam",
     "paragraphs": [
      "Setelah menyatakan keislamannya, Khalid bin Said raḍiyallāhu 'anhu memilih untuk menyembunyikan diri. Namun, ayahnya, Said bin al-Aash (Abu Uhaihah), akhirnya mengetahui perihal keislaman sang putra. Ia pun segera mengutus anak-anaknya yang lain—yang saat itu belum masuk Islam—bersama seorang budak setianya yang bernama Rafi' untuk mencari dan menangkap Khalid.",
      "Setelah Khalid berhasil ditemukan, mereka membawanya menghadap sang ayah. Abu Uhaihah langsung mencaci maki, mencela, dan memukul kepala Khalid menggunakan sebatang tongkat pelapah kurma (sharima) yang ada di tangannya hingga tongkat tersebut patah.",
      "Abu Uhaihah membentak dengan penuh kemarahan, \"Apakah engkau tega mengikuti Muhammad, padahal engkau sendiri melihat bagaimana dia menyelisihi kaumnya, membawa urusan yang mencela tuhan-tuhan mereka, serta mencela nenek moyang mereka yang telah berlalu?!\" Khalid dengan keteguhan hati menjawab, \"Demi Allah, dia benar-benar telah berkata jujur, dan aku telah mengikutinya.\" Mendengar jawaban tegas itu, amarah Abu Uhaihah semakin meluap.",
      "Ia terus memaki dan menghina Khalid, lalu mengusirnya seraya berseru, \"Pergilah engkau, wahai orang bodoh (luka')! Pergilah ke mana pun engkau suka!",
      "Demi Allah, aku benar-benar akan menahan jatah makananmu!\" Khalid menanggapi ancaman itu dengan tenang, \"Jika engkau menahan makanan untukku, sesungguhnya Allah 'Azza wa Jalla yang akan memberikan rezeki kepadaku untuk melangsungkan hidupku.\" Setelah mengusir Khalid, Abu Uhaihah berpaling kepada anak-anaknya yang lain dan memperingatkan mereka, \"Jangan ada seorang pun di antara kalian yang berani berbicara kepadanya!",
      "Jika ada yang melanggar, aku akan memperlakukannya sama seperti apa yang telah aku lakukan kepada Khalid.\" Maka Khalid bin Said raḍiyallāhu 'anhu pergi meninggalkan rumahnya dan langsung mendatangi Rasulullah ﷺ. Sejak saat itu, ia selalu mendampingi dan menetap bersama beliau.",
      "Kisah penyiksaan ini dikeluarkan oleh Al-Hakim di dalam kitab Al-Mustadrak melalui jalur Al-Waqidi, dari Ja'far bin Muhammad, dari Muhammad bin Abdullah. Ibnu Sa'ad juga mengeluarkan riwayat serupa yang bersumber dari Al-Waqidi secara panjang lebar.",
      "Di dalam kitab Al-Isti'ab, terdapat tambahan keterangan dari jalur Al-Waqidi bahwa setelah diusir oleh ayahnya, Khalid bin Said raḍiyallāhu 'anhu terus menyembunyikan diri di wilayah pinggiran kota Mekah.",
      "Ia bertahan di sana hingga kaum muslimin berangkat melaksanakan urusan Hijrah ke tanah Habasyah (Etiopia) yang kedua, dan Khalid menjadi orang yang pertama kali berangkat berhijrah ke sana. Sementara itu, Al-Hakim juga mengeluarkan riwayat dari Khalid bin Said raḍiyallāhu 'anhu, ia menceritakan bahwasanya ayahnya, Said bin al-Aash, pernah jatuh sakit.",
      "Di tengah rasa sakitnya, sang ayah bersumpah, \"Sungguh, jika Allah menyembuhkan dan mengangkat penyakitku ini, maka tuhan yang disembah oleh putra Abi Kabsyah (Rasulullah ﷺ ) tidak akan pernah boleh disembah di lembah Mekah ini untuk selama-lamanya!\" Mendengar sumpah ayahnya yang memusuhi dakwah Islam, Khalid bin Said raḍiyallāhu 'anhu langsung berdoa, \"Ya Allah, janganlah Engkau menyembuhkan dan mengangkat penyakitnya.\" Maka Said bin al-Aash pun akhirnya mati di dalam sakitnya tersebut.",
      "Riwayat mengenai kematian Said bin al-Aash ini juga dikeluarkan oleh Ibnu Sa'ad di dalam kitab Al-Thabaqat."
     ]
    },
    {
     "id": 28,
     "title": "Kisah Keislaman Dhimad al-Azdi",
     "paragraphs": [
      "Imam Muslim dan Al-Baihaqi meriwayatkan dari Ibnu Abbas radhiyallahu 'anhuma, ia menceritakan bahwasanya Dhimad pernah datang ke Mekah. Ia adalah seorang pria yang berasal dari kabilah Azd Shanu'ah dan biasa mengobati (yarqi) orang yang terkena gangguan angin atau gila.",
      "Ketika tiba di Mekah, ia mendengar orang-orang bodoh di kota tersebut berkata, \"Sesungguhnya Muhammad itu gila.\" Mendengar desas-desus itu, Dhimad berkata di dalam hatinya, \"Di manakah pria itu?",
      "Sudi kiranya Allah menyembuhkannya melalui kedua tanganku.\" Dhimad kemudian menceritakan pengalamannya saat berhasil menemui Nabi Muhammad ﷺ,\" Aku menemui Muhammad lalu berkata, 'Sesungguhnya aku biasa mengobati orang yang terkena gangguan angin ini, dan sesungguhnya Allah dapat menyembuhkan siapa saja yang Dia kehendaki melalui kedua tanganku, maka kemarilah!'\" Rasulullah ﷺ lalu bersabda menanggapi tawarannya: \"Sesungguhnya segala puji hanya bagi Allah, kami memuji-Nya dan memohon pertolongan-Nya.",
      "Barang siapa yang diberi petunjuk oleh Allah maka tidak ada yang dapat menyesatkannya, dan barang siapa yang disesatkan oleh-Nya maka tidak ada yang dapat memberinya petunjuk. Aku bersaksi bahwa tidak ada tuhan selain Allah semata yang tidak ada sekutu bagi-Nya...\" Rasulullah ﷺ mengucapkan kalimat tersebut sebanyak tiga kali.",
      "Mendengar untaian kalimat itu, Dhimad langsung tersentak kagum lalu berkata, \"Demi Allah, sungguh aku telah mendengar perkataan para dukun, perkataan para penyihir, dan perkataan para penyair, namun aku belum pernah mendengar kalimat yang semisal dengan kalimat-kalimatmu ini! Ulurkanlah tanganmu, aku akan membaiatmu di atas Islam.\" Maka Rasulullah ﷺ membaiatnya.",
      "Setelah itu, Rasulullah ﷺ bersabda kepadanya, \"Dan juga atas kaummu?\" Dhimad menjawab, \"Dan juga atas kaumku.\" Ibnu Abbas melanjutkan kisahnya bahwasanya di kemudian hari, Rasulullah ﷺ pernah mengutus suatu pasukan perang (jaisy), lalu pasukan tersebut melewati daerah tempat tinggal kaum Dhimad.",
      "Pemimpin pasukan bertanya kepada pasukannya, \"Apakah kalian mengambil sesuatu dari kaum ini?\" Salah seorang pria dari pasukan itu menjawab, \"Aku mengambil sebuah wadah air dari kulit (mithharah) milik mereka.\" Pemimpin pasukan langsung memerintahkan, \"Kembalikan wadah itu kepada mereka, karena sesungguhnya mereka adalah kaum Dhimad!\" Di dalam riwayat lain disebutkan bahwasanya Dhimad berkata kepada beliau, \"Ulangi lagi kalimat-kalimatmu itu kepadaku, karena sesungguhnya kalimat-kalimat tersebut benar-benar telah mencapai kedalaman dasar lautan (qamus al-bahr).\" Keterangan ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 29,
     "title": "Dialog Lengkap Keislaman Dhimad al-Azdi",
     "paragraphs": [
      "Hadits ini juga dikeluarkan oleh Imam An-Nasa'i, Al-Baghawi, dan Musaddad di dalam kitab Musnad-nya sebagaimana tercantum dalam kitab Al-Ishabah.",
      "Abu Nu'aim juga mengeluarkannya di dalam kitab Dala'il al-Nubuwwah melalui jalur Al-Waqidi, yang menceritakan dari Muhammad bin Sulait, dari ayahnya, dari Abdul Rahman al-Adawi, ia menceritakan bahwasanya Dhimad pernah berkata: \"Aku pernah datang ke Mekah untuk melaksanakan umrah, lalu aku duduk di suatu majelis yang di dalamnya terdapat Abu Jahl, Utbah bin Rabi'ah, dan Umayyah bin Khalaf.",
      "Abu Jahl berkata, 'Pria ini (Nabi Muhammad ﷺ ) telah memecah belah persatuan kita, menganggap bodoh akal pikiran kami, menyesatkan orang-orang yang telah mati di antara kami, dan mencela tuhan-tuhan kami.' Umayyah menimpali, 'Pria itu gila tanpa ragu lagi.'\" Dhimad melanjutkan, \"Maka perkataan itu terngiang-ngiang di dalam hatiku, dan aku bergumam, 'Sesungguhnya aku adalah seorang pria yang biasa mengobati penyakit gila.' Maka aku bangkit meninggalkan majelis tersebut untuk mencari Rasulullah ﷺ, namun aku tidak berhasil menemui beliau pada hari itu hingga keesokan harinya.",
      "Aku mendatangi beliau dan mendapati beliau sedang duduk di belakang maqam Ibrahim melaksanakan shalat. Aku pun duduk menunggu sampai beliau selesai shalat, kemudian aku mendekat dan duduk di hadapan beliau.",
      "Aku berkata, 'Wahai putra Abdul Muthalib.' Beliau lalu menghadap ke arahku dan bersabda, 'Apa yang engkau inginkan?' Aku menjawab, 'Sesungguhnya aku biasa mengobati penyakit gila, maka jika engkau berkenan, aku akan mengobatimu, dan janganlah engkau menganggap besar penyakit yang menimpamu ini karena sesungguhnya aku telah banyak menyembuhkan orang yang kondisinya lebih parah darimu hingga ia sembuh.",
      "Lagipula, aku telah mendengar kaummu menyebutkan berbagai perangai buruk tentangmu; mereka menuduhmu menganggap bodoh akal pikiran mereka, memecah belah persatuan mereka, menyesatkan orang yang mati di antara mereka, dan mencela tuhan-tuhan mereka, sehingga aku bergumam bahwa tidaklah urusan ini dilakukan melainkan oleh seorang pria yang sedang tertimpa penyakit gila (jinnah).'\" Rasulullah ﷺ kemudian bersabda kepada Dhimad: \"Sesungguhnya segala puji hanya bagi Allah, aku memuji-Nya, memohon pertolongan-Nya, beriman kepada-Nya, dan bertawakal kepada-Nya.",
      "Barang siapa yang diberi petunjuk oleh Allah maka tidak ada yang dapat menyesatkannya, dan barang siapa yang disesatkan oleh-Nya maka tidak ada yang dapat memberinya petunjuk.",
      "Dan aku bersaksi bahwa tidak ada tuhan selain Allah semata yang tidak ada sekutu bagi-Nya, dan aku bersaksi bahwasanya Muhammad adalah hamba dan utusan-Nya.\" Dhimad berkata, \"Maka aku mendengar suatu perkataan yang belum pernah aku mendengar perkataan yang lebih indah darinya sama sekali. Aku pun meminta beliau untuk mengulangi perkataan itu, lalu beliau mengulanginya kepadaku.",
      "Aku bertanya, 'Kepada apa engkau mengajak?' Beliau bersabda, 'Agar engkau beriman kepada Allah semata yang tidak ada sekutu bagi-Nya, engkau menanggalkan berhala-berhala dari lehermu, dan engkau bersaksi bahwasanya aku adalah utusan Allah.' Aku bertanya lagi, 'Lalu apa bagianku jika aku melakukannya?' Beliau bersabda, 'Bagianmu adalah surga.' Aku pun berkata, 'Maka sesungguhnya aku bersaksi bahwa tidak ada tuhan selain Allah semata yang tidak ada sekutu bagi-Nya, aku menanggalkan berhala-berhala dari leherku serta berlepas diri darinya, dan aku bersaksi bahwasanya engkau adalah hamba Allah dan utusan-Nya.'\" Dhimad melanjutkan bahwa setelah itu ia menetap bersama Rasulullah ﷺ hingga berhasil mempelajari banyak surah dari Al-Qur'an, baru kemudian ia pulang kembali kepada kaumnya.",
      "Abdullah bin Abdul Rahman al-Adawi mengisahkan kelanjutan ceritanya, bahwasanya di kemudian hari Rasulullah ﷺ pernah mengutus Ali bin Abi Thalib raḍiyallāhu 'anhu memimpin suatu pasukan perang (sariyah), lalu pasukan tersebut berhasil mengambil dua puluh ekor unta di suatu tempat dan membawanya.",
      "Namun ketika kabar sampai kepada Ali bahwasanya mereka adalah kaum Dhimad, Ali langsung memerintahkan, \"Kembalikan unta-unta itu kepada mereka!\" Maka seluruh unta itu pun dikembalikan kepada kaum Dhimad."
     ]
    },
    {
     "id": 30,
     "title": "Dakwah Rasulullah ﷺ Kepada Hushain Ayah Imran",
     "paragraphs": [
      "Ibnu Khuzaimah meriwayatkan dari Imran bin Khalid bin Thaliq bin Muhammad bin Imran bin Hushain, dari ayahnya, dari kakeknya, ia menceritakan bahwasanya kaum Quraisy pernah mendatangi Hushain—yang mana mereka memang sangat mengormatinya.",
      "Mereka berkata kepada Hushain, \"Berbicaralah kepada pria ini (Nabi Muhammad ﷺ ) demi kami, karena sesungguhnya dia sering menyebut-nyebut tuhan-tuhan kami dan mencela mereka.\" Maka mereka datang bersama Hushain hingga mereka duduk di dekat pintu rumah Nabi Muhammad ﷺ.",
      "Beliau lalu bersabda, \"Berikanlah ruang untuk syekh (orang tua) ini.\" Saat itu, Imran bin Hushain beserta para sahabat beliau sedang berkumpul dalam jumlah yang banyak.",
      "Hushain kemudian berkata, \"Urusan apa ini yang kabarnya telah sampai kepada kami tentangmu, bahwasanya engkau mencela tuhan-tuhan kami dan menyebut-nyebut mereka dengan keburukan, padahal dahulu ayahmu adalah seorang yang bijaksana (hushainah) dan penuh kebaikan?\" Rasulullah ﷺ bersabda, \"Wahai Hushain, sesungguhnya ayahku dan ayahmu berada di dalam neraka.",
      "Wahai Hushain, ada berapa tuhan yang engkau sembah saat ini?\" Hushain menjawab, \"Tujuh di bumi dan satu di langit.\" Beliau bertanya lagi, \"Maka apabila engkau ditimpa suatu kemudaratan (al-dhurr), siapakah yang engkau seru?\" Hushain menjawab, \"Dzat yang berada di langit.\" Beliau bertanya, \"Maka apabila hartamu binasa, siapakah yang engkau seru?\" Hushain menjawab, \"Dzat yang berada di langit.\" Beliau lalu bersabda, \"Maka Dia mengabulkan doamu semata sedangkan engkau justru menyekutukan-Nya dengan tuhan-tuhan itu di bumi?",
      "Apakah engkau telah rida kepada-Nya di dalam bersyukur, ataukah engkau takut Dia akan dikalahkan?\" Hushain berkata, \"Tidak ada satu pun dari kedua hal tersebut (aku tidak rida menyekutukan-Nya dan tuhan bumi tidak akan bisa mengalahkan-Nya).\" Hushain menceritakan perasaannya saat itu, \"Dan aku tahu bahwasanya aku belum pernah berbicara dengan orang yang semisal dengannya.\" Rasulullah ﷺ kemudian bersabda, \"Wahai Hushain, masuk Islamlah niscaya engkau akan selamat!\" Hushain berkata, \"Sesungguhnya aku memiliki kaum dan karabat, maka apa yang harus aku ucapkan?\" Beliau bersabda, \"Ucapkanlah: 'Ya Allah, aku memohon petunjuk-Mu demi kelurusan urusanku dan tambahkanlah ilmu yang bermanfaat kepadaku'.\" Hushain pun mengucapkan doa tersebut dan ia tidak bangkit dari tempatnya hingga akhirnya menyatakan masuk Islam.",
      "Begitu melihat ayahnya masuk Islam, Imran langsung bangkit mendekatinya lalu mencium kepala, kedua tangan, serta kedua kaki ayahnya. Ketika melihat apa yang dilakukan oleh Imran, Nabi Muhammad ﷺ menangis. Beliau bersabda: \"Aku menangis karena melihat apa yang diperbuat oleh Imran.",
      "Ketika Hushain masuk ke sini dalam kondisi kafir, Imran tidak bangkit mendekatinya dan tidak pula menoleh ke arahnya.",
      "Namun ketika ayahnya telah masuk Islam, ia segera menunaikan haknya, maka hal itulah yang membuat hatiku merasa terenyuh (al-riqqah).\" Ketika Hushain hendak keluar meninggalkan rumah beliau, Rasulullah ﷺ bersabda kepada para sahabatnya, \"Bangkitlah kalian semua, antarkanlah syekh ini sampai ke rumahnya!\" Begitu Hushain keluar melewati sela-sela pintu rumah, kaum Quraisy yang melihatnya langsung berseru, \"Dia telah berpaling mengikuti agamanya (shaba')!\" lalu mereka pun membubarkan diri meninggalkannya.",
      "Kisah keislaman Hushain ini tercantum di dalam kitab Al-Ishabah."
     ]
    },
    {
     "id": 31,
     "title": "Dakwah Rasulullah ﷺ Kepada Seorang Lelaki yang Tidak Disebutkan Namanya",
     "paragraphs": [
      "Imam Ahmad meriwayatkan dari Abu Tamimah al-Hujaimi, dari seorang lelaki dari kaumnya bahwasanya ia pernah mendatangi Rasulullah ﷺ —atau ia berkata, \"Aku menyaksikan Rasulullah ﷺ mendatangi seorang lelaki,\" lalu lelaki itu bertanya, \"Apakah engkau utusan Allah?\" atau ia bertanya, \"Apakah engkau Muhammad?\" Rasulullah ﷺ menjawab, \"Benar.\" Lelaki itu bertanya lagi, \"Kepada apa engkau mengajak?\" Rasulullah ﷺ bersabda: \"Aku mengajak kepada Allah 'Azza wa Jalla semata; Dzat yang apabila engkau ditimpa suatu kemudaratan lalu engkau berdoa kepada-Nya, niscaya Dia akan menghilangkan kemudaratan itu darimu; Dzat yang apabila engkau ditimpa tahun paceklik (kelaparan) lalu engkau berdoa kepada-Nya, niscaya Dia akan menumbuhkan tanaman untukmu; dan Dzat yang apabila engkau berada di tanah yang tandus tak berpenghuni lalu tungganganmu hilang, kemudian engkau berdoa kepada-Nya, niscaya Dia akan mengembalikan tungganganmu itu kepadamu.\" Mendengar penjelasan tersebut, lelaki itu pun masuk Islam, kemudian ia berkata, \"Berilah wasiat kepadaku, wahai Rasulullah.\" Rasulullah ﷺ bersabda, \"Jangan sekali-kali engkau mencaci maki sesuatu pun\"—atau beliau bersabda, \"seorang pun\" (perawi bernama Al-Hakam merasa ragu).",
      "Lelaki itu kemudian menceritakan dampak dari wasiat tersebut, \"Maka aku tidak pernah mencaci maki seekor unta maupun seekor domba pun sejak Rasulullah ﷺ memberikan wasiat itu kepadaku.\" Mengenai riwayat ini, Al-Haitsami memberikan catatan bahwa di dalam sanadnya terdapat perawi bernama Al-Hakam bin Fashil yang telah ditsiqahkan oleh Abu Dawud serta ulama lainnya, namun dilemahkan oleh Abu Zur'ah serta ulama lainnya, sedangkan sisa perawi yang lain merupakan perawi-perawi yang digunakan di dalam kitab Shahih al-Bukhari atau Shahih Muslim."
     ]
    },
    {
     "id": 32,
     "title": "Dakwah Rasulullah ﷺ Kepada Mu'awiyah bin Haidah",
     "paragraphs": [
      "Ibnu Abdil Barr meriwayatkan di dalam kitab Al-Isti'ab—dan ia mensahihkannya—dari Mu'awiyah bin Haidah al-Qusyairi raḍiyallāhu 'anhu, ia menceritakan: Aku pernah mendatangi Rasulullah ﷺ lalu berkata, \"Wahai Rasulullah, aku tidak pernah mendatangimu hingga aku sempat bersumpah menggunakan jumlah jari-jemari yang lebih banyak dari ini—seraya merapatkan kedua telapak tangannya yang satu di atas yang lain—bahwasanya aku tidak akan mendatangimu dan tidak akan mendatangi agamamu!",
      "Namun kini aku telah mendatangimu sebagai seorang pria yang tidak memahami sesuatu pun kecuali apa yang telah Allah ajarkan kepadaku.",
      "Sesungguhnya aku bertanya kepadamu demi Wajah Allah Yang Maha Agung, dengan membawa urusan apa Tuhan kami mengutusmu kepada kami?\" Rasulullah ﷺ bersabda, \"Dengan membawa agama Islam.\" Aku bertanya, \"Dan apa itu agama Islam?\" Rasulullah ﷺ bersabda: \"Engkau mengucapkan: 'Aku berserah diri kepada Allah dan aku melepaskan diri (dari kesyirikan)', engkau mendirikan shalat, dan engkau menunaikan zakat.",
      "Setiap muslim atas muslim yang lain adalah haram (darah, harta, dan kehormatannya); mereka adalah dua orang bersaudara yang saling membela. Allah tidak akan menerima suatu amalan dari orang yang berbuat syirik setelah ia masuk Islam, hingga ia memisahkan diri dari kaum musyrikin untuk bergabung dengan kaum muslimin.",
      "Mengapa aku memegang tali celana kalian agar kalian tidak jatuh ke dalam neraka?!",
      "Ketahuilah bahwasanya Tuhanku akan memanggilku dan sesungguhnya Dia akan bertanya kepadaku, 'Apakah engkau telah menyampaikan kepada hamba-hamba-Ku?' Maka aku akan menjawab, 'Wahai Tuhanku, sungguh aku telah menyampaikan.' Ketahuilah, maka hendaklah orang yang hadir di antara kalian menyampaikan kepada orang yang tidak hadir.",
      "Ketahuilah, kemudian sesungguhnya kalian akan dipanggil dalam kondisi mulut kalian disumbat dengan kain (al-fidam), kemudian sesungguhnya perkara pertama yang akan berbicara mengabarkan tentang diri salah seorang dari kalian adalah paha dan telapak tangannya.\" Mu'awiyah bin Haidah berkata, \"Aku bertanya, 'Wahai Rasulullah, apakah ini agama kita?' Beliau bersabda, 'Ini adalah agamamu, dan di mana saja engkau berbuat kebaikan, maka itu akan mencukupimu'\"—kemudian ia menyebutkan keseluruhan hadits ini.",
      "Ibnu Abdil Barr menegaskan bahwa ini adalah hadits yang shahih dengan sanad yang tetap lagi dikenal, dan sesungguhnya hadits ini milik Mu'awiyah bin Haidah, bukan milik Hakim ayah dari Mu'awiyah."
     ]
    },
    {
     "id": 33,
     "title": "Hadits Hakim Mengenai Utusan Allah",
     "paragraphs": [
      "Ibnu Abdil Barr menyebutkan sebelum hadits Mu'awiyah bin Haidah, terdapat sebuah riwayat yang menceritakan tentang Hakim (ayah Mu'awiyah) bahwasanya ia pernah bertanya, \"Wahai Rasulullah, dengan membawa urusan apa Tuhan kami mengutusmu?\" Rasulullah ﷺ bersabda, \"Engkau menyembah Allah dan tidak menyekutukan-Nya dengan sesuatu pun, engkau mendirikan shalat, menunaikan zakat, dan setiap muslim atas muslim yang lain adalah haram.",
      "Ini adalah agamamu, dan di mana pun engkau berada, maka itu akan mencukupimu.\" Demikianlah yang disebutkan oleh Ibnu Abi Khaitsamah, dan di atas sanad inilah ia menyandarkannya, padahal sanad tersebut berstatus dhaif, sebagaimana tercantum di dalam kitab Al-Isti'ab.",
      "Namun, Al-Hafiz Ibnu Hajar memberikan catatan di dalam kitab Al-Ishabah dengan menyatakan bahwa ada kemungkinan peristiwa ini terjadi pada kesempatan yang lain. Tidak menutup kemungkinan ada dua orang pria yang menyampaikan pertanyaan yang sama secara bersamaan, terlebih lagi jika jalur periwayatannya berbeda (tabayin al-makhraj).",
      "Hadits ini juga disebutkan oleh Ibnu Abi Ashim di dalam kitab Al-Wahdan, dan ia mengeluarkan hadits tersebut dari Abdul Wahhab bin Najdah (Al-Huthi) yang merupakan guru dari Ibnu Abi Khaitsamah dalam jalur periwayatan tersebut."
     ]
    },
    {
     "id": 34,
     "title": "Dakwah Rasulullah ﷺ Kepada Adi bin Hatim",
     "paragraphs": [
      "Imam Ahmad meriwayatkan dari Adi bin Hatim raḍiyallāhu 'anhu, ia menceritakan: Ketika kabar mengenai diutusnya Rasulullah ﷺ sampai kepadaku, aku merasa sangat benci terhadap urusan beliau. Maka aku pergi meninggalkan negeriku hingga aku tiba di wilayah Romawi—di dalam riwayat lain disebutkan hingga aku mendatangi Kaisar (raja Romawi).",
      "Namun ketika berada di sana, aku justru merasa sangat benci terhadap tempat tinggalku itu, melebihi kebencianku terhadap urusan Rasulullah ﷺ. Aku pun bergumam di dalam hati, \"Demi Allah, mengapa aku tidak mendatangi pria ini saja?",
      "Jika dia seorang pendusta, dia tidak akan membahayakanku, namun jika dia adalah seorang yang jujur, aku akan mengetahuinya.\" Maka aku segera berangkat hingga aku mendatangi Rasulullah ﷺ di Madinah. Begitu aku tiba, orang-orang di kota itu saling berseru, \"Adi bin Hatim telah datang!",
      "Adi bin Hatim telah datang!\" Aku lalu masuk menemui Rasulullah ﷺ, dan beliau bersabda kepadaku sebanyak tiga kali, \"Wahai Adi bin Hatim, masuk Islamlah engkau, niscaya engkau akan selamat!\" Aku menjawab, \"Sesungguhnya aku telah memeluk suatu agama.\" Rasulullah ﷺ bersabda, \"Aku jauh lebih mengetahui tentang agamamu daripada dirimu sendiri.\" Aku bertanya keheranan, \"Engkau lebih mengetahui tentang agamaku daripada aku sendiri?!\" Beliau bersabda, \"Benar, bukankah engkau adalah pemeluk agama Rakusiyyah (suatu agama di antara Nasrani dan Shabi'ah) sedangkan engkau sendiri memakan seperempat dari harta rampasan (miba') kaummu?\" Aku menjawab, \"Benar.\" Rasulullah ﷺ bersabda, \"Sesungguhnya perbuatan memakan harta itu tidak halal bagimu di dalam agamamu sendiri.\" Adi menceritakan bahwasanya begitu beliau mengucapkan kalimat itu, seketika itu juga aku langsung tunduk dan merasa rendah diri di hadapan beliau.",
      "Rasulullah ﷺ kemudian bersabda, \"Adapun sesungguhnya aku benar-benar mengetahui perkara apa yang menghalangimu untuk masuk Islam. Engkau pasti bergumam di dalam hatimu bahwasanya orang-orang yang mengikuti pria ini hanyalah orang-orang yang lemah di antara manusia, yaitu orang-orang yang tidak memiliki kekuatan dan mereka telah dilempari (dimusuhi) oleh bangsa Arab.",
      "Wahai Adi, apakah engkau tahu wilayah Al-Hirah?\" Aku menjawab, \"Aku belum pernah melihatnya secara langsung, namun aku telah mendengar kabarnya.\" Rasulullah ﷺ lalu bersabda: \"Maka demi Dzat yang jiwaku berada di tangan-Nya, sungguh Allah benar-benar akan menyempurnakan urusan (agama) ini, hingga seorang wanita yang mengendarai sekedup (al-zha'inah) dapat keluar melakukan perjalanan sendirian dari Al-Hirah sampai ia mengelilingi Ka'bah di Baitullah tanpa membutuhkan jaminan keamanan dari seorang pun!",
      "Dan sungguh, perbendaharaan harta milik Kisra bin Hurmuz benar-benar akan ditaklukkan!\" Aku bertanya terkejut, \"Perbendaharaan Kisra bin Hurmuz?\" Rasulullah ﷺ bersabda, \"Benar, Kisra bin Hurmuz!",
      "Dan sungguh, harta benar-benar akan dilimpahkan dengan sangat banyak hingga tidak ada seorang pun yang mau menerimanya lagi.\" Adi bin Hatim kemudian memberikan kesaksiannya setelah masa berlalu, \"Maka inilah dia wanita yang mengendarai sekedup benar-benar datang dari Al-Hirah lalu mengelilingi Ka'bah di Baitullah tanpa membutuhkan jaminan keamanan dari siapa pun.",
      "Dan sungguh, aku sendiri telah termasuk di dalam pasukan yang ikut serta menaklukkan perbendaharaan harta milik Kisra bin Hurmuz! Dan demi Dzat yang jiwaku berada di tangan-Nya, sungguh perkara yang ketiga (melimpahnya harta) benar-benar akan terjadi pula, karena sesungguhnya Rasulullah ﷺ telah menyabdakannya.\" Kisah ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 35,
     "title": "Pembebasan Tawanan Kaum Adi bin Hatim dan Keislamannya",
     "paragraphs": [
      "Imam Ahmad juga meriwayatkan dari Adi bin Hatim raḍiyallāhu 'anhu, ia menceritakan bahwasanya pasukan berkuda Rasulullah ﷺ pernah datang ketika ia sedang berada di wilayah Aqrab. Pasukan tersebut menawan bibinya beserta beberapa orang pria dari kaumnya.",
      "Ketika para tawanan itu dibawa dan dibariskan di hadapan Rasulullah ﷺ, bibi Adi bin Hatim berkata, \"Wahai Rasulullah, orang yang menjadi pelindungku (al-wāfid) telah menjauh, anakku telah terputus dariku, sedangkan aku hanyalah seorang wanita tua yang renta dan tidak lagi mampu memberikan pelayanan.",
      "Maka berikanlah kemurahan bagiku, niscaya Allah akan memberikan kemurahan kepadamu.\" Rasulullah ﷺ bertanya, \"Siapakah pelindungmu itu?\" Wanita tua itu menjawab, \"Adi bin Hatim.\" Beliau bersabda, \"Pria yang melarikan diri dari Allah dan utusan-Nya itu?\" Wanita tua itu kembali memohon, \"Maka berikanlah kemurahan bagiku.\" Adi menceritakan bahwasanya ketika Rasulullah ﷺ kembali berjalan, di samping beliau ada seorang pria—yang kami duga adalah Ali bin Abi Thalib raḍiyallāhu 'anhu—pria tersebut berbisik kepada sang bibi, \"Mintalah tunggangan kepadanya.\" Maka wanita tua itu meminta tunggangan, dan Rasulullah ﷺ langsung memerintahkan pasukannya untuk menyediakannya.",
      "Bibi Adi kemudian mendatangi keponakannya dan berkata, \"Sungguh engkau telah melakukan suatu perbuatan (melarikan diri) yang dahulu ayahmu saja tidak pernah melakukannya.\" Sang bibi memberikan nasihat, \"Datangilah pria itu dalam kondisi menyukai atau karena rasa takut, karena sesungguhnya si fulan telah mendatanginya lalu memperoleh kebaikan dari beliau, dan si fulan pun mendatanginya lalu memperoleh kebaikan pula.\" Adi bin Hatim melanjutkan kisahnya, \"Maka aku segera mendatangi Rasulullah ﷺ di Madinah, dan di sisi beliau aku melihat ada seorang wanita beserta anak-anak kecil—atau seorang anak kecil—yang berada dekat dengan beliau.",
      "Maka dari kedekatan mereka dengan beliau itu, aku langsung tahu bahwasanya dia bukanlah seorang raja seperti Kisra maupun Kaisar.\" Rasulullah ﷺ lalu bersabda kepada Adi, \"Wahai Adi bin Hatim, perkara apa yang membuatmu melarikan diri?! Apakah engkau melarikan diri karena enggan diucapkan: 'Lailaha illallah'? Maka apakah ada tuhan selain Allah?!",
      "Perkara apa yang membuatmu melarikan diri?! Apakah engkau melarikan diri karena enggan diucapkan: 'Allahu Akbar'?",
      "Maka apakah ada sesuatu yang lebih besar dari Allah 'Azza wa Jalla?!\" Adi menceritakan, \"Maka aku langsung menyatakan masuk Islam, lalu aku melihat wajah beliau seketika berseri-seri penuh kegembiraan.\" Rasulullah ﷺ kemudian bersabda: \"Sesungguhnya orang-orang yang dimurkai (al-maghḍūb 'alaihim) adalah kaum Yahudi, dan sesungguhnya orang-orang yang sesat (al-ḍāllīn) adalah kaum Nasrani.\" Adi bin Hatim mengisahkan, setelah itu orang-orang meminta pemberian (tarḍakhu) kepada beliau, maka Rasulullah ﷺ memuji Allah dan menyanjung-Nya, kemudian bersabda: \"Amma ba'du, wajib bagi kalian sekalian umat manusia untuk memberikan sedekah dari kelebihan harta kalian, meskipun seseorang bersedekah hanya dengan ukuran satu sha', setengah sha', segenggam, atau setengah genggam—Syubah (perawi) berkata: 'Dan seingatku beliau juga bersabda: dengan sebutir kurma atau belahan sebutir kurma'.",
      "Sesungguhnya salah seorang dari kalian kelak akan menghadap Allah, lalu Allah akan berfirman kepadanya tanpa ada penterjemah yang menerjemahkan perkataan-Ku: 'Bukankah Aku telah menjadikanmu bisa mendengar lagi bisa melihat? Bukankah Aku telah memberikan harta dan anak kepadamu?",
      "Maka perkara apa yang telah engkau siapkan untuk hari ini?' Orang itu lalu melihat ke arah depan, belakang, kanan, dan kirinya, namun ia tidak mendapati sesuatu pun, dan tidak ada yang dapat membentenginya dari api neraka kecuali wajahnya. Maka bentengilah diri kalian dari api neraka meskipun hanya dengan menyedekahkan belahan sebutir kurma.",
      "Jika kalian tidak mendapatinya, maka bentengilah dengan sepatah kata yang baik (bi-kalimatun thayyibah).",
      "Sesungguhnya aku tidak merasa khawatir atas kemiskinan (al-fāqah) yang akan menimpa kalian, karena sungguh Allah benar-benar akan menolong kalian dan memberikan karunia kepada kalian—atau menaklukkan negeri-negeri untuk kalian—hingga seorang wanita yang mengendarai sekedup dapat keluar melakukan perjalanan sendirian di antara Al-Hirah dan Yatsrib (Madinah), dan perkara yang paling ia takuti di sepanjang perjalanannya hanyalah gangguan pencuri (al-saraq) atas sekedupnya.\" Hadits mengenai keislaman Adi bin Hatim ini juga diriwayatkan oleh Imam At-Tirmidzi, dan ia memberikan catatan bahwasanya hadits ini berstatus hasan gharib yang tidak diketahui jalurnya kecuali dari hadits Simak.",
      "Al-Baihaqi juga mengeluarkan sebagian potongan di akhir hadits ini, dan Imam Al-Bukhari mengeluarkan riwayat ringkasnya. Keterangan ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 36,
     "title": "Dakwah Rasulullah ﷺ Kepada Dzu al-Jausyan ad-Dhababi",
     "paragraphs": [
      "At-Thabrani meriwayatkan dari Dzu al-Jausyan ad-Dhababi raḍiyallāhu 'anhu, ia menceritakan bahwasanya ia pernah mendatangi Nabi Muhammad ﷺ setelah beliau selesai dari Perang Badar. Saat itu, ia membawa seekor anak kuda milik kuda betinanya yang bernama Al-Qarha'.",
      "Dzu al-Jausyan berkata, \"Wahai Muhammad, sesungguhnya aku datang kepadamu dengan membawa anak Al-Qarha' agar engkau mau mengambilnya.\" Rasulullah ﷺ bersabda, \"Aku tidak memiliki kebutuhan terhadapnya, namun jika engkau mau, aku akan menukarnya (aqiiḍuka) dengan baju-baju besi pilihan dari rampasan Perang Badar.\" Dzu al-Jausyan menjawab, \"Aku tidak ingin menukarnya hari ini dengan seekor kuda pilihan (bi-ghurratin).\" Beliau bersabda, \"Aku tidak butuh terhadapnya.\" Rasulullah ﷺ kemudian bersabda kepadanya, \"Wahai Dzu al-Jausyan, maukah engkau masuk Islam sehingga engkau menjadi orang yang berada di awal urusan ini?\" Dzu al-Jausyan menjawab, \"Tidak.\" Beliau bertanya, \"Mengapa?\" Ia menjawab, \"Aku melihat kaummu telah meluapkan permusuhan (wuli'uu) kepadamu.\" Beliau bertanya lagi, \"Lalu bagaimana kabar yang sampai kepadamu mengenai tempat-tempat kebinasaan mereka di Perang Badar?\" Ia menjawab, \"Sungguh kabarnya telah sampai kepadaku.\" Beliau bersabda, \"Maka sesungguhnya kami akan diberi petunjuk untuk mengalahkanmu.\" Dzu al-Jausyan berkata, \"Jika engkau telah berhasil menang atas Ka'bah dan menetap di sana (taqthanuhaa).\" Rasulullah ﷺ bersabda, \"Barangkali jika engkau berumur panjang, engkau akan melihat hal itu.\" Rasulullah ﷺ kemudian bersabda, \"Wahai Bilal, ambillah kantong perbekalan (haqiibah) pria ini, lalu isilah dengan kurma ajwa sebagai bekal untuknya.\" Ketika Dzu al-Jausyan telah beranjak pergi, Rasulullah ﷺ bersabda, \"Adapun sesungguhnya dia termasuk salah satu penunggang kuda terbaik dari bani Amir.\" Dzu al-Jausyan menceritakan pembuktian dari sabda beliau, \"Maka demi Allah, ketika aku sedang berada bersama keluargaku di wilayah Al-Ghaur, tiba-tiba datanglah seorang pengendara.",
      "Aku bertanya kepadanya, 'Apa yang telah dilakukan oleh orang-orang?' Pengendara itu menjawab, 'Demi Allah, Muhammad benar-benar telah menang atas Ka'bah dan menetap di sana.' Maka aku langsung berseru, 'Ibu yang melahirkanku telah kehilangan aku (habilatni ummi), seandainya saja aku masuk Islam pada hari itu, kemudian aku meminta wilayah Al-Hirah kepadanya, niscaya dia akan memotong wilayah itu untuk diberikan kepadaku!'\" Di dalam riwayat lain disebutkan bahwasanya Nabi Muhammad ﷺ bersabda kepadanya, \"Perkara apa yang menghalangimu dari urusan ini?\" Dzu al-Jausyan menjawab, \"Aku melihat kaummu telah mendustakanmu, mengusirmu, dan memerangimu, maka aku akan menunggu apa yang akan engkau perbuat.",
      "Jika engkau berhasil menang atas mereka, aku akan beriman kepadamu dan mengikutimu, namun jika mereka yang menang atasmu, aku tidak akan mengikutimu.\" Mengenai riwayat ini, Al-Haitsami memberikan catatan di dalam kitab Al-Majma' bahwasanya hadits ini diriwayatkan oleh Abdullah bin Ahmad dan ayahnya—namun Imam Ahmad tidak menyebutkan redaksi teksnya—serta diriwayatkan pula oleh At-Thabrani, di mana para perawi dari mereka merupakan perawi-perawi yang digunakan di dalam kitab Shahih al-Bukhari atau Shahih Muslim.",
      "Jalur periwayatan ini berstatus terputus (munqathi') karena Abu Ishaq as-Sabi'i tidak mendengar langsung dari Dzu al-Jausyan. Selain itu, Imam Abu Dawud juga mengeluarkan sebagian potongan dari hadits ini."
     ]
    },
    {
     "id": 37,
     "title": "Dakwah Rasulullah ﷺ Kepada Basyir bin al-Khashashiyyah",
     "paragraphs": [
      "Ibnu Asakir meriwayatkan dari Basyir bin al-Khashashiyyah raḍiyallāhu 'anhu, ia menceritakan: Aku pernah mendatangi Rasulullah ﷺ lalu beliau mengajakku masuk ke dalam Islam. Beliau kemudian bertanya kepadaku, \"Siapa namamu?\" Aku menjawab, \"Nadhir.\" Beliau bersabda, \"Bukan, akan tetapi engkau adalah Basyir.\" Beliau lalu menempatkanku di emperan masjid (As-Suffah).",
      "Dahulu, apabila Rasulullah ﷺ mendapatkan hadiah, beliau akan berbagi bersama kami di dalamnya, dan apabila beliau mendapatkan zakat/sedekah, beliau akan menyalurkan semuanya kepada kami. Suatu malam, Rasulullah ﷺ keluar rumah lalu aku berjalan mengikuti di belakang beliau.",
      "Beliau mendatangi pekuburan Al-Baqi' lalu bersabda, \"Assalamu'alaikum dāra qaumin mu'minīn, wa innā bikum lāhiqūn, wa innā lillāhi wa innā ilaihi rāji'ūn.",
      "Sungguh, kalian telah memperoleh kebaikan yang banyak (bajīlan), dan kalian telah mendahului keburukan yang panjang.\" Beliau kemudian menoleh ke arahku dan bertanya, \"Siapa ini?\" Aku menjawab, \"Basyir.\" Beliau bersabda, \"Apakah engkau tidak rida bahwasanya Allah telah menuntun pendengaranmu, hatimu, dan penglihatanmu menuju Islam di antara kaum Rabi'ah al-Faras?",
      "Yaitu kaum yang mengklaim bahwasanya seandainya bukan karena mereka, niscaya bumi benar-benar akan bergoncang (tatafakkati) bersama penduduknya.\" Aku menjawab, \"Tentu, wahai Rasulullah.\" Beliau bertanya, \"Apa yang membuatmu datang ke sini?\" Aku menjawab, \"Aku merasa khawatir kalau-kalau engkau tersandung (tunkafa) atau ditimpa gangguan binatang melata dari binatang-binatang melata bumi.\" Di dalam riwayat lain milik Ibnu Asakir, At-Thabrani, dan Al-Baihaqi disebutkan bahwasanya beliau bersabda, \"Wahai Basyir, apakah engkau tidak memuji Allah; Dzat yang telah memegang ubun-ubunmu menuju Islam di antara kaum Rabi'ah?",
      "Yaitu kaum yang berpandangan bahwasanya seandainya bukan karena mereka, niscaya bumi benar-benar akan bergoncang bersama siapa saja yang ada di atasnya.\" Keterangan ini tercantum di dalam kitab Al-Muntakhab."
     ]
    },
    {
     "id": 38,
     "title": "Dakwah Rasulullah ﷺ Kepada Seorang Lelaki dari Bani Al-Adawiyyah",
     "paragraphs": [
      "Abu Ya'la meriwayatkan dari Harb bin Suraij, ia menceritakan: telah menceritakan kepadaku seorang lelaki dari bani Al-Adawiyyah, ia menceritakan: telah menceritakan kepadaku kakekku, ia berkisah: Aku pernah berangkat menuju Madinah lalu aku turun menetap di suatu lembah.",
      "Di sana, aku melihat ada dua orang pria yang berada di dekat seekor kambing betina, dan pembeli kambing itu berkata kepada sang penjual, \"Berbuat baiklah kepadaku di dalam transaksi jual beli ini.\" Kakekku menceritakan, \"Maka aku bergumam di dalam hatiku: 'Apakah pria Hasyimi ini yang diklaim telah menyesatkan manusia?",
      "Apakah dia orangnya?'\" Kakekku berkisah, \"Lalu aku memperhatikan penampilannya; ternyata dia adalah sesosok pria yang berwajah tampan, dahinya lebar, hidungnya mancung, kedua alisnya tipis, dan di antara lubang lehernya sampai pusatnya terdapat bulu-bulu tipis berwarna hitam yang tumbuh memanjang seperti garis hitam, dan saat itu dia sedang mengenakan dua helai pakaian usang (thimrain).\" Kakekku melanjutkan, \"Pria itu kemudian mendekat ke arah kami lalu mengucapkan: 'Assalamu'alaikum', maka kami pun menjawab salamnya.",
      "Tidak lama kemudian, sang pembeli memanggilnya dan berkata, 'Wahai Rasulullah, katakanlah kepadanya agar ia berbuat baik kepadaku di dalam jual beli ini.' Beliau lalu mengulurkan tangannya dan bersabda: 'Harta-harta kalian adalah milik kalian yang kalian kuasai.",
      "Sesungguhnya aku berharap untuk menghadap Allah 'Azza wa Jalla pada hari kiamat kelak dalam kondisi tidak ada seorang pun di antara kalian yang menuntutku atas suatu kezaliman yang aku lakukan kepadanya, baik di dalam urusan harta, darah, maupun kehormatan, kecuali dengan haknya.",
      "Semoga Allah merahmati seorang pria yang bersikap mudah saat menjual, mudah saat membeli, mudah saat mengambil, mudah saat memberi, mudah saat melunasi, dan mudah saat menagih', kemudian beliau berlalu pergi.\" Kakekku menceritakan, \"Maka aku bergumam: 'Demi Allah, sungguh aku benar-benar akan memutuskan urusan ini, karena sesungguhnya pria itu memiliki perkataan yang sangat baik.' Aku pun berjalan mengikuti di belakang beliau lalu memanggil, 'Wahai Muhammad!' Beliau langsung memutar seluruh tubuhnya menghadap ke arahku lalu bersabda, 'Apa yang engkau inginkan?' Aku bertanya, 'Apakah engkau orang yang telah menyesatkan manusia, membinasakan mereka, dan menghalangi mereka dari apa yang dahulu disembah oleh nenek moyang mereka?' Beliau bersabda, 'Urusan itu milik Allah.' Aku bertanya, 'Kepada apa engkau mengajak?' Beliau bersabda, 'Aku mengajak hamba-hamba Allah kepada Allah.' Aku bertanya lagi, 'Apa yang engkau katakan?' Beliau bersabda, 'Engkau bersaksi bahwa tidak ada tuhan selain Allah dan bahwasanya aku, Muhammad, adalah utusan Allah, engkau beriman kepada apa yang diturunkan kepadaku, engkau mengingkari Al-Lat dan Al-Uzza, engkau mendirikan shalat, dan engkau menunaikan zakat.' Aku bertanya, 'Dan apa itu zakat?' Beliau bersabda, 'Harta yang diambil dari orang kaya di antara kami lalu dikembalikan kepada orang miskin di antara kami.' Aku pun berkata, 'Alangkah baiknya urusan yang engkau serukan itu.'\" Kakekku mengisahkan perubahan hatinya, \"Maka demi Allah, sebelum itu tidak ada seorang pun di atas bumi ini yang lebih aku benci daripada dia, namun aku tidak beranjak dari tempatku bersamanya hingga akhirnya dia menjadi orang yang paling aku cintai melebihi anakku, orang tuaku, dan seluruh umat manusia.\" Kakekku menceritakan, \"Maka aku berkata, 'Sungguh aku telah mengetahuinya.' Beliau bersabda, 'Engkau telah mengetahuinya?' Aku menjawab, 'Benar.' Beliau bersabda, 'Engkau bersaksi bahwa tidak ada tuhan selain Allah dan bahwasanya aku, Muhammad, adalah utusan Allah, serta engkau beriman kepada apa yang diturunkan kepadaku?' Aku menjawab, 'Benar, wahai Rasulullah.",
      "Sesungguhnya aku akan kembali menuju suatu sumber air yang di sana terdapat banyak manusia, maka aku akan mengajak mereka kepada apa yang engkau serukan kepadaku ini, karena sesungguhnya aku berharap mereka akan mengikutimu.' Beliau bersabda, 'Benar, maka serulah mereka.'\" Maka setelah itu, seluruh penduduk di sekitar sumber air tersebut masuk Islam, baik pria maupun wanita mereka, lalu Rasulullah ﷺ mengusap kepala kakekku.",
      "Mengenai riwayat ini, Al-Haitsami memberikan catatan bahwasanya di dalam sanadnya terdapat seorang perawi yang tidak disebutkan namanya, sedangkan sisa perawi yang lain telah ditsiqahkan."
     ]
    },
    {
     "id": 39,
     "title": "Dakwah Rasulullah ﷺ Kepada Seorang Lelaki dari Bani an-Najjar",
     "paragraphs": [
      "Imam Ahmad meriwayatkan dari Anas bin Malik raḍiyallāhu 'anhu, ia menceritakan bahwasanya Nabi Muhammad ﷺ pernah masuk menemui seorang lelaki dari bani an-Najjar untuk menjenguknya.",
      "Rasulullah ﷺ lalu bersabda kepadanya, \"Wahai paman dari jalur ibu (khāl), ucapkanlah: Lailaha illallah'.\" Lelaki itu bertanya, \"Apakah aku paman dari jalur ibu atau paman dari jalur ayah ('amm)?\" Nabi Muhammad ﷺ bersabda, \"Bukan, akan tetapi engkau adalah paman dari jalur ibu.\" Lelaki itu bertanya lagi, \"Apakah mengucapkan kalimat itu baik untukku?\" Beliau bersabda, \"Benar.\" Mengenai riwayat ini, Al-Haitsami memberikan catatan di dalam kitab Al-Majma' bahwasanya hadits ini diriwayatkan oleh Imam Ahmad dan para perawinya merupakan perawi-perawi yang digunakan di dalam kitab Shahih al-Bukhari atau Shahih Muslim."
     ]
    },
    {
     "id": 40,
     "title": "Keislaman Seorang Anak Laki-Laki Yahudi yang Menjadi Pelayan Nabi ﷺ",
     "paragraphs": [
      "Imam Al-Bukhari dan Imam Abu Dawud meriwayatkan dari Anas bin Malik raḍiyallāhu 'anhu, ia menceritakan bahwasanya dahulu ada seorang anak laki-laki dari kalangan Yahudi yang biasa menjadi pelayan Nabi Muhammad ﷺ. Suatu hari anak laki-laki itu jatuh sakit, maka Nabi Muhammad ﷺ datang untuk menjenguknya.",
      "Beliau lalu duduk di dekat bagian kepalanya dan bersabda kepadanya, \"Masuk Islamlah engkau.\" Anak laki-laki itu kemudian memandangi ayahnya yang saat itu sedang berada di sisinya, lalu sang ayah berkata kepadanya, \"Taatilah Abu al-Qasim (Rasulullah ﷺ ).\" Maka anak laki-laki itu pun langsung menyatakan masuk Islam.",
      "Setelah itu, Nabi Muhammad ﷺ keluar rumah sambil bersabda: \"Segala puji bagi Allah; Dzat yang telah menyelamatkannya dari api neraka.\" Keterangan mengenai peristiwa ini tercantum di dalam kitab Jam'u al-Fawa'id."
     ]
    },
    {
     "id": 41,
     "title": "Dakwah Rasulullah ﷺ Kepada Seseorang yang Merasa Enggan",
     "paragraphs": [
      "Imam Ahmad dan Imam Abu Ya'la meriwayatkan dari Anas bin Malik raḍiyallāhu 'anhu bahwasanya Nabi Muhammad ﷺ pernah bersabda kepada seorang lelaki, \"Masuk Islamlah engkau, niscaya engkau akan selamat.\" Lelaki itu menjawab, \"Sesungguhnya aku mendapati diriku berada dalam kondisi merasa enggan (kārihan).\" Rasulullah ﷺ bersabda, \"Meskipun engkau berada dalam kondisi merasa enggan.\" Mengenai riwayat ini, Al-Haitsami memberikan catatan bahwasanya para perawi dari Imam Ahmad dan Abu Ya'la merupakan perawi-perawi yang digunakan di dalam kitab Shahih al-Bukhari atau Shahih Muslim."
     ]
    },
    {
     "id": 42,
     "title": "Dakwah Rasulullah ﷺ Kepada Abu Quhafah",
     "paragraphs": [
      "At-Thabrani meriwayatkan dari Asma' binti Abu Bakar radhiyallāhu 'anha, ia menceritakan bahwasanya pada hari Pembebasan Kota Mekah (Yaum al-Fath), Rasulullah ﷺ pernah bersabda kepada Abu Quhafah (ayah Abu Bakar), \"Masuk Islamlah engkau, niscaya engkau akan selamat.\" Maka setelah itu ia pun masuk Islam.",
      "Mengenai riwayat ini, Al-Haitsami memberikan catatan bahwasanya para perawinya merupakan perawi-perawi yang digunakan di dalam kitab Shahih al-Bukhari atau Shahih Muslim.",
      "Sementara itu, Ibnu Sa'ad juga mengeluarkan riwayat dari Asma' binti Abu Bakar radhiyallāhu 'anha, ia menceritakan: ketika Rasulullah ﷺ telah memasuki kota Mekah dan urusan telah menjadi tenang, beliau duduk di dalam masjid. Tidak lama kemudian, Abu Bakar datang menemui beliau sambil menuntun ayahnya, Abu Quhafah.",
      "Begitu Rasulullah ﷺ melihatnya, beliau bersabda, \"Wahai Abu Bakar, mengapa tidak engkau biarkan saja syekh (orang tua) ini di rumahnya hingga akulah yang berjalan mendatanginya?\" Abu Bakar menjawab, \"Wahai Rasulullah, dia jauh lebih berhak untuk berjalan mendatangimu daripada engkau yang berjalan mendatanginya.\" Rasulullah ﷺ kemudian mendudukkan Abu Quhafah di hadapan beliau, lalu beliau meletakkan tangan beliau di atas bagian dadanya (jantungnya) dan bersabda, \"Wahai Abu Quhafah, masuk Islamlah engkau, niscaya engkau akan selamat.\" Asma' menceritakan bahwasanya setelah itu ayahnya langsung menyatakan masuk Islam dan memberikan kesaksian di atas persaksian yang benar.",
      "Asma' mengisahkan bahwasanya ketika ayahnya dibawa masuk menemui beliau, rambut di bagian kepala dan jenggotnya telah memutih seluruhnya seolah-olah seperti tanaman yang bunga dan buahnya berwarna putih (tsaghāmah). Maka Rasulullah ﷺ bersabda: \"Ubahlah uban ini oleh kalian dan jauhkanlah ia dari warna hitam.\""
     ]
    },
    {
     "id": 43,
     "title": "Dakwah Rasulullah ﷺ Kepada Abu Jahl",
     "paragraphs": [
      "Al-Baihaqi meriwayatkan dari Al-Mughirah bin Syu'bah raḍiyallāhu 'anhu, ia menceritakan bahwasanya hari pertama kali ia mengenali Rasulullah ﷺ adalah ketika ia sedang berjalan bersama Abu Jahl bin Hisyam di salah satu jalanan kota Mekah. Tiba-tiba, mereka berdua bertemu dengan Rasulullah ﷺ.",
      "Rasulullah ﷺ lalu bersabda kepada Abu Jahl, \"Wahai Abu al-Hakam, kemarilah menuju Allah dan menuju Rasul-Nya. Aku mengajakmu kepada Allah.\" Mendengar ajakan tersebut, Abu Jahl menjawab, \"Wahai Muhammad, apakah engkau tidak mau berhenti dari mencela tuhan-tuhan kami?!",
      "Apakah engkau tidak menginginkan apa-apa melainkan agar kami bersaksi bahwasanya engkau benar-benar telah menyampaikan risalah?! Maka kami bersaksi bahwasanya engkau telah menyampaikan.",
      "Demi Allah, seandainya aku tahu bahwa apa yang engkau katakan itu adalah suatu kebenaran, niscaya aku pasti telah mengikutimu.\" Setelah Abu Jahl menyampaikan penolakannya, Rasulullah ﷺ pun beranjak pergi. Abu Jahl kemudian menoleh kepada Al-Mughirah dan berkata, \"Demi Allah, sesungguhnya aku benar-benar mengetahui bahwasanya apa yang dikatakannya itu adalah suatu kebenaran.",
      "Akan tetapi, ada suatu perkara yang menghalangiku: dahulu bani Qushay berkata, 'Urusan menjaga Ka'bah (al-hijabah) ada pada kami,' maka kami menjawab, 'Ya.' Kemudian mereka berkata, 'Urusan memberi minum jemaah haji (al-siqayah) ada pada kami,' maka kami menjawab, 'Ya.' Kemudian mereka berkata, 'Urusan tempat musyawarah (al-nadwah) ada pada kami,' maka kami menjawab, 'Ya.' Kemudian mereka berkata, 'Urusan panji perang (al-liwa') ada pada kami,' maka kami menjawab, 'Ya.' Selanjutnya, mereka memberi makan dan kami pun memberi makan, hingga ketika unta-unta kendaraan telah saling mendekat (tahakat al-rukab), mereka tiba-tiba berkata, 'Dari kalangan kami ada seorang nabi.' Demi Allah, aku tidak akan melakukannya (tidak akan sudi mengikutinya)!\" Kisah ini tercantum di dalam kitab Al-Bidayah.",
      "Hadits ini juga dikeluarkan oleh Ibnu Abi Syaibah dengan redaksi yang serupa di dalam kitab Al-Mushannaf, sebagaimana tercantum di dalam kitab Kanz al-Ummal. Di dalam riwayat tersebut, sabda beliau berbunyi, \"Wahai Abu al-Hakam, kemarilah menuju Allah, menuju Rasul-Nya, dan menuju Kitab-Nya. Aku mengajakmu kepada Allah.\""
     ]
    },
    {
     "id": 44,
     "title": "Dakwah Rasulullah ﷺ Kepada Al-Walid bin al-Mughirah",
     "paragraphs": [
      "Ishaq bin Rahawaih meriwayatkan dari Ibnu Abbas radhiyallāhu 'anhuma bahwasanya Al-Walid bin al-Mughirah pernah datang menemui Rasulullah ﷺ. Rasulullah ﷺ kemudian membacakan Al-Qur'an kepadanya, lalu seolah-olah hati Al-Walid menjadi luluh (raqqa lahu) setelah mendengar bacaan tersebut. Kabar mengenai luluh dan condongnya hati Al-Walid akhirnya sampai kepada Abu Jahl.",
      "Maka Abu Jahl segera mendatangi rumahnya dan berkata, \"Wahai paman, sesungguhnya kaummu ingin mengumpulkan sebagian dari harta mereka untukmu.\" Al-Walid bertanya, \"Untuk apa?\" Abu Jahl menjawab, \"Untuk mereka berikan kepadamu, karena sesungguhnya engkau telah mendatangi Muhammad untuk memohon apa yang ada di sisinya.\" Al-Walid menanggapi, \"Sungguh kaum Quraisy telah mengetahui bahwasanya aku adalah salah satu orang yang paling banyak hartanya di antara mereka.\" Abu Jahl lalu mendesak, \"Maka katakanlah sebuah perkataan mengenai dirinya yang dapat sampai kepada kaummu, yang menunjukkan bahwasanya engkau adalah orang yang mengingkarinya.\" Al-Walid berkata, \"Dan apa yang harus aku katakan?",
      "Maka demi Allah, tidak ada seorang pria pun di antara kalian yang lebih mengetahui tentang syair-syair daripada aku, tidak ada yang lebih tahu tentang rajaz-rajaznya, qasidah-qasidahnya, dan tidak pula tentang syair-syair jin daripada aku! Demi Allah, sesungguhnya perkataan yang diucapkannya itu sama sekali tidak menyerupai satu pun dari semua hal ini.",
      "Dan demi Allah, sesungguhnya perkataan yang diucapkannya itu benar-benar memiliki rasa manis (halaawah), sesungguhnya di atasnya terdapat keindahan (thalawah), sesungguhnya bagian atasnya benar-benar berbuah, bagian bawahnya benar-benar melimpah, sesungguhnya perkataan itu benar-benar tinggi dan tidak ada yang dapat meninggikannya, dan sesungguhnya perkataan itu benar-benar menghancurkan apa saja yang ada di bawahnya!\" Abu Jahl kembali berkata, \"Kaummu tidak akan pernah rida kepadamu sampai engkau mengatakan suatu perkataan yang mencelanya.\" Al-Walid berkata, \"Biarkanlah aku sejenak sampai aku memikirkannya.\" Setelah ia berpikir, ia berkata, \"Sesungguhnya ini tidak lain hanyalah sihir yang dipelajari, yang ia pelajari dari orang lain.\" Maka sehubungan dengan peristiwa tersebut, Allah SWT menurunkan firman-Nya: \"Biarkanlah Aku bertindak terhadap orang yang Aku telah menciptakannya dalam keadaan sendiri.",
      "Dan Aku jadikan baginya harta benda yang melimpah, dan anak-anak yang selalu bersama dia...\" (QS. Al-Muddassir: 11-13) hingga akhir ayat-ayat tersebut. Kisah ini diriwayatkan seperti itu oleh Al-Baihaqi dari Al-Hakim, dari Abdullah bin Muhammad as-San'ani di Mekah, dari Ishaq (yaitu Ishaq bin Ibrahim).",
      "Hadits ini juga diriwayatkan oleh Hammad bin Zaid, dari Ayyub, dari Ikrimah secara mursal, di mana di dalam riwayat tersebut dikisahkan bahwasanya Rasulullah ﷺ membacakan ayat kepadanya yang berbunyi: \"Sesungguhnya Allah menyuruh (kalian) berlaku adil dan berbuat kebajikan, memberi kepada kaum kerabat, dan Allah melarang dari perbuatan keji, kemungkaran, dan permusuhan.",
      "Dia memberi pengajaran kepada kalian agar kalian dapat mengambil pelajaran.\" (QS. An-Nahl: 90). Keterangan ini tercantum di dalam kitab Al-Bidayah, dan Ibnu Jarir juga mengeluarkannya dari Ikrimah sebagaimana disebutkan dalam Tafsir Ibnu Katsir."
     ]
    },
    {
     "id": 45,
     "title": "Dakwah Rasulullah ﷺ Kepada Utbah bin Rabi'ah",
     "paragraphs": [
      "Al-Baihaqi meriwayatkan dari Jabir bin Abdullah raḍiyallāhu 'anhu, ia menceritakan bahwasanya kaum Quraisy pada suatu hari berkumpul, lalu mereka berkata, \"Carilah seorang pria di antara kalian yang paling mengetahui tentang sihir, perdukunan, dan syair, kemudian biarkan dia mendatangi pria ini (Nabi Muhammad ﷺ ) yang telah memecah belah persatuan kita, mencerai-beraikan urusan kita, dan mencela agama kita.",
      "Hendaklah ia berbicara kepadanya dan kita lihat apa yang akan ia jawab.\" Maka mereka semua berkata, \"Kami tidak mengetahui ada orang yang tepat selain Utbah bin Rabi'ah.\" Mereka pun berkata kepada Utbah, \"Pergilah engkau, wahai Abu al-Walid!\" Maka Utbah segera pergi menemui Rasulullah ﷺ lalu berkata, \"Wahai Muhammad, apakah engkau lebih baik daripada Abdullah (ayahmu)?\" Rasulullah ﷺ terdiam tidak menjawab.",
      "Utbah bertanya lagi, \"Apakah engkau lebih baik daripada Abdul Muthalib (kakekmu)?\" Rasulullah ﷺ tetap terdiam. Utbah kemudian berkata, \"Jika engkau mengklaim bahwasanya mereka itu lebih baik darimu, sungguh mereka telah menyembah tuhan-tuhan yang engkau cela ini.",
      "Namun jika engkau mengklaim bahwasanya engkau lebih baik daripada mereka, maka berbicaralah sampai kami dapat mendengar perkataanmu! Demi Allah, sesungguhnya kami belum pernah melihat seekor anak musang (saqhlah) pun yang membawa kesialan bagi kaumnya melebihi dirimu!",
      "Engkau telah memecah belah persatuan kami, mencerai-beraikan urusan kami, mencela agama kami, dan mempermalukan kami di hadapan bangsa Arab hingga tersebar kabar di tengah-tengah mereka bahwasanya di dalam kabilah Quraisy terdapat seorang penyihir, dan di dalam kabilah Quraisy terdapat seorang dukun.",
      "Demi Allah, tidak ada yang kami tunggu di kota ini melainkan seperti pekikan suara satu kali masak (shaihatul-hubla), hingga sebagian dari kami akan saling menghunuskan pedang kepada sebagian yang lain sampai kami saling membinasakan!",
      "Wahai pria, jika yang engkau inginkan dari urusan ini adalah harta, kami akan mengumpulkan harta kami untukmu hingga engkau menjadi orang yang paling kaya di antara kabilah Quraisy. Jika yang engkau inginkan adalah kedudukan, kami akan mengangkatmu sebagai pemimpin kami.",
      "Dan jika engkau membutuhkan wanita, pilihlah wanita mana saja dari putri-putri kabilah Quraisy yang engkau sukai, maka kami akan menikahkanmu dengan sepuluh wanita sekaligus.\" Setelah Utbah selesai menyampaikan seluruh perkataannya, Rasulullah ﷺ bersabda, \"Apakah engkau telah selesai, wahai Abu al-Walid?\" Utbah menjawab, \"Ya, sudah.\" Rasulullah ﷺ kemudian bersabda: \"Bismillahirrahmanirrahim.",
      "Haa Miim. Diturunkan dari Tuhan Yang Maha Pengasih lagi Maha Penyayang.",
      "Kitab yang dijelaskan ayat-ayatnya, yakni Al-Qur'an dalam bahasa Arab, bagi kaum yang mengetahui...\" Rasulullah ﷺ terus melanjutkan bacaannya hingga sampai pada firman Allah SWT: \"Jika mereka berpaling maka katakanlah: 'Aku telah memperingatkan kalian dengan petir seperti petir yang menimpa kaum 'Ad dan kaum Tsamud'.\" (QS. Fussilat: 1-13).",
      "Mendengar ancaman ayat tersebut, Utbah bin Rabi'ah langsung ketakutan dan segera meletakkan tangannya di atas mulut Rasulullah ﷺ seraya memohon dengan sangat, \"Aku memohon kepadamu demi hubungan kekerabatan (ar-rahim) di antara kita agar engkau menahan bacaanmu!\" Setelah peristiwa itu, Utbah segera beranjak pergi meninggalkan beliau dalam kondisi ketakutan dan ia tidak keluar lagi menemui kaumnya.",
      "Keabsenannya membuat kaum Quraisy bergumam, \"Kami tidak melihat Abu al-Walid melainkan dia benar-benar telah condong mengikuti agamanya (shaba'a) dan makanan yang ada di sisi Muhammad telah membuatnya tertarik. Urusan ini tidak lain terjadi karena dia sedang tertimpa kesusahan harta.\" Maka mereka pun bangkit bersama-sama lalu mendatangi rumah Utbah.",
      "Begitu mereka masuk, mereka berkata, \"Wahai Abu al-Walid, demi Allah, kami tidak datang mendatangi rumahmu ini melainkan karena kami tahu bahwasanya engkau telah condong mengikuti agama Muhammad dan perkara itu telah membuatmu tertarik.",
      "Jika engkau sedang memiliki kebutuhan harta, kami akan mengumpulkan harta kami demi memenuhi kebutuhanmu agar engkau tidak perlu meminta-minta kepada Muhammad.\" Mendengar tuduhan itu, Utbah menjadi sangat marah dan ia bersumpah demi Allah bahwasanya ia tidak akan pernah berbicara kepada Muhammad untuk selama-lamanya.",
      "Utbah kemudian berkata, \"Kalian semua telah mengetahui bahwasanya aku adalah salah satu orang yang paling kaya di antara kabilah Quraisy. Akan tetapi, ketahuilah bahwasanya aku telah mendatangi pria itu, lalu dia membacakan kepadaku sebuah perkataan; demi Allah, perkataan itu sama sekali bukanlah syair, bukanlah sihir, dan bukanlah pula perdukunan! Dia membacakan: 'Haa Miim.",
      "Diturunkan dari Tuhan Yang Maha Pengasih lagi Maha Penyayang...' sampai dia mencapai firman-Nya: 'Aku telah memperingatkan kalian dengan petir seperti petir yang menimpa kaum 'Ad dan kaum Tsamud'.",
      "Maka aku segera meletakkan tanganku di atas mulutnya dan aku memohon kepadanya demi hubungan kekerabatan agar dia menahan bacaannya, karena kalian sendiri telah mengetahui bahwasanya Muhammad itu apabila berbicara, dia sama sekali tidak pernah berdusta!",
      "Oleh karena itulah, aku menjadi sangat takut kalau-kalau azab petir itu benar-benar akan diturunkan menimpa kalian semua!\" Kisah ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 46,
     "title": "Dakwah Rasulullah ﷺ Kepada Sekelompok Tokoh Quraisy di Dekat Ka'bah",
     "paragraphs": [
      "Ibnu Ishaq meriwayatkan dari Ibnu Abbas radhiyallāhu 'anhuma, ia menceritakan bahwasanya para pemuka kaum Quraisy pernah berkumpul di dekat Ka'bah setelah matahari terbenam.",
      "Di antara mereka yang hadir adalah Utbah bin Rabi'ah, Syaibah bin Rabi'ah, Abu Sufyan bin Harb, An-Nadhar bin al-Harits, Abul Bukhturi bin Hisyam, Al-Aswad bin al-Muthalib, Zam'ah bin al-Aswad, Al-Walid bin al-Mughirah, Abu Jahl bin Hisyam, Abdullah bin Abi Umayyah, Al-Aash bin Wa'il, Nubaih bin al-Hajjaj, Munabbih bin al-Hajjaj, dan Umayyah bin Khalaf.",
      "Mereka saling berkata satu sama lain, \"Kirimlah utusan kepada Muhammad, ajaklah dia berbicara, dan berdebatlah dengannya hingga kalian memiliki hujah yang jelas atas dirinya.\" Maka mereka mengirim utusan kepadanya dengan pesan, \"Sesungguhnya para pemuka kaummu telah berkumpul untuk berbicara bersamamu, maka kemarilah menemui mereka.\" Rasulullah ﷺ pun segera mendatangi mereka dengan cepat, karena beliau mengira bahwasanya telah tampak suatu pandangan baru dari mereka terkait urusan dakwah beliau.",
      "Beliau memang sangat menginginkan agar mereka mendapatkan petunjuk, dan penolakan mereka selama ini terasa berat bagi beliau. Setelah beliau duduk bersama mereka, mereka berkata, \"Wahai Muhammad, sesungguhnya kami mengirim utusan kepadamu untuk berbicara bersamamu.",
      "Demi Allah, kami tidak mengetahui ada seorang pria pun dari bangsa Arab yang membawa perkara buruk bagi kaumnya melebihi apa yang telah engkau bawa bagi kaummu! Engkau telah mencela nenek moyang, mencaci agama, menganggap bodoh akal pikiran, memaki tuhan-tuhan, dan memecah belah persatuan.",
      "Tidak ada satu pun perkara buruk melainkan engkau telah menjadikannya ada di antara kami dan dirimu.\" Mereka melanjutkan, \"Maka jika urusan yang engkau bawa ini bertujuan untuk mencari harta, kami akan mengumpulkan harta kami untukmu hingga engkau menjadi orang yang paling kaya di antara kami.",
      "Jika engkau mencari kedudukan di tengah-tengah kami, kami akan mengangkatmu sebagai pemimpin kami. Jika engkau menginginkan kekuasaan kerajaan, kami akan mengangkatmu sebagai raja kami.",
      "Dan jika perkara yang mendatangi dirimu ini adalah karena gangguan jin yang menguasai dirimu—di mana kalian menyebutnya sebagai penglihatan (ri'yan)—dan engkau tidak mampu mengusirnya dari dirimu, maka kami akan mencarikan tabib untukmu dan kami rela menghabiskan harta kami demi mengobatimu hingga engkau sembuh, atau kami memiliki hujah yang jelas atas dirimu.\" Rasulullah ﷺ kemudian bersabda kepada mereka: \"Tidak ada satu pun dari apa yang kalian katakan itu ada pada diriku.",
      "Aku tidak mendatangi kalian dengan membawa apa yang aku bawa ini karena ingin mencari harta kalian, tidak pula mencari kedudukan di tengah-tengah kalian, dan bukan pula mencari kekuasaan kerajaan atas kalian.",
      "Akan tetapi, Allah telah mengutusku kepada kalian sebagai seorang rasul, menurunkan sebuah Kitab kepadaku, dan memerintahkan aku agar menjadi pembawa kabar gembira (basyīran) sekaligus pemberi peringatan (nadzīran) bagi kalian. Maka aku telah menyampaikan risalah-risalah Tuhanku kepada kalian dan aku telah menasihati kalian.",
      "Jika kalian mau menerima apa yang aku bawa kepada kalian, maka itu akan menjadi bagian keberuntungan kalian di dunia dan di akhirat. Namun jika kalian menolaknya dariku, aku akan bersabar menghadapi perintah Allah hingga Allah memutuskan perkara di antara aku dan kalian.\" Kisah perdebatan di dekat Ka'bah ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 47,
     "title": "Tuntutan Mukjizat Kaum Quraisy Kepada Rasulullah ﷺ",
     "paragraphs": [
      "Para tokoh Quraisy kemudian berkata, \"Wahai Muhammad, jika engkau tidak mau menerima satu pun penawaran yang kami sampaikan kepadamu, maka sesungguhnya engkau telah mengetahui bahwasanya tidak ada manusia yang negerinya lebih sempit daripada kami, tidak ada yang airnya lebih sedikit daripada kami, dan tidak ada yang kehidupannya lebih keras daripada kami.",
      "Maka mintalah kepada Tuhanmu yang telah mengutusmu dengan membawa urusan ini, agar Dia menjauhkan gunung-gunung yang telah menyempitkan negeri kami ini dari kami, serta membentangkan negeri kami. Dan hendaklah Dia memancarkan sungai-sungai di dalamnya seperti sungai-sungai di Syam dan Irak.",
      "Serta mintalah agar Dia membangkitkan nenek moyang kami yang telah mati untuk kami, dan hendaklah di antara orang yang dibangkitkan itu terdapat Qushay bin Kilab, karena dia adalah seorang syekh yang jujur, agar kami dapat bertanya kepadanya tentang apa yang engkau katakan ini, apakah itu benar atau batil?\" Mereka melanjutkan, \"Jika engkau melakukan apa yang kami minta dan mereka membenarkanmu, maka kami pun akan membenarkanmu, dan dari situ kami akan mengetahui kedudukanmu di sisi Allah, serta bahwasanya Dia benar-benar telah mengutusmu sebagai seorang rasul sebagaimana yang engkau katakan.\" Rasulullah ﷺ bersabda kepada mereka, \"Bukan dengan urusan ini aku diutus kepada kalian.",
      "Akan tetapi, aku mendatangi kalian dari sisi Allah dengan membawa apa yang Dia utus bersamaku, dan sungguh aku telah menyampaikan risalah-risalah-Nya kepada kalian. Jika kalian menerimanya, maka itu akan menjadi bagian keberuntungan kalian di dunia dan akhirat.",
      "Namun jika kalian menolaknya dariku, aku akan bersabar menghadapi perintah Allah hingga Allah memutuskan perkara di antara aku dan kalian.\" Para tokoh Quraisy kembali berkata, \"Jika engkau tidak mau melakukan perkara itu untuk kami, maka mintalah untuk dirimu sendiri.",
      "Mintalah agar Tuhanmu mengutus seorang malaikat bersamamu yang akan membenarkan apa yang engkau katakan dan membela dirimu dari kami. Dan mintalah kepada-Nya agar Dia menjadikan untukmu kebun-kebun, istana-istana, serta perbendaharaan harta dari emas dan perak yang dapat mencukupimu dari apa yang kami lihat engkau mencarinya.",
      "Karena sesungguhnya engkau sekarang ini berdiri di pasar-pasar dan mencari penghidupan sebagaimana kami mencarinya, agar kami dapat mengetahui keutamaan kedudukanmu di sisi Tuhanmu jika engkau memang seorang rasul sebagaimana yang engkau klaim.\" Rasulullah ﷺ bersabda kepada mereka, \"Aku tidak akan melakukannya, aku tidak akan meminta perkara itu kepada Tuhanku, dan bukan dengan urusan ini aku diutus kepada kalian.",
      "Akan tetapi, Allah telah mengutusku sebagai pembawa kabar gembira sekaligus pemberi peringatan. Jika kalian menerima apa yang aku bawa, maka itu akan menjadi bagian keberuntungan kalian di dunia dan akhirat.",
      "Namun jika kalian menolaknya dariku, aku akan bersabar menghadapi perintah Allah hingga Allah memutuskan perkara di antara aku dan kalian.\" Kaum Quraisy lalu berkata, \"Maka jatuhkanlah langit ini berkeping-keping di atas kami sebagaimana yang engkau klaim bahwasanya Tuhanmu mampu melakukannya jika Dia menghendaki, karena sesungguhnya kami tidak akan beriman kepadamu kecuali jika engkau melakukan hal itu!\" Rasulullah ﷺ bersabda, \"Urusan itu milik Allah, jika Dia menghendaki untuk melakukannya kepada kalian, pasti Dia akan melakukannya.\" Kisah keteguhan dakwah beliau menghadapi tuntutan kaum Quraisy ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 48,
     "title": "Penolakan Kaum Quraisy dan Ancaman Siksaan terhadap Rasulullah ﷺ",
     "paragraphs": [
      "Kaum Quraisy kemudian berkata, \"Wahai Muhammad, apakah Tuhanmu tidak mengetahui bahwasanya kami akan duduk bersamamu, menuntutmu dengan apa yang telah kami tuntut, dan menanyakan kepadamu perkara yang telah kami tanyakan?",
      "Sehingga Dia mendatangi dirimu dan mengajarkan kepadamu apa yang harus engkau bantah kepada kami, serta mengabarkan kepadamu apa yang akan Dia lakukan terhadap kami jika kami tidak menerima ajakanmu? Sungguh, telah sampai kabar kepada kami bahwasanya engkau diajar oleh seorang lelaki di Yamamah yang bernama Al-Rahman.",
      "Demi Allah, kami tidak akan pernah beriman kepada Al-Rahman untuk selama-lamanya!\" Mereka melanjutkan dengan penuh ancaman, \"Kami telah menyampaikan uzur kepadamu, wahai Muhammad.",
      "Demi Allah, kami tidak akan membiarkanmu begitu saja atas apa yang telah engkau lakukan kepada kami, sampai kami membinasakanmu atau engkau yang membinasakan kami!\" Setelah mendengar perkataan itu, Rasulullah ﷺ pun bangkit meninggalkan mereka.",
      "Namun, Abdullah bin Abi Umayyah bin al-Mughirah—yang merupakan putra dari bibi beliau, Atikah binti Abdul Muthalib—turut bangkit mengikuti beliau. Abdullah lalu berkata, \"Wahai Muhammad, kaummu telah menawarkan berbagai perkara kepadamu namun engkau menolaknya.",
      "Kemudian mereka meminta beberapa hal darimu agar mereka dapat mengetahui kedudukanmu di sisi Allah, namun engkau tidak mau melakukannya.",
      "Selanjutnya mereka memintamu untuk menyegerakan sebagian azab yang engkau gunakan untuk menakut-nakuti mereka, namun engkau tidak juga memenuhinya.\" Abdullah menegaskan permusuhannya, \"Demi Allah, aku tidak akan pernah beriman kepadamu untuk selama-lamanya, hingga engkau membuat sebuah tangga ke langit, lalu engkau menaikinya sementara aku menyaksikannya sendiri!",
      "Kemudian engkau datang kembali dengan membawa sebuah kitab yang terbuka serta didampingi oleh empat malaikat yang memberikan kesaksian bahwasanya engkau adalah seorang rasul sebagaimana yang engkau katakan.",
      "Demi Allah, seandainya engkau benar-benar melakukan hal itu pun, aku tetap mengira bahwasanya aku tidak akan membenarkanmu!\" Setelah mengucapkan kata-kata tersebut, Abdullah berpaling meninggalkan Rasulullah ﷺ, sedangkan beliau pulang menemui keluarganya dalam kondisi bersedih dan merasa terpukul karena melihat bagaimana kaumnya berpaling dan menjauh dari ajakan yang beliau bawa.",
      "Keterangan mengenai peristiwa ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 49,
     "title": "Rencana Keji Abu Jahl untuk Mencelakai Rasulullah ﷺ",
     "paragraphs": [
      "Ibnu Ishaq melanjutkan kisahnya bahwasanya setelah Rasulullah ﷺ beranjak pergi, Abu Jahl bin Hisyam berbicara di tengah-tengah majelis kaum Quraisy.",
      "Ia berkata, \"Wahai kaum Quraisy, sesungguhnya Muhammad telah menolak untuk menghentikan perkara yang kalian lihat sendiri bagaimana dia mencela agama kita, mencaci nenek moyang kita, menganggap bodoh akal pikiran kita, dan memaki tuhan-tuhan kita.",
      "Dan sesungguhnya aku benar-benar bersumpah demi Allah, aku akan duduk menunggunya besok dengan membawa sebuah batu sebesar genggaman tangan yang hampir tidak mampu aku angkat! Apabila dia sedang bersujud di dalam shalatnya, aku akan meremukkan kepalanya dengan batu itu!",
      "Setelah itu, silakan bani Abdi Manaf berbuat apa saja yang mereka suka; apakah mereka akan menyerahkan aku atau mereka akan membela dirinya dariku.",
      "Jika mereka mau, biarlah mereka membalas dendam setelah itu!\" Mendengar rencana tersebut, kaum Quraisy yang berada di majelis berkata, \"Demi Allah, kami tidak akan pernah menyerahkanmu kepada siapa pun demi urusan apa pun, maka pergilah lakukan apa yang telah engkau tekadkan itu!\" Keesokan harinya, Abu Jahl mengambil sebuah batu sebagaimana yang telah ia sebutkan, lalu ia duduk menunggu Rasulullah ﷺ.",
      "Rasulullah ﷺ pun datang pada pagi hari itu sebagaimana kebiasaan beliau untuk melaksanakan shalat. Saat itu, beliau sedang berada di Mekah dalam kondisi menghadap ke arah Syam, dan apabila beliau mendirikan shalat, beliau akan shalat di antara rukun Yamani dan Hajar Aswad, dengan menjadikan Ka'bah berada di antara diri beliau dan arah Syam.",
      "Rasulullah ﷺ kemudian bangkit melaksanakan shalat sementara kaum Quraisy telah duduk berkumpul di majelis mereka menunggu apa yang akan diperbuat oleh Abu Jahl. Ketika Rasulullah ﷺ bersujud, Abu Jahl segera mengangkat batu itu lalu berjalan mendekati beliau.",
      "Namun, ketika Abu Jahl telah berada sangat dekat dengan beliau, tiba-tiba ia berbalik mundur melarikan diri dalam kondisi ketakutan dengan wajah yang pucat pasi, sementara kedua tangannya gemetar memegangi batu itu hingga akhirnya ia melemparkan batu tersebut dari tangannya.",
      "Melihat kejadian aneh itu, beberapa orang pria dari kaum Quraisy segera bangkit mendatanginya dan bertanya, \"Ada apa denganmu, wahai Abu al-Hakam?\" Abu Jahl menjawab, \"Aku telah bangkit mendatanginya untuk melakukan apa yang telah aku katakan kepada kalian semalam.",
      "Namun ketika aku telah berada dekat dengannya, tiba-tiba ada sesosok unta jantan (fahlun minal-ibil) yang menghalangiku. Demi Allah, aku belum pernah melihat unta jantan yang memiliki bagian kepala, leher, dan gigi-gigi semisal dengannya sama sekali!",
      "Unta itu seolah-olah hendak menerkam dan memakan diriku!\" Ibnu Ishaq menceritakan bahwasanya telah sampai kabar kepadanya bahwa Rasulullah ﷺ kemudian bersabda: \"Itu adalah Jibril 'alaihis salām.",
      "Seandainya dia (Abu Jahl) mendekat sedikit saja, niscaya Jibril benar-benar akan merenggut bagian anggota tubuhnya satu demi satu.\" Kisah mengenai rencana makar Abu Jahl yang digagalkan ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 50,
     "title": "Utusan Kaum Quraisy Menemui Pendeta Yahudi di Yatsrib",
     "paragraphs": [
      "Ibnu Ishaq melanjutkan kisah perlawanan kaum Quraisy. Setelah kegagalan Abu Jahl, An-Nadhar bin al-Harits berdiri di hadapan majelis kaum Quraisy dan berkata, \"Wahai kaum Quraisy, demi Allah, sesungguhnya telah turun menimpa kalian suatu urusan yang belum pernah kalian hadapi perkara yang semisal dengannya sama sekali!",
      "Dahulu Muhammad adalah seorang anak muda yang paling kalian rida di antara kalian, yang paling jujur perkataannya, dan yang paling besar sifat amanahnya.",
      "Hingga ketika kalian melihat uban telah ada di kedua pelipisnya dan dia membawa urusan ini kepada kalian, kalian justru berkata: 'Dia adalah seorang penyihir.' Tidak, demi Allah, dia bukanlah seorang penyihir, karena kami telah melihat para penyihir beserta tiupan-tiupan mereka.",
      "Kalian juga berkata: 'Dia adalah seorang dukun.' Tidak, demi Allah, dia bukanlah seorang dukun, karena kami telah melihat para dukun beserta komat-kamit mereka. Kalian juga berkata: 'Dia adalah seorang penyair.' Tidak, demi Allah, dia bukanlah seorang penyair, karena kami telah mengetahui seluruh jenis syair.",
      "Kalian juga berkata: 'Dia adalah orang gila.' Tidak, demi Allah, dia bukanlah orang gila, karena kami telah melihat penyakit gila dan tidak ada padanya bisikan-bisikan gila atau gangguannya.",
      "Wahai kaum Quraisy, perhatikanlah urusan kalian, karena demi Allah, sesungguhnya telah turun menimpa kalian suatu urusan yang sangat besar!\" An-Nadhar bin al-Harits sendiri adalah salah satu setan Quraisy yang paling keras permusuhannya kepada Rasulullah ﷺ.",
      "Dahulu ia pernah pergi ke negeri Hira, lalu di sana ia mempelajari cerita-cerita tentang raja-raja persia, kisah Rustum, dan kisah Isfandiyar.",
      "Apabila Rasulullah ﷺ selesai duduk di suatu majelis untuk berdzikir kepada Allah dan memberi peringatan kepada kaumnya, An-Nadhar segera menggantikan posisi beliau setelah beliau bangkit, lalu ia berkata, \"Demi Allah, wahai kaum Quraisy, aku memiliki perkataan yang lebih baik daripada perkataannya!",
      "Kemarilah kepadaku, aku akan menceritakan kepada kalian perkataan yang lebih baik dari perkataannya!\" Ia pun mulai menceritakan kisah tentang raja-raja persia, Rustum, dan Isfandiyar, kemudian ia berseru, \"Dengan alasan apa Muhammad memiliki perkataan yang lebih baik daripada perkataanku?!\" Maka ketika kaum Quraisy merasa kebingungan menghadapi urusan Rasulullah ﷺ, mereka akhirnya mengutus An-Nadhar bin al-Harits bersama Uqbah bin Abi Mu'aith untuk menemui para pendeta Yahudi (ahbār yahūd) di Yatsrib (Madinah).",
      "Kaum Quraisy berpesan kepada keduanya, \"Tanyakanlah kepada para pendeta Yahudi itu tentang Muhammad! Sifatkanlah perangainya kepada mereka dan kabarkanlah tentang perkataan-perkataannya, karena sesungguhnya mereka adalah kaum ahli kitab yang pertama, dan mereka memiliki ilmu tentang para nabi yang tidak kami miliki.\" An-Nadhar dan Uqbah pun berangkat hingga tiba di Yatsrib.",
      "Mereka segera menemui para pendeta Yahudi dan menanyakan perihal Rasulullah ﷺ.",
      "Keduanya menceritakan urusan beliau, menyifatkan perangainya, serta mengabarkan sebagian dari perkataan-perkataan beliau, seraya berkata, \"Sesungguhnya kalian adalah kaum ahli taurat, dan kami datang kepada kalian agar kalian mengabarkan kepada kami tentang urusan sahabat kami ini.\" Para pendeta Yahudi itu kemudian berkata kepada keduanya: \"Tanyakanlah kepadanya tentang tiga perkara yang akan kami perintahkan ini!",
      "Jika dia mampu mengabarkannya kepada kalian, maka dia benar-benar seorang nabi yang diutus, namun jika dia tidak mampu mengabarkannya, maka pria itu hanyalah seorang pembual (mutaqawwil), maka perbuatlah apa saja yang kalian suka terhadap dirinya! Tanyakanlah kepadanya tentang para pemuda yang pergi pada masa terdahulu, bagaimana kisah mereka yang menakjubkan itu?",
      "Tanyakanlah kepadanya tentang seorang pria yang mengelilingi bumi hingga mencapai tempat terbitnya matahari dan tempat terbenamnya, bagaimana kisahnya? Dan tanyakanlah kepadanya tentang ruh, apa itu ruh?\" Mendengar petunjuk itu, An-Nadhar dan Uqbah segera bertolak kembali menuju Mekah.",
      "Begitu tiba, mereka langsung menemui kaum Quraisy dan berseru dengan penuh keyakinan, \"Wahai kaum Quraisy, kami datang membawa sebuah perkara yang akan memutuskan urusan antara kalian dan Muhammad! Sungguh para pendeta Yahudi telah memerintahkan kami untuk menanyakan beberapa perkara kepadanya,\" lalu keduanya mengabarkan tiga pertanyaan tersebut kepada mereka.",
      "Kisah ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 51,
     "title": "Jawaban Rasulullah ﷺ Atas Tiga Pertanyaan Pendeta Yahudi",
     "paragraphs": [
      "Kaum Quraisy kemudian datang menemui Rasulullah ﷺ lalu berkata, \"Wahai Muhammad, kabarkanlah kepada kami!\" Mereka pun menanyakan kepada beliau tentang tiga perkara yang diperintahkan oleh para pendeta Yahudi tersebut.",
      "Rasulullah ﷺ bersabda kepada mereka, \"Aku akan mengabarkan kepada kalian besok apa yang kalian tanyakan itu.\" Namun, saat itu beliau tidak mengucapkan kalimat insya Allah (in syā' Allāh). Maka kaum Quraisy pun beranjak pergi meninggalkan beliau.",
      "Setelah pertemuan itu, Rasulullah ﷺ menetap selama lima belas malam tanpa ada sedikit pun wahyu yang turun dari Allah SWT mengenai perkara tersebut, dan malaikat Jibril 'alaihis salām pun tidak kunjung datang menemui beliau.",
      "Akibat penundaan ini, penduduk kota Mekah mulai menyebarkan desas-desus, mereka berkata, \"Muhammad telah berjanji kepada kami besok, dan sekarang telah berlalu lima belas malam dalam kondisi kami tidak melihat dia mengabarkan sesuatu pun tentang apa yang kami tanyakan.\" Penundaan wahyu ini sempat membuat Rasulullah ﷺ merasa sedih, dan tuduhan-tuduhan kaum Quraisy terasa berat di dalam hati beliau.",
      "Hingga akhirnya, malaikat Jibril 'alaihis salām datang dari sisi Allah SWT dengan membawa Surah Ash-Ashaf (yaitu Surah Al-Kahfi). Di dalam surah tersebut, terdapat teguran Allah SWT kepada beliau karena merasa sedih atas sikap mereka, serta memuat jawaban lengkap tentang kisah para pemuda (Ashabul Kahfi) dan kisah tentang pria yang mengelilingi bumi (Zulqarnain).",
      "Selain itu, Jibril juga membawa turun firman Allah SWT di dalam Surah Al-Isra' yang menjawab pertanyaan tentang ruh: \"Dan mereka bertanya kepadamu tentang ruh. Katakanlah: 'Ruh itu termasuk urusan Tuhanku'...\" (QS. Al-Isra': 85). Kisah mengenai turunnya jawaban atas pertanyaan pendeta Yahudi ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 52,
     "title": "Keislaman Utsman bin Mazh'un Melalui Perantara Ayat Al-Qur'an",
     "paragraphs": [
      "Imam Ahmad meriwayatkan dari Ibnu Abbas radhiyallāhu 'anhuma, ia menceritakan: Ketika Rasulullah ﷺ sedang duduk-duduk di pelataran rumahnya di Mekah, tiba-tiba Utsman bin Mazh'un raḍiyallāhu 'anhu lewat di hadapannya sambil tersenyum ke arah Rasulullah ﷺ.",
      "Rasulullah ﷺ lalu bersabda kepadanya, \"Mengapa engkau tidak duduk?\" Utsman menjawab, \"Tentu.\" Maka Utsman bin Mazh'un duduk menghadap beliau. Ketika mereka berdua sedang berbincang-bincang, Rasulullah ﷺ tiba-tiba mengarahkan pandangannya ke langit, lalu beliau melihat ke sela-sela langit sejenak.",
      "Setelah itu, beliau menurunkan pandangannya ke arah sebelah kanannya, lalu beliau berpaling dari Utsman menuju tempat pandangannya tersebut. Beliau mulai mengangguk-anggukkan kepalanya seolah-olah sedang memahami apa yang dikatakan kepadanya, sementara Utsman bin Mazh'un memperhatikan dengan saksama.",
      "Setelah urusan itu selesai, Rasulullah ﷺ kembali mengarahkan pandangannya ke langit seperti semula, lalu pandangan beliau terus mengikuti ke atas hingga menghilang dari sela-sela langit. Beliau kemudian kembali menghadap ke arah Utsman bin Mazh'un.",
      "Melihat kejadian tersebut, Utsman bertanya, \"Wahai Muhammad, sesungguhnya aku sering duduk bersamamu, namun aku belum pernah melihatmu melakukan perbuatan seperti yang engkau lakukan hari ini sama sekali?\" Rasulullah ﷺ bertanya, \"Perbuatan apa yang engkau lihat dariku?\" Utsman menjawab, \"Engkau mengarahkan pandanganmu ke langit, lalu engkau menurunkannya ke arah sebelah kananmu dan berpaling kepadanya meninggalkan diriku, kemudian engkau mengangguk-anggukkan kepalamu seolah-olah sedang memahami sesuatu yang dikatakan kepadamu, setelah itu engkau kembali melihat ke langit dan pandanganmu terus mengikutinya ke atas hingga menghilang, barulah engkau kembali menghadap kepadaku.\" Rasulullah ﷺ bersabda, \"Apakah engkau benar-benar memperhatikannya?\" Utsman menjawab, \"Benar.\" Rasulullah ﷺ bersabda, \"Baru saja utusan Allah (Jibril 'alaihis salām) mendatangi diriku ketika engkau sedang duduk tadi.\" Utsman bertanya keheranan, \"Utusan Allah?!\" Beliau bersabda, \"Benar.\" Utsman bertanya lagi, \"Lalu apa yang dia katakan kepadamu?\" Rasulullah ﷺ membacakan ayat yang baru saja diturunkan: \"Sesungguhnya Allah menyuruh (kalian) berlaku adil dan berbuat kebajikan, memberi kepada kaum kerabat, dan Allah melarang dari perbuatan keji, kemungkaran, dan permusuhan.",
      "Dia memberi pengajaran kepada kalian agar kalian dapat mengambil pelajaran.\" (QS.",
      "An-Nahl: 90) Utsman bin Mazh'un menceritakan dampak dari peristiwa itu terhadap dirinya, \"Maka itulah saat di mana Islam benar-benar kokoh di dalam hatiku, dan aku mulai mencintai Muhammad ﷺ.\" Keterangan ini dikeluarkan oleh Imam Ahmad, dan para perawinya merupakan perawi-perawi yang digunakan di dalam kitab Shahih al-Bukhari atau Shahih Muslim, sebagaimana tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 53,
     "title": "Keislaman Kaum Anshar Melalui Kisah Utsman bin Mazh'un",
     "paragraphs": [
      "Ibnu Katsir melanjutkan riwayat tersebut di dalam kitab Al-Bidayah dengan menyebutkan bahwa setelah peristiwa itu, Utsman bin Mazh'un raḍiyallāhu 'anhu mendatangi Abu Thalib. Ia mengabarkan perihal kejadian yang disaksikannya bersama Rasulullah ﷺ serta membacakan ayat yang baru saja diturunkan tersebut.",
      "Mendengar penuturan Utsman, Abu Thalib berkata, \"Wahai kaum Quraisy, ikutilah putra saudaraku ini (Nabi Muhammad ﷺ ), niscaya kalian akan mendapat petunjuk.",
      "Karena sesungguhnya dia tidaklah memerintahkan kalian melainkan kepada akhlak-akhlak yang mulia.\" Tidak hanya itu, Utsman bin Mazh'un raḍiyallāhu 'anhu juga membawa kabar dan membacakan ayat tersebut kepada sekelompok orang dari kabilah Aus dan Khazraj (kaum Anshar) yang sedang berada di Mekah.",
      "Ayat inilah yang kemudian menjadi salah satu sebab utama tersebarnya Islam di kota Madinah, hingga akhirnya urusan dakwah Islam menjadi kokoh di sana."
     ]
    },
    {
     "id": 54,
     "title": "Perdebatan Rasulullah ﷺ dengan Abdullah bin Umayyah Mengenai Al-Qur'an",
     "paragraphs": [
      "Ibnu Ishaq meriwayatkan dari Ibnu Abbas raḍiyallāhu 'anhuma, ia menceritakan bahwasanya setelah kaum Quraisy berpaling, Abdullah bin Abi Umayyah kembali mendatangi Rasulullah ﷺ untuk mendebat beliau. Abdullah bin Abi Umayyah berkata, \"Wahai Muhammad, engkau mengklaim bahwasanya Kitab yang diturunkan kepadamu ini diturunkan oleh Allah?",
      "Dan engkau mengklaim bahwasanya Allah 'Azza wa Jalla telah berbicara kepadamu?",
      "Demi Allah, seandainya kami melihatmu menaiki tangga ke langit, lalu engkau datang membawa sebuah kitab yang terbuka, dan didampingi oleh empat malaikat yang bersaksi untukmu, kami tetap akan mengira bahwasanya engkau hanyalah seorang penyihir!\" Maka sehubungan dengan perkataan Abdullah bin Abi Umayyah tersebut, Allah جل جلاله menurunkan firman-Nya di dalam Al-Qur'an: \"Dan kalau Kami turunkan kepadamu tulisan di atas kertas, lalu mereka dapat menyentuhnya dengan tangan mereka sendiri, tentulah orang-orang kafir itu berkata: 'Ini tidak lain hanyalah sihir yang nyata'.\" (QS.",
      "Al-An'am: 7) Serta firman Allah جل جلاله yang merekam tuntutan mereka di dalam Surah Al-Isra': \"Dan mereka berkata: 'Kami sekali-kali tidak akan beriman kepadamu hingga engkau memancarkan mata air dari bumi untuk kami, atau engkau mempunyai sebuah kebun kurma dan anggur, lalu engkau alirkan sungai-sungai di selah-selahnya dengan deras, atau engkau jatuhkan langit berkeping-keping di atas kami sebagaimana engkau klaim, atau engkau datangkan Allah dan malaikat-malaikat berhadapan muka dengan kami, atau engkau mempunyai sebuah rumah dari emas, atau engkau menaiki ke langit.",
      "Dan kami sekali-kali tidak akan beriman kepada kenaikanmu itu hingga engkau turunkan kepada kami sebuah kitab yang kami baca'. Katakanlah: 'Maha Suci Tuhanku, bukankah aku ini hanya seorang manusia yang menjadi rasul?'\" (QS. Al-Isra': 90-93) Kisah perdebatan dan turunnya ayat-ayat pembantahan ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 55,
     "title": "Upaya Kaum Quraisy Menghalangi Dakwah Rasulullah ﷺ Melalui Penyair",
     "paragraphs": [
      "Ibnu Ishaq meriwayatkan dari Ibnu Abbas radhiyallāhu 'anhuma bahwasanya setelah perdebatan tersebut, kaum Quraisy menyadari bahwa hujah mereka tidak mampu mematahkan penjelasan Rasulullah ﷺ. Oleh karena itu, mereka merancang strategi baru untuk menjauhkan bangsa Arab dari mendengarkan bacaan Al-Qur'an.",
      "Para pemuka Quraisy berkumpul dan memanggil para penyair terkemuka mereka, di antaranya adalah Amru bin al-Aash, Al-Aash bin Wa'il, dan beberapa penyair lainnya. Mereka berkata, \"Sesungguhnya delegasi bangsa Arab akan segera datang ke Mekah pada musim haji ini. Jika mereka mendengarkan perkataan Muhammad, dikhawatirkan mereka akan terpengaruh dan mengikuti agamanya.",
      "Oleh karena itu, ciptakanlah syair-syair yang mencela dirinya, menuduhnya sebagai pendusta, penyihir, atau orang gila, agar manusia menjauh darinya sebelum mereka sempat menemuinya!\" Maka para penyair Quraisy mulai menggubah bait-bait syair yang berisi ejekan dan tuduhan palsu terhadap Rasulullah ﷺ.",
      "Mereka menyebarkan syair-syair tersebut di jalur-jalur masuk kota Mekah serta tempat-tempat berkumpulnya kabilah Arab yang datang berziarah. Setiap kali ada rombongan yang tiba, kaum Quraisy segera membacakan syair tersebut seraya memperingatkan mereka agar tidak mendekati Rasulullah ﷺ. Namun, upaya kaum Quraisy ini justru memicu rasa penasaran di kalangan sebagian bangsa Arab.",
      "Beberapa di antara mereka bergumam di dalam hati, \"Sungguh, kabilah Quraisy sangat mengkhawatirkan pria ini, kami harus melihat sendiri apa yang sebenarnya dia katakan.\" Peristiwa ini menjadi salah satu sebab tersebarnya kabar tentang diutusnya Rasulullah ﷺ ke berbagai penjuru jazirah Arab, meskipun kaum Quraisy berusaha keras untuk menutup-nutupinya.",
      "Keterangan mengenai strategi kaum Quraisy ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 56,
     "title": "Sikap Teguh Abu Thalib dalam Melindungi Rasulullah ﷺ",
     "paragraphs": [
      "Ibnu Ishaq melanjutkan riwayat tersebut di dalam kitab Al-Bidayah. Ketika kaum Quraisy melihat bahwa syair-syair dan gangguan mereka tidak mampu menghentikan Rasulullah ﷺ dari dakwahnya, mereka menyadari bahwa Abu Thalib tetap teguh membela dan melindungi putra saudaranya tersebut.",
      "Oleh karena itu, sekelompok tokoh pemuka Quraisy memutuskan untuk mendatangi Abu Thalib secara langsung. Di antara para pemuka yang datang menemui Abu Thalib adalah Utbah bin Rabi'ah, Syaibah bin Rabi'ah, Abu Sufyan bin Harb, Al-Aash bin Wa'il, Walid bin al-Mughirah, dan Abu Jahl bin Hisyam.",
      "Mereka berkata, \"Wahai Abu Thalib, sesungguhnya putra saudaramu telah mencaci tuhan-tuhan kami, mencela agama kami, menganggap bodoh akal pikiran kami, dan menyatakan bahwa nenek moyang kami berada dalam kesesatan.",
      "Maka sekarang, pilihlah salah satu dari dua perkara: engkau menghentikan dirinya dari kami, atau engkau membiarkan urusan ini antara kami dan dia hingga salah satu di antara kedua belah pihak binasa!\" Abu Thalib memberikan jawaban yang halus dan menenangkan kemarahan mereka, sehingga para pemuka Quraisy pun akhirnya pulang meninggalkannya.",
      "Setelah pertemuan itu, Rasulullah ﷺ tetap melanjutkan dakwahnya seperti biasa; beliau terus menampakkan agama Allah جل جلاله dan menyeru manusia kepada-Nya, sementara hubungan antara beliau dan kaum Quraisy semakin hari menjadi kian merenggang dan menjauh."
     ]
    },
    {
     "id": 57,
     "title": "Utusan Kedua Kaum Quraisy Menemui Abu Thalib",
     "paragraphs": [
      "Ibnu Ishaq melanjutkan kisahnya bahwasanya setelah peristiwa itu, Rasulullah ﷺ tetap terus melanjutkan dakwahnya. Beliau menyebarkan agama Allah جل جلاله dan menyeru manusia kepada-Nya, sehingga kaum Quraisy merasa perkara tersebut telah semakin memuncak.",
      "Hal itu membuat mereka tidak lagi memiliki kesabaran untuk menahan permusuhan, sehingga hubungan di antara mereka menjadi kian memburuk. Maka para pemuka kaum Quraisy kembali mendatangi Abu Thalib untuk kedua kalinya. Kali ini mereka berkata, \"Wahai Abu Thalib, sesungguhnya engkau memiliki kedudukan, kemuliaan, dan tempat yang tinggi di tengah-tengah kami.",
      "Kami telah meminta kepadamu untuk menghentikan putra saudaramu, namun engkau tidak juga menghentikannya dari kami. Demi Allah, sesungguhnya kami tidak akan lagi sanggup bersabar atas tindakan dicelanya nenek moyang kami, dianggap bodohnya akal pikiran kami, dan dimakinya tuhan-tuhan kami!",
      "Maka pilihannya adalah engkau menghentikan dirinya dari kami, atau kami akan memeranginya beserta dirimu atas urusan ini, sampai salah satu di antara kedua belah pihak binasa!\" Setelah menyampaikan ancaman yang sangat berat itu, kaum Quraisy pun berpaling meninggalkan Abu Thalib.",
      "Perpisahan dan permusuhan dengan kaumnya terasa sangat berat bagi Abu Thalib, namun di sisi lain, ia juga merasa tidak sanggup untuk menyerahkan atau membiarkan Rasulullah ﷺ begitu saja. Maka Abu Thalib mengirim utusan untuk memanggil Rasulullah ﷺ.",
      "Setelah beliau datang, Abu Thalib berkata kepada beliau, \"Wahai putra saudaraku, sesungguhnya kaummu telah mendatangi diriku, dan mereka berkata begini dan begitu kepadaku.",
      "Maka pertahankanlah dirimu serta diriku, dan janganlah engkau membebankan kepadaku suatu urusan yang tidak lagi mampu aku pikul.\" Mendengar perkataan pamannya, Rasulullah ﷺ mengira bahwasanya telah tampak pandangan baru dari pamannya untuk membiarkan dirinya, serta bahwasanya pamannya telah merasa lemah untuk membelanya dan hendak menyerahkannya kepada kaum Quraisy.",
      "Maka Rasulullah ﷺ bersabda: \"Wahai pamanku, demi Allah, seandainya mereka meletakkan matahari di tangan kananku dan bulan di tangan kiriku agar aku meninggalkan urusan ini, hingga Allah memenangkannya atau aku ikut binasa di dalamnya, niscaya aku tidak akan pernah meninggikannya (meninggalkan dakwah ini)!\" Setelah mengucapkan kalimat tersebut, mata Rasulullah ﷺ berkaca-kaca lalu beliau menangis, kemudian beliau bangkit untuk beranjak pergi.",
      "Namun ketika beliau baru saja berbalik melangkah, Abu Thalib segera memanggilnya kembali, \"Kemarilah, wahai putra saudaraku!\" Rasulullah ﷺ pun datang mendekatinya, lalu Abu Thalib berkata dengan penuh ketegasan: \"Pergilah engkau, wahai putra saudaraku, dan katakanlah apa saja yang engkau sukai!",
      "Maka demi Allah, aku tidak akan pernah menyerahkanmu kepada mereka demi urusan apa pun untuk selama-lamanya!\" Kisah keteguhan dan pembelaan pamannya ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 58,
     "title": "Tawaran Pertukaran Pemuda dari Kaum Quraisy Kepada Abu Thalib",
     "paragraphs": [
      "Ibnu Ishaq melanjutkan kisahnya bahwasanya ketika kaum Quraisy mengetahui bahwa Abu Thalib telah menolak untuk menyerahkan Rasulullah ﷺ, dan ia justru telah menyatakan tekadnya untuk berpisah serta memusuhi mereka demi membela keponakannya, mereka pun segera merancang strategi lain.",
      "Mereka berangkat menemui Abu Thalib dengan membawa seorang pemuda bernama Umarah bin al-Walid bin al-Mughirah. Para pemuka Quraisy berkata, \"Wahai Abu Thalib, sesungguhnya ini adalah Umarah bin al-Walid. Dia adalah seorang pemuda yang paling gagah perkasa (anhadu) dan paling tampan di kalangan kabilah Quraisy. Maka ambillah dia!",
      "Engkau akan mendapatkan kecerdasan serta pembelaannya, dan jadikanlah dia sebagai anakmu sehingga dia menjadi milikmu. Namun sebagai gantinya, serahkanlah kepada kami putra saudaramu ini (Nabi Muhammad ﷺ ) yang telah menyalahi agamamu dan agama nenek moyangmu, mencerai-beraikan persatuan kaummu, dan menganggap bodoh akal pikiran mereka, agar kami dapat membunuhnya!",
      "Sungguh, ini adalah pertukaran pria dengan pria!\" Mendengar tawaran tersebut, Abu Thalib memberikan jawaban yang sangat tegas, \"Demi Allah, alangkah buruknya perkara yang kalian tawarkan kepadaku ini!",
      "Apakah kalian ingin menyerahkan putra kalian kepadaku agar aku memberi makan dan mendidiknya untuk kalian, sementara aku harus menyerahkan putra saudaraku kepada kalian agar kalian dapat membunuhnya?!",
      "Demi Allah, perkara ini tidak akan pernah terjadi untuk selama-lamanya!\" Al-Muth'im bin Adi bin Naufal bin Abdi Manaf yang ikut hadir saat itu angkat bicara, \"Demi Allah, wahai Abu Thalib, sesungguhnya kaummu telah bersikap adil kepadamu, dan mereka telah berusaha keras untuk melepaskanmu dari perkara yang engkau benci.",
      "Namun aku melihat engkau sama sekali tidak mau menerima satu pun penawaran dari mereka.\" Abu Thalib langsung menyela perkataan Al-Muth'im, \"Demi Allah, mereka tidak bersikap adil kepadaku! Akan tetapi, engkau sendiri telah bertekad untuk menghinakan aku dan menggerakkan kaummu untuk melawanku.",
      "Maka perbuatlah apa saja yang engkau suka!\" Setelah penolakan keras dari Abu Thalib itu, urusan di antara mereka pun semakin memuncak, dan perang telah siap untuk berkobar. Kisah ketegasan Abu Thalib menghadapi tawaran kaum Quraisy ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 59,
     "title": "Perlindungan Bani Hasyim dan Bani Al-Muthalib terhadap Rasulullah ﷺ",
     "paragraphs": [
      "Ibnu Ishaq melanjutkan kisahnya bahwasanya ketika Abu Thalib melihat kaum Quraisy telah menampakkan permusuhan secara terang-terangan, serta mereka telah bersepakat untuk melawan dan mengasingkan Rasulullah ﷺ beserta siapa saja yang membelinya, ia segera bertindak.",
      "Abu Thalib mengumpulkan seluruh kerabatnya dari kalangan bani Hasyim dan bani Al-Muthalib untuk masuk bersamanya ke dalam syi'ib (lembah) miliknya, demi menjaga dan melindungi Rasulullah ﷺ dari makar kaum Quraisy. Seruan Abu Thalib tersebut disambut baik oleh seluruh anggota bani Hasyim dan bani Al-Muthalib.",
      "Mereka semua sepakat untuk ikut masuk ke dalam lembah bersamanya dan berdiri membentengi Rasulullah ﷺ, baik mereka yang telah memeluk Islam karena dorongan agama, maupun mereka yang masih kafir karena didorong oleh rasa solidaritas kesukuan (hamiyyah). Namun, ada satu orang dari kalangan bani Hasyim yang memilih memisahkan diri dan menolak ikut serta.",
      "Ia adalah Abu Lahab, Abdul Uzza bin Abdul Muthalib. Abu Lahab justru keluar meninggalkan kaumnya dan bergabung bersama kabilah Quraisy untuk membantu mereka dalam memusuhi serta melawan Rasulullah ﷺ. Peristiwa penggalangan kekuatan dan pengasingan di dalam lembah ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 60,
     "title": "Pemboikotan Total Kaum Quraisy Terhadap Bani Hasyim dan Bani Al-Muthalib",
     "paragraphs": [
      "Ibnu Ishaq melanjutkan kisahnya bahwasanya ketika kabilah-kabilah dari kaum Quraisy melihat bani Hasyim dan bani Al-Muthalib telah bersepakat untuk melindungi Rasulullah ﷺ serta menolak menyerahkannya, mereka segera berkumpul untuk mengadakan musyawarah. Mereka menyadari bahwa kekuatan bersenjata tidak lagi efektif selama Abu Thalib dan kaumnya bersatu membentengi beliau.",
      "Oleh karena itu, kaum Quraisy memutuskan untuk menulis sebuah piagam perjanjian (shahīfah).",
      "Di dalam piagam tersebut, mereka menetapkan keputusan bersama untuk melakukan pemboikotan total: mereka tidak akan menikahi wanita dari kalangan bani Hasyim dan bani Al-Muthalib, tidak akan menikahkan putri-putri mereka dengan pria dari kedua bani tersebut, tidak akan menjual sesuatu pun kepada mereka, dan tidak akan membeli apa pun dari mereka.",
      "Mereka bersepakat secara mutlak untuk memutuskan segala bentuk hubungan sampai kedua bani itu bersedia menyerahkan Rasulullah ﷺ kepada mereka untuk dibunuh. Setelah piagam perjanjian pemboikotan itu selesai ditulis, mereka menggantungkannya di bagian dalam Ka'bah sebagai bentuk pengukuhan dan sumpah bersama agar tidak ada seorang pun yang berani melanggarnya.",
      "Peristiwa pemboikotan sepihak dan penulisan piagam ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 61,
     "title": "Penderitaan Bani Hasyim dan Bani Al-Muthalib di Dalam Lembah",
     "paragraphs": [
      "Ibnu Ishaq meneruskan kisahnya bahwasanya setelah piagam pemboikotan itu digantungkan, kaum Quraisy segera memperketat ruang gerak bani Hasyim dan bani Al-Muthalib. Kedua bani tersebut, baik yang muslim maupun yang masih kafir, terkurung di dalam lembah (syi'ib) Abu Thalib dalam kondisi yang sangat memperhatinkan.",
      "Kaum Quraisy sengaja memutus seluruh jalur pasokan makanan dan kebutuhan pokok menuju lembah tersebut. Kondisi pemboikotan ini berlangsung dalam waktu yang lama hingga perbekalan yang mereka bawa habis sama sekali.",
      "Kelaparan yang sangat hebat mulai menimpa penduduk lembah, sampai-sampai terdengar suara tangisan anak-anak kecil dan kaum wanita dari balik lembah karena menahan lapar yang amat sangat. Untuk bertahan hidup, mereka terpaksa memakan dedaunan pohon dan kulit-kulit binatang yang kering.",
      "Tidak ada barang dagangan yang diperbolehkan masuk ke Mekah melainkan kaum Quraisy akan segera memborongnya atau menghalangi para pedagang luar agar tidak menjualnya kepada bani Hasyim dan bani Al-Muthalib. Apabila ada kafilah dagang yang tiba dari luar kota Mekah, salah seorang di antara mereka yang berada di dalam lembah mencoba keluar untuk membeli makanan bagi keluarganya.",
      "Namun, Abu Lahab akan segera berseru kepada para pedagang, \"Wahai para pedagang, tinggikanlah harga barang kalian atas sahabat-sahabat Muhammad agar mereka tidak mampu membelinya!",
      "Kalian telah mengetahui hartaku dan kesetiaanku untuk melunasi urusan kalian!\" Akibatnya, para pedagang menaikkan harga berlipat ganda, dan perwakilan lembah tersebut terpaksa kembali kepada anak-anaknya dalam kondisi tangan hampa dan kelaparan. Kisah penderitaan akibat pemboikotan keji kaum Quraisy ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 62,
     "title": "Upaya Penyelundupan Makanan ke Lembah oleh Hakim bin Hizam",
     "paragraphs": [
      "Ibnu Ishaq melanjutkan kisahnya bahwasanya di tengah boikot yang sangat ketat tersebut, beberapa orang dari kaum Quraisy adakalanya berusaha menyelundupkan makanan secara sembunyi-sembunyi demi menolong kerabat mereka di dalam lembah. Di antara mereka adalah Hakim bin Hizam bin Khuwailid.",
      "Suatu hari, Hakim bin Hizam pergi membawa gandum yang dipikul oleh pelayannya dengan tujuan untuk mengantarkannya kepada bibinya, Khadijah binti Khuwailid radhiyallāhu 'anha, yang saat itu sedang berada di dalam lembah bersama Rasulullah ﷺ. Namun, di tengah jalan, Abu Jahl bin Hisyam memergokinya dan langsung menghalanginya.",
      "Abu Jahl berseru dengan penuh kemarahan, \"Apakah engkau pergi membawa makanan ini untuk bani Hasyim?!",
      "Demi Allah, engkau beserta makananmu ini tidak boleh bergeser sedikit pun hingga aku mempermalukanmu di kota Mekah!\" Tiba-tiba, Abul Bukhturi bin Hisyam lewat di dekat mereka berdua dan bertanya, \"Ada apa urusan antara kalian berdua ini?\" Abu Jahl menjawab, \"Dia ingin membawa makanan untuk bani Hasyim!\" Abul Bukhturi kemudian berkata, \"Itu adalah makanan milik bibinya yang dikirimkan kepadanya, dan dia memiliki titipan gandum tersebut pada dirinya.",
      "Apakah engkau hendak menghalanginya untuk mengantarkan makanan milik bibinya sendiri?! Biarkanlah jalan pria ini!\" Namun, Abu Jahl tetap menolak keras dan bersikeras untuk menghalanginya, hingga akhirnya terjadilah pertengkaran mulut di antara keduanya.",
      "Abul Bukhturi yang merasa geram segera mengambil tulang rahang unta yang ia temukan di dekatnya, lalu ia memukulkannya ke arah kepala Abu Jahl hingga melukainya, kemudian ia menginjak-injaknya dengan keras.",
      "Saat peristiwa pemukulan itu terjadi, Hamzah bin Abdul Muthalib raḍiyallāhu 'anhu sedang berada di tempat yang tidak jauh dari sana dan menyaksikan seluruh kejadian tersebut.",
      "Pihak kaum Quraisy sendiri sebenarnya sangat tidak menyukai jika kabar tentang penderitaan dan pertengkaran di antara mereka ini sampai terdengar oleh Rasulullah ﷺ beserta para sahabatnya, karena hal itu akan membuat mereka terkesan lemah dan saling berselisih. Kisah pencegatan makanan dan perselisihan di antara kaum Quraisy ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 63,
     "title": "Kesepakatan Lima Tokoh Quraisy untuk Membatalkan Pemboikotan",
     "paragraphs": [
      "Ibnu Ishaq melanjutkan kisahnya bahwasanya bani Hasyim dan bani Al-Muthalib menetap di dalam lembah tersebut selama dua atau tiga tahun, hingga mereka benar-benar mengalami penderitaan yang sangat berat.",
      "Setelah itu, terjadilah pergerakan dari beberapa orang pemuka kaum Quraisy yang merasa tidak rida terhadap piagam pemboikotan keji tersebut, dan orang yang paling berjasa dalam urusan pembatalan piagam ini adalah Hisyam bin Amr bin Rabi'ah. Hisyam bin Amr adalah seorang pria yang sering kali menyelundupkan makanan ke dalam lembah pada malam hari untuk menolong bani Hasyim.",
      "Suatu hari, ia mendatangi Zuhair bin Abi Umayyah bin al-Mughirah—yang ibunya adalah Atikah binti Abdul Muthalib—lalu berkata, \"Wahai Zuhair, apakah engkau rida bisa memakan makanan, mengenakan pakaian, dan menikahi wanita, sementara paman-pamanmu dari jalur ibu berada dalam kondisi yang engkau sendiri telah mengetahuinya?",
      "Mereka tidak boleh membeli, tidak boleh menjual, tidak boleh menikah, dan tidak boleh dinikahi!",
      "Demi Allah, seandainya mereka itu adalah paman-paman dari jalur ibu Abu al-Hakam bin Hisyam (Abu Jahl), kemudian engkau mengajaknya untuk melakukan pemboikotan seperti ini, niscaya dia tidak akan pernah mau mengikutimu untuk selama-lamanya!\" Zuhair menjawab, \"Celaka engkau, wahai Hisyam! Lalu apa yang bisa aku perbuat? Aku hanyalah seorang diri.",
      "Demi Allah, seandainya ada seorang pria lain yang bersamaku, niscaya aku pasti akan bangkit untuk membatalkan piagam pemboikotan itu!\" Hisyam berkata, \"Engkau telah mendapatkan seorang pria.\" Zuhair bertanya, \"Siapa dia?\" Hisyam menjawab, \"Aku sendiri.\" Zuhair berkata, \"Kalau begitu, carilah orang ketiga untuk kita.\" Hisyam kemudian pergi mendatangi Al-Mut'im bin Adi.",
      "Ia mengingatkan Al-Mut'im tentang hubungan kekerabatan mereka dengan bani Hasyim dan bani Al-Muthalib, serta mencela tindakan zalim kaum Quraisy. Al-Mut'im berkata, \"Celaka engkau!",
      "Lalu siapa lagi yang bersamamu?\" Hisyam menjawab, \"Aku dan Zuhair bin Abi Umayyah.\" Al-Mut'im berkata, \"Carilah orang keempat untuk kita.\" Hisyam lalu pergi mendatangi Abul Bukhturi bin Hisyam, dan ia pun mengatakan perkara yang serupa.",
      "Abul Bukhturi bertanya, \"Apakah ada orang yang membantumu dalam urusan ini?\" Hisyam menjawab, \"Ya, Zuhair bin Abi Umayyah, Al-Mut'im bin Adi, dan aku sendiri.\" Abul Bukhturi berkata, \"Carilah orang kelima untuk kita.\" Maka Hisyam segera pergi mendatangi Zam'ah bin al-Aswad bin al-Muthalib.",
      "Ia berbicara kepadanya dan mengingatkan tentang hubungan kekerabatan serta kewajiban mereka terhadap hak-hak kerabat tersebut. Zam'ah bertanya, \"Apakah ada orang yang telah menyetujui urusan yang engkau serukan ini?\" Hisyam menjawab, \"Ya,\" lalu ia menyebutkan nama empat tokoh yang telah bersepakat sebelumnya.",
      "Setelah itu, kelima tokoh Quraisy ini berkumpul di Hajuun, yang terletak di bagian atas kota Mekah. Di sana, mereka saling menguatkan tekad dan berjanji setia satu sama lain untuk bangkit membatalkan piagam pemboikotan tersebut hingga mereka berhasil melenyapkannya.",
      "Zuhair berkata, \"Aku yang akan memulai pembicaraan besok, dan akulah orang pertama yang akan angkat bicara di hadapan manusia.\" Kisah penggalangan kekuatan untuk merobek piagam pemboikotan ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 64,
     "title": "Pembatalan Piagam Pemboikotan di Hadapan Kaum Quraisy",
     "paragraphs": [
      "Ibnu Ishaq melanjutkan kisahnya bahwasanya keesokan harinya, kelima tokoh tersebut segera pergi menuju tempat berkumpulnya kaum Quraisy. Zuhair bin Abi Umayyah mengenakan pakaian indahnya, lalu ia melakukan tawaf di Ka'bah sebanyak tujuh kali putaran.",
      "Setelah selesai tawaf, ia berdiri menghadap ke arah orang-orang yang sedang berkumpul dan berseru dengan suara lantang, \"Wahai penduduk Mekah, apakah kita tega memakan makanan dan mengenakan pakaian, sementara bani Hasyim binasa dalam kondisi mereka tidak boleh membeli dan tidak boleh menjual?!",
      "Demi Allah, aku tidak akan pernah duduk tenang sampai piagam pemboikotan yang zalim dan keji ini robek!\" Abu Jahl bin Hisyam yang saat itu berada di salah satu sudut masjid langsung berteriak menentang, \"Engkau berdusta, demi Allah, piagam itu tidak akan boleh dirobek!\" Zam'ah bin al-Aswad segera menyela perkataan Abu Jahl, \"Engkau yang lebih berdusta, demi Allah!",
      "Kami sendiri tidak rida dengan penulisan piagam itu sejak pertama kali piagam tersebut ditulis.\" Abul Bukhturi bin Hisyam turut menimpali, \"Zam'ah benar. Kami tidak rida dengan apa yang tertulis di dalam piagam itu, dan kami tidak mengakuinya.\" Al-Mut'im bin Adi ikut menegaskan, \"Kalian berdua benar, dan orang yang mengatakan selain itu adalah berdusta.",
      "Kami berlepas diri kepada Allah dari piagam tersebut dan dari apa yang tertulis di dalamnya.\" Hisyam bin Amr pun mengucapkan perkataan yang serupa untuk mendukung mereka.",
      "Melihat kekompakan mereka, Abu Jahl menjadi terkejut dan berkata, \"Urusan ini pasti telah direncanakan dan diputuskan pada malam hari di tempat lain.\" Sementara pertengkaran itu terjadi, Al-Mut'im bin Adi melangkah maju mendekati tempat piagam perjanjian itu digantungkan di dalam Ka'bah dengan tujuan untuk merobeknya.",
      "Namun, ia terkejut ketika mendapati bahwasanya rayap telah memakan seluruh bagian isi piagam tersebut, kecuali bagian tulisan yang memuat nama Allah, yaitu kalimat \"Bismika Allāhumma\" (Dengan nama-Mu, ya Allah). Ibnu Ishaq menceritakan bahwasanya pembuat tulisan piagam pemboikotan tersebut bernama Manshur bin Ikrimah.",
      "Setelah peristiwa penulisan piagam yang zalim itu, tangan Manshur bin Ikrimah dikabarkan mengalami kelumpuhan. Kisah berakhirnya pemboikotan ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 65,
     "title": "Wafatnya Abu Thalib dan Kesedihan Rasulullah ﷺ",
     "paragraphs": [
      "Ibnu Ishaq melanjutkan kisahnya bahwasanya tidak lama setelah bani Hasyim dan bani Al-Muthalib keluar dari lembah pengasingan, kondisi kesehatan Abu Thalib semakin hari semakin menurun. Usianya yang telah lanjut serta beban penderitaan selama bertahun-tahun di dalam lembah membuat fisiknya kian melemah, hingga akhirnya ia jatuh sakit.",
      "Ketika kaum Quraisy mengetahui bahwasanya Abu Thalib telah berada dalam kondisi kritis menjelang wafatnya, mereka saling berkata satu sama lain, \"Sesungguhnya Hamzah dan Umar telah memeluk Islam, dan urusan Muhammad telah tersebar di seluruh kabilah-kabilah Arab.",
      "Maka pergilah kalian menemui Abu Thalib, agar dia dapat membuat sebuah perjanjian untuk kita dengan putra saudaranya.",
      "Demi Allah, kita tidak akan merasa aman jika orang tua ini wafat, lalu bangsa Arab akan menuduh kita telah berbuat sewenang-wenang kepadanya setelah kematian pamannya.\" Maka perwakilan tokoh Quraisy yang di antaranya terdiri dari Utbah bin Rabi'ah, Syaibah bin Rabi'ah, Abu Jahl bin Hisyam, dan Umayyah bin Khalaf segera pergi mendatangi Abu Thalib.",
      "Begitu mereka masuk, mereka mendapati Rasulullah ﷺ sudah berada di dekat kepala pamannya. Di sana juga terdapat Abu Jahl yang duduk menemani.",
      "Rasulullah ﷺ kemudian mendekatkan wajahnya ke telinga Abu Thalib lalu bersabda dengan penuh harap: \"Wahai pamanku, ucapkanlah Lā ilāha illallāh (Tidak ada tuhan selain Allah), sebuah kalimat yang dengannya aku dapat membelamu dan memberikan kesaksian untukmu di hadapan Allah kelak!\" Mendengar bisikan itu, Abu Jahl dan Abdullah bin Abi Umayyah segera menyela dengan berseru, \"Wahai Abu Thalib, apakah engkau akan membenci agama Abdul Muthalib?!\" Mereka berdua terus-menerus mengulangi perkataan tersebut setiap kali Rasulullah ﷺ mengulangi ajakannya kepada sang paman.",
      "Hingga akhirnya, kalimat terakhir yang diucapkan oleh Abu Thalib sebelum napas terakhirnya adalah bahwasanya dia tetap berada di atas agama Abdul Muthalib, dan dia menolak untuk mengucapkan kalimat tauhid tersebut. Abu Thalib wafat dalam kondisi belum memeluk Islam.",
      "Rasulullah ﷺ sangat bersedih atas wafatnya sang paman, lalu beliau bersabda, \"Sungguh, aku benar-benar akan memohonkan ampunan untukmu selama aku tidak dilarang untuk melakukannya.\" Maka sehubungan dengan peristiwa wafatnya Abu Thalib ini, Allah جل جلاله menurunkan firman-Nya di dalam Al-Qur'an: \"Tiadalah sepatutnya bagi Nabi dan orang-orang yang beriman memohonkan ampunan (kepada Allah) bagi orang-orang musyrik, walaupun orang-orang musyrik itu adalah kaum kerabat (mereka), sesudah jelas bagi mereka, bahwasanya orang-orang musyrik itu adalah penghuni neraka Jahanam.\" (QS.",
      "At-Tawbah: 113) Serta firman Allah جل جلاله yang ditujukan langsung kepada Rasulullah ﷺ terkait hidayah: \"Sesungguhnya kamu tidak akan dapat memberi petunjuk kepada orang yang kamu kasihi, tetapi Allah memberi petunjuk kepada orang yang dikehendaki-Nya, dan Allah lebih mengetahui orang-orang yang mau menerima petunjuk.\" (QS.",
      "Al-Qashas: 56) Kisah tentang akhir hayat Abu Thalib dan kesedihan mendalam yang menimpa beliau ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 66,
     "title": "Wafatnya Khadijah binti Khuwailid radhiyallāhu 'anha",
     "paragraphs": [
      "Ibnu Ishaq melanjutkan riwayatnya di dalam kitab Al-Bidayah bahwasanya cobaan yang menimpa Rasulullah ﷺ tidak berhenti sampai di situ. Hanya berselang beberapa bulan—ada yang meriwayatkan tiga hari setelah wafatnya Abu Thalib—istri tercinta beliau, Ummul Mukminin Khadijah binti Khuwailid radhiyallāhu 'anha, juga wafat menemui Tuhannya.",
      "Wafatnya Khadijah radhiyallāhu 'anha menjadi pukulan yang amat berat bagi Rasulullah ﷺ. Selama ini, Khadijah adalah sosok istri yang setia mendampingi beliau, menghibur beliau di kala sedih, menguatkan hati beliau di saat menerima wahyu, dan menyerahkan seluruh harta bendanya demi membela dakwah Islam.",
      "Setiap kali Rasulullah ﷺ mendapatkan penolakan, cercaan, atau perlakuan kasar dari kaum Quraisy, beliau akan pulang menemui Khadijah, dan Khadijah selalu berhasil menenangkan serta meringankan kesedihan beliau. Dengan wafatnya Abu Thalib dan Khadijah radhiyallāhu 'anha dalam waktu yang berdekatan, Rasulullah ﷺ kehilangan dua orang pembela dan pelindung terdekatnya.",
      "Kepergian dua sosok ini membuat kaum Quraisy semakin berani dan leluasa dalam melancarkan gangguan, siksaan, serta intimidasi secara fisik kepada Rasulullah ﷺ, suatu hal yang sebelumnya tidak berani mereka lakukan secara terang-terangan karena segan terhadap perlindungan Abu Thalib.",
      "Karena bertumpuknya kesedihan yang dialami oleh Rasulullah ﷺ pada masa ini, tahun tersebut dikenal di dalam sejarah dengan sebutan 'Amul Huzni (Tahun Kesedihan). Kisah pilu wafatnya Ibunda Khadijah ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 67,
     "title": "Gangguan Kaum Quraisy yang Semakin Meningkat Setelah Wafatnya Abu Thalib",
     "paragraphs": [
      "Ibnu Ishaq melanjutkan kisahnya bahwasanya setelah wafatnya Abu Thalib, kaum Quraisy melancarkan berbagai bentuk gangguan dan perlakuan kasar kepada Rasulullah ﷺ yang sebelumnya tidak pernah berani mereka lakukan semasa hidup Abu Thalib.",
      "Pernah suatu ketika, salah seorang bodoh dari kalangan Quraisy menghadang Rasulullah ﷺ di tengah jalan, lalu orang tersebut melemparkan tanah ke atas kepala beliau. Rasulullah ﷺ kemudian pulang ke rumahnya dalam kondisi tanah masih berlumuran di atas kepalanya.",
      "Melihat kondisi tersebut, salah seorang putri beliau segera bangkit untuk membersihkan tanah dari kepala ayahandanya seraya menangis. Rasulullah ﷺ bersabda untuk menenangkan putrinya: \"Janganlah engkau menangis, wahai putriku!",
      "Sesungguhnya Allah akan bentengi dan lindungi ayahmu.\" Di sela-sela membersihkan kepala beliau, Rasulullah ﷺ juga bersabda: \"Kaum Quraisy tidak pernah melakukan sesuatu yang sangat aku benci pada diriku melainkan setelah Abu Thalib wafat.\" Kisah mengenai meningkatnya intimidasi fisik kaum Quraisy pasca-wafatnya pelindung beliau ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 68,
     "title": "Perjalanan Rasulullah ﷺ Menuju Thaif Demi Mencari Pembelaan",
     "paragraphs": [
      "Ibnu Ishaq melanjutkan kisahnya bahwasanya ketika gangguan kaum Quraisy semakin keras menimpa diri beliau setelah wafatnya Abu Thalib, Rasulullah ﷺ memutuskan untuk bertolak menuju Thaif. Beliau pergi ke sana dengan harapan dapat mencari pembelaan serta perlindungan dari kabilah Tsaqif, sekaligus mengajak mereka untuk menerima agama yang beliau bawa dari sisi Allah جل جلاله.",
      "Rasulullah ﷺ berangkat menuju Thaif seorang diri tanpa ditemani oleh siapa pun. Sesampainya di Thaif, Rasulullah ﷺ segera menemui para pemuka kabilah Tsaqif yang memegang kendali urusan masyarakat pada masa itu. Mereka adalah tiga bersaudara yang merupakan putra dari Amr bin Umair bin Auf, yaitu Abdu Yailil, Mas'ud, dan Habib.",
      "Salah seorang di antara mereka memiliki istri dari kalangan wanita Quraisy dari bani Jumah. Rasulullah ﷺ kemudian duduk bersama mereka, mengajak mereka untuk beriman kepada Allah جل جلاله, serta menyampaikan maksud kedatangan beliau untuk meminta bantuan agar mereka bersedia membentengi beliau dari tindakan kaumnya sendiri yang telah menentang dakwah Islam.",
      "Namun, ketiga pemuka Tsaqif tersebut memberikan penolakan yang sangat kasar.",
      "Salah seorang di antara mereka berkata, \"Dia (Muhammad) akan merobek kain Ka'bah seandainya benar Allah telah mengutusmu sebagai rasul!\" Yang lainnya menimpali, \"Apakah Allah tidak menemukan orang lain selain dirimu untuk diutus?\" Dan yang ketiga berkata, \"Demi Allah, aku tidak akan pernah berbicara denganmu sama sekali!",
      "Jika engkau benar-benar seorang rasul sebagaimana yang engkau katakan, maka kedudukanmu terlalu agung untuk aku bantah perkataannya. Namun jika engkau seorang pendusta atas nama Allah, maka tidak pantas bagiku untuk berbicara denganmu!\" Mendengar penolakan dan sikap keras kepala dari para pemuka Tsaqif tersebut, Rasulullah ﷺ segera bangkit untuk meninggalkan mereka.",
      "Sebelum pergi, beliau bersabda kepada mereka, \"Jika kalian telah memperbuat perkara ini, maka sembunyikanlah urusan ini dari orang lain (jangan kabarkan kepada kaum Quraisy).\" Rasulullah ﷺ tidak menyukai jika kabar penolakan ini sampai ke telinga kaum Quraisy sehingga akan membuat mereka semakin berani untuk menindas beliau.",
      "Kisah perjalanan dan penolakan kabilah Tsaqif ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 69,
     "title": "Pengusiran dan Pelemparan Batu oleh Penduduk Thaif",
     "paragraphs": [
      "Ibnu Ishaq melanjutkan kisahnya bahwasanya para pemuka kabilah Tsaqif menolak untuk menyembunyikan kedatangan Rasulullah ﷺ. Sebaliknya, mereka justru menghasut orang-orang bodoh, para budak, dan kaum jelata di antara mereka untuk bersorak-sorai dan mengusir beliau.",
      "Ketika Rasulullah ﷺ hendak keluar meninggalkan kota Thaif, orang-orang bodoh tersebut telah berbaris di kanan dan kiri jalan yang akan dilalui oleh beliau. Mereka mulai mencaci maki dan melempari kaki Rasulullah ﷺ dengan batu secara bertubi-tubi. Pelemparan batu yang keji itu membuat kedua alas kaki beliau berlumuran darah.",
      "Beliau terus berjalan dalam kondisi terluka hingga akhirnya berhasil menjauh dari kejaran penduduk Thaif dan sampai di sebuah kebun anggur milik Utbah bin Rabi'ah dan Syaibah bin Rabi'ah, dua bersaudara dari pemuka Quraisy. Di kebun itulah Rasulullah ﷺ berteduh di bawah naungan sebatang pohon anggur untuk merawat luka-lukanya.",
      "Sementara itu, Utbah dan Syaibah yang sedang berada di dalam kebun memperhatikan Rasulullah ﷺ dan menyaksikan perlakuan kasar yang baru saja menimpa diri beliau. Rasa iba kerabat muncul di dalam hati keduanya melihat kondisi beliau yang sangat kepayahan. Maka, mereka memanggil seorang pelayan mereka yang beragama Kristen bernama Addas.",
      "Utbah dan Syaibah berkata kepada pelayannya, \"Ambillah setangkai buah anggur ini, letakkan di atas wadah, lalu bawalah kepada pria yang sedang berteduh di sana dan katakan kepadanya agar dia memakannya!\" Addas segera melaksanakan perintah tersebut.",
      "Ia membawa wadah berisi anggur itu lalu meletakkannya di hadapan Rasulullah ﷺ seraya berkata, \"Makanlah.\" Ketika Rasulullah ﷺ hendak mengulurkan tangannya untuk mengambil buah anggur tersebut, beliau mengucapkan: \"Bismillāh\" (Dengan nama Allah). Setelah itu, barulah beliau memakannya.",
      "Addas yang mendengar ucapan tersebut langsung tertegun, lalu ia memperhatikan wajah beliau dengan saksama dan berkata, \"Demi Allah, sesungguhnya kalimat ini sama sekali tidak pernah diucapkan oleh penduduk negeri ini!\" Kisah mengenai penderitaan Rasulullah ﷺ di Thaif dan pertemuannya dengan Addas ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 70,
     "title": "Dialog Antara Rasulullah ﷺ dengan Addas di Kebun Anggur",
     "paragraphs": [
      "Rasulullah ﷺ kemudian berpaling kepada Addas dan bertanya, \"Dari negeri manakah engkau berasal, wahai Addas?",
      "Dan apa agamamu?\" Addas menjawab, \"Aku adalah seorang Kristen, dan aku berasal dari penduduk negeri Ninawa.\" Rasulullah ﷺ bersabda, \"Apakah engkau berasal dari negeri seorang pria yang saleh, Yunus bin Matta?\" Addas terkejut mendengar penuturan itu lalu bertanya, \"Bagaimana engkau bisa mengetahui siapa Yunus bin Matta?!\" Rasulullah ﷺ memberikan jawaban kepada dirinya: \"Dia adalah saudaraku.",
      "Dia dahulu adalah seorang nabi, dan aku pun adalah seorang nabi.\" Mendengar penjelasan tersebut, Addas langsung merunduk dan mencium kepala Rasulullah ﷺ, serta mencium kedua tangan dan kedua kaki beliau yang sebelumnya terluka akibat lemparan batu. Sementara itu, Utbah dan Syaibah memperhatikan apa yang dilakukan oleh pelayan mereka dari kejauhan.",
      "Salah seorang di antara mereka berkata kepada saudaranya, \"Sungguh, pria itu telah merusak pelayanmu!\" Maka ketika Addas telah kembali menemui keduanya, Utbah dan Syaibah langsung menegurnya dengan berkata, \"Celaka engkau, wahai Addas!",
      "Apa yang membuatmu mencium kepala, kedua tangan, dan kedua kaki pria itu?!\" Addas menjawab dengan penuh keyakinan: \"Wahai tuanku, tidak ada satu pun urusan di atas bumi ini yang lebih baik daripada apa yang dibawa oleh pria itu!",
      "Sungguh, dia telah mengabarkan kepadaku tentang suatu perkara yang tidak ada yang mengetahuinya melainkan seorang nabi!\" Utbah dan Syaibah membalas perkataan pelayannya, \"Celaka engkau, wahai Addas!",
      "Jangan sampai dia memalingkanmu dari agamamu, karena sesungguhnya agamamu saat ini masih lebih baik daripada agamanya!\" Kisah dialog dan keislaman Addas di bawah pohon anggur ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 71,
     "title": "Perlindungan Al-Muth'im bin Adi Kepada Rasulullah ﷺ Saat Kembali ke Mekah",
     "paragraphs": [
      "Ibnu Ishaq melanjutkan kisahnya bahwasanya setelah peristiwa di Thaif tersebut, Rasulullah ﷺ bersiap untuk kembali ke kota Mekah. Namun, beliau tidak dapat langsung memasuki kota karena mengetahui bahwa kaum Quraisy telah meningkatkan permusuhan secara terang-terangan setelah wafatnya Abu Thalib.",
      "Oleh karena itu, beliau mengutus seorang pria untuk menemui Al-Akhnas bin Syuraiq guna meminta perlindungan (jiwār), namun Al-Akhnas menolak dengan alasan bahwa seorang sekutu tidak dapat memberikan perlindungan di atas kabilah asli.",
      "Rasulullah ﷺ kemudian mengutus orang untuk menemui Suhail bin Amr, namun Suhail juga menolak dengan alasan bahwa bani Amir tidak dapat memberikan perlindungan di atas bani Ka'ab. Akhirnya, beliau mengutus utusan kepada Al-Muth'im bin Adi.",
      "Mendengar permintaan tersebut, Al-Muth'im bin Adi berkata, \"Benar, aku menerima dan memberikan perlindungan kepadanya.\" Al-Muth'im bin Adi segera memerintahkan anak-anaknya dan kaumnya untuk bersiap.",
      "Ia berkata, \"Kenakanlah senjata kalian, dan berdirilah kalian di sudut-sudut Ka'bah, karena sesungguhnya aku telah memberikan perlindungan kepada Muhammad!\" Maka Rasulullah ﷺ memasuki kota Mekah bersama Zaid bin Haritsah hingga mereka berdua sampai di Masjidil Haram.",
      "Al-Muth'im bin Adi berdiri di atas untanya lalu berseru dengan suara lantang kepada seluruh kaum Quraisy, \"Wahai segenap kaum Quraisy, sesungguhnya aku telah memberikan perlindungan kepada Muhammad, maka jangan ada seorang pun di antara kalian yang berani mengganggunya!\" Rasulullah ﷺ kemudian menuju rukun Ka'bah lalu menyentuhnya, kemudian beliau melakukan shalat dua rakaat.",
      "Setelah selesai, beliau berjalan pulang menuju rumahnya dengan dikawal oleh Al-Muth'im bin Adi beserta anak-anaknya yang mengelilingi beliau dengan senjata terhunus hingga beliau masuk ke dalam rumah. Kisah tentang jaminan perlindungan Al-Muth'im bin Adi yang menepis intimidasi Quraisy ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 72,
     "title": "Pertemuan Rasulullah ﷺ dengan Sekelompok Pemuda Khazraj",
     "paragraphs": [
      "Ibnu Ishaq melanjutkan kisahnya bahwasanya setelah peristiwa jaminan perlindungan dari Al-Muth'im bin Adi tersebut, Rasulullah ﷺ tetap melanjutkan dakwahnya. Ketika musim haji tiba, beliau menggunakan kesempatan itu untuk mendatangi kabilah-kabilah Arab yang datang ke Mekah.",
      "Beliau menawarkan Islam kepada mereka, menyeru mereka kepada Allah جل جلاله, dan mengabarkan tentang risalah kenabian yang beliau bawa. Beliau mendatangi tenda-tenda kabilah tersebut satu per satu, di antaranya adalah kabilah Kinda, Kalb, bani Hanifah, dan bani Amir bin Sha'sha'ah.",
      "Namun, tidak ada satu pun dari kabilah-kabilah tersebut yang menerima seruan beliau; sebagian menolak dengan halus, sementara yang lain menolak dengan cara yang kasar. Hingga akhirnya, ketika Rasulullah ﷺ berada di Aqabah—sebuah tempat di Mina yang menjadi lokasi pelemparan jumrah—beliau bertemu dengan sekelompok pemuda dari kabilah Khazraj yang berasal dari Yatsrib (Madinah).",
      "Allah جل جلاله telah berkehendak untuk mendatangkan kebaikan kepada mereka.",
      "Rasulullah ﷺ bertanya kepada mereka, \"Siapakah kalian?\" Mereka menjawab, \"Kami adalah sekelompok orang dari kabilah Khazraj.\" Rasulullah ﷺ bertanya lagi, \"Apakah kalian adalah sekutu dari kaum Yahudi (di Yatsrib)?\" Mereka menjawab, \"Benar.\" Beliau bersabda, \"Mengapa kalian tidak duduk terlebih dahulu agar aku dapat berbicara dengan kalian?\" Mereka menjawab, \"Tentu.\" Maka mereka pun duduk bersama Rasulullah ﷺ.",
      "Beliau mulai menjelaskan kepada mereka tentang hakikat Islam, menyeru mereka untuk menyembah Allah جل جلاله semata, serta membacakan beberapa ayat dari Al-Qur'an. Orang-orang Khazraj ini sebelumnya sering mendengar penuturan dari tetangga mereka, kaum Yahudi di Yatsrib.",
      "Setiap kali terjadi perselisihan di antara mereka, kaum Yahudi selalu mengancam dengan berkata, \"Sesungguhnya akan segera diutus seorang nabi pada masa ini.",
      "Kami akan mengikuti nabi tersebut, dan kami akan memerangi serta membinasakan kalian bersama nabi itu seperti binasanya kaum 'Ad dan Iram!\" Begitu para pemuda Khazraj itu mendengarkan penjelasan Rasulullah ﷺ, mereka saling berpandangan dan berbisik satu sama lain, \"Demi Allah, tahukah kalian, sesungguhnya pria ini adalah nabi yang selalu diancamkan oleh kaum Yahudi kepada kita!",
      "Maka jangan sampai kaum Yahudi itu mendahului kita untuk beriman kepadanya!\" Maka saat itu juga, mereka menyatakan keimanan mereka kepada Rasulullah ﷺ dan menerima dengan baik ajaran Islam yang beliau sampaikan. Kisah awal mula pertemuan yang menjadi titik balik dakwah Islam di Madinah ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 73,
     "title": "Kepulangan Enam Pemuda Khazraj ke Madinah dan Syiar Islam Pertama",
     "paragraphs": [
      "Ibnu Ishaq melanjutkan kisahnya bahwasanya setelah menyatakan keislaman mereka di hadapan Rasulullah ﷺ, para pemuda dari kabilah Khazraj tersebut berkata kepada beliau: \"Sesungguhnya kami telah meninggalkan kaum kami di Yatsrib, dan tidak ada satu pun kaum yang permusuhan serta keburukan di antara sesamanya lebih parah daripada apa yang terjadi pada mereka (akibat Perang Bu'ats antara Aus dan Khazraj).",
      "Maka semoga Allah menyatukan mereka kembali melalui dirimu. Kami akan segera pulang menemui mereka, menyeru mereka kepada urusan agamamu ini, dan menawarkan kepada mereka apa yang telah kami terima darimu berupa Islam ini.",
      "Jika Allah menyatukan mereka di atas agamamu, maka tidak ada satu pun pria yang lebih mulia di tengah-tengah mereka daripada dirimu.\" Pernyataan tersebut mereka sampaikan seraya berpamitan untuk kembali ke negeri mereka. Ibnu Ishaq menyebutkan bahwasanya para pemuda Khazraj yang mendatangi Rasulullah ﷺ pada musim haji tersebut berjumlah enam orang.",
      "Mereka adalah As'ad bin Zurarah bin Ads dari bani Al-Najjar, Auf bin al-Harits bin Rifa'ah (putra dari Afra') dari bani Al-Najjar, Rafi' bin Malik bin al-Ajlan dari bani Zuraiq, Quthbah bin Amir bin Hadidah dari bani Salimah, Uqbah bin Amir bin Nabi dari bani Ghanam bin Ali bin Ghasm, dan Jabir bin Abdullah bin Riab dari bani Ubaid bin Adi.",
      "Ketika keenam pemuda ini telah sampai kembali di kota Madinah, mereka segera menyampaikan kabar tentang Rasulullah ﷺ kepada kaumnya. Mereka mengajak masyarakat Yatsrib untuk mengenal Islam serta membacakan ayat-ayat Al-Qur'an yang telah mereka pelajari.",
      "Syiar Islam pun mulai tersebar luas dengan sangat cepat, hingga akhirnya tidak ada satu pun rumah dari rumah-rumah kabilah Anshar di Madinah melainkan di dalamnya telah disebut-sebut nama Rasulullah ﷺ. Kisah tersebarnya awal dakwah di Madinah ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 74,
     "title": "Baiat Aqabah Pertama",
     "paragraphs": [
      "Ibnu Ishaq melanjutkan kisahnya bahwasanya dakwah Islam terus berkembang di kota Madinah hingga tiba musim haji pada tahun berikutnya. Dari kota Yatsrib, datanglah dua belas orang pria dari kalangan Ansar untuk menemui Rasulullah ﷺ di Aqabah. Pertemuan ini menjadi momentum terjadinya Baiat Aqabah yang pertama.",
      "Di antara dua belas orang yang hadir tersebut, lima orang merupakan bagian dari enam pemuda yang telah datang pada musim haji sebelumnya. Mereka adalah As'ad bin Zurarah, Auf bin al-Harits, Rafi' bin Malik, Quthbah bin Amir, dan Uqbah bin Amir. Adapun satu orang yang tidak hadir dari kelompok pertama adalah Jabir bin Abdullah bin Riab.",
      "Sementara itu, tujuh orang lainnya merupakan wajah-wajah baru yang menyatakan keislamannya. Dari kabilah Khazraj, mereka adalah Mu'adz bin al-Harits (saudara laki-laki Auf), Dzakwan bin Abdi Qais (yang kemudian menetap di Mekah hingga berhijrah), Ubadah bin ash-Shamit bin Qais, Yazid bin Tsa'labah bin Khazam, serta Al-Abbas bin Ubadah bin Nadhlah.",
      "Adapun dari kabilah Aus, dua orang pria yang ikut bergabung adalah Abu al-Haitsam bin at-Tayyihan (pemilik nama asli Malik) dan Uwaim bin Sa'idah. Ubadah bin ash-Shamit raḍiyallāhu 'anhu meriwayatkan jalannya peristiwa pembaiatan tersebut.",
      "Ia menuturkan, \"Kami berada di Aqabah yang pertama, dan kami membaiat Rasulullah ﷺ di atas baitun-nisa' (perjanjian yang serupa dengan ketentuan bagi kaum wanita), sebelum diwajibkannya perang atas kami.",
      "Kami berjanji untuk tidak menyekutukan Allah dengan sesuatu pun, tidak mencuri, tidak berzina, tidak membunuh anak-anak kami, tidak membuat-buat dusta yang kami ada-adakan antara tangan dan kaki kami, serta tidak mendurhakai beliau dalam perkara kebajikan.\" Setelah baiat diucapkan, Rasulullah ﷺ bersabda kepada mereka: \"Jika kalian memenuhi janji ini, maka bagi kalian adalah surga.",
      "Namun, jika kalian melanggar sesuatu dari perkara-perkara tersebut, lalu kalian dihukum di dunia, maka hukuman itu merupakan kaffarah (penebus dosa) bagi kalian.",
      "Dan jika kalian melanggarnya, kemudian Allah menutupinya di dunia, maka urusan kalian dikembalikan kepada Allah; jika Dia berkehendak, Dia akan mengampuni kalian, dan jika Dia berkehendak, Dia akan menyiksa kalian.\" Kisah ikatan janji setia pertama dari penduduk Madinah ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 75,
     "title": "Pengutusan Mus'ab bin Umair ke Madinah untuk Mengajarkan Islam",
     "paragraphs": [
      "Ibnu Ishaq melanjutkan kisahnya bahwasanya setelah dua belas orang pria Ansar tersebut menyelesaikan Baiat Aqabah Pertama dan hendak kembali ke Madinah, Rasulullah ﷺ mengutus seorang sahabat bersama mereka. Beliau mengutus Mus'ab bin Umair bin Hasyim bin Abdi Manaf bin Abdid Dar.",
      "Rasulullah ﷺ memerintahkan Mus'ab bin Umair untuk membacakan Al-Qur'an kepada penduduk Yatsrib, mengajarkan kepada mereka hakikat agama Islam, serta memahamkan mereka tentang syariat-syariatnya. Oleh karena itu, di kota Madinah, Mus'ab bin Umair kemudian dikenal secara luas dengan julukan Al-Muqri' (Sang Pengajar Al-Qur'an).",
      "Setibanya di Madinah, Mus'ab bin Umair tinggal menetap di rumah As'ad bin Zurarah bin Ads. Dari rumah As'ad bin Zurarah inilah, Mus'ab mulai bergerak aktif menyebarkan dakwah, membacakan ayat-ayat Allah جل جلاله, dan menyeru masyarakat Madinah untuk memeluk Islam, sehingga jumlah kaum muslimin di kota tersebut semakin hari semakin bertambah banyak.",
      "Kisah mengenai pengutusan duta Islam pertama ke Madinah ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 76,
     "title": "Keislaman Usaid bin Hudhair dan Sa'ad bin Mu'adz melalui Dakwah Mus'ab bin Umair",
     "paragraphs": [
      "Ibnu Ishaq melanjutkan kisahnya bahwasanya Mus'ab bin Umair bersama As'ad bin Zurarah terus bergerak menyebarkan Islam di Madinah. Suatu hari, keduanya berjalan hingga memasuki sebuah perkebunan milik bani Abdul Asyhal dan bani Zhafar. Di kebun tersebut, terdapat sebuah sumur bernama sumur Maraq.",
      "Mus'ab dan As'ad duduk di dekat sumur itu, lalu beberapa orang pria dari kalangan kaum muslimin datang berkumpul di sekitar mereka. Pada saat itu, Sa'ad bin Mu'adz dan Usaid bin Hudhair, yang merupakan dua pemuka dari kabilah bani Abdul Asyhal, masih memeluk agama kesyirikan kabilahnya.",
      "Ketika Sa'ad bin Mu'adz mendengar kabar tentang kedatangan Mus'ab dan As'ad di wilayahnya, ia berkata kepada Usaid bin Hudhair, \"Pergilah engkau menemui dua pria yang telah datang ke perkampungan kita ini untuk membodoh-bodohi orang-orang lemah di antara kita! Hardiklah mereka berdua dan laranglah mereka untuk mendatangi perkampungan kita lagi.",
      "Seandainya As'ad bin Zurarah bukan sepupuku (putra dari bibiku), niscaya aku sendiri yang akan mendatangi dan menyelesaikannya.\" Maka Usaid bin Hudhair segera mengambil tombaknya lalu berjalan menemui Mus'ab dan As'ad.",
      "Ketika As'ad bin Zurarah melihat kedatangan Usaid dengan membawa senjata, ia berbisik kepada Mus'ab bin Umair, \"Pria ini adalah pemuka kaumnya yang datang menemuimu, maka bersikap jujurlah engkau kepada Allah dalam menghadapinya.\" Mus'ab menjawab, \"Jika dia mau duduk, aku akan berbicara kepadanya.\" Usaid bin Hudhair berdiri di hadapan mereka berdua sambil melontarkan kata-kata kasar, \"Perkara apa yang membawa kalian berdua mendatangi kami?",
      "Apakah kalian hendak membodoh-bodohi orang-orang lemah di antara kami?! Menjauhlah dari kami jika kalian masih menyayangi diri kalian!\" Mus'ab bin Umair menjawab dengan penuh ketenangan: \"Mengapa engkau tidak duduk dan mendengarkan terlebih dahulu? Jika engkau rida dengan perkara yang kami sampaikan, engkau dapat menerimanya.",
      "Namun jika engkau membencinya, kami akan menghentikan perkara yang engkau benci itu dari dirimu.\" Usaid berkata, \"Engkau telah bersikap adil.\" Ia pun menancapkan tombaknya ke tanah lalu duduk mendengarkan. Mus'ab mulai menjelaskan tentang hakikat Islam kepada Usaid dan membacakan ayat-ayat Al-Qur'an.",
      "Ibnu Ishaq menceritakan bahwasanya demi Allah, sebelum Usaid berbicara, keindahan Islam telah tampak pada pancaran wajah dan ketenangannya. Usaid kemudian berseru, \"Alangkah indahnya dan bagusnya perkataan ini!",
      "Apa yang harus dilakukan oleh seseorang jika ia ingin masuk ke dalam agama ini?\" Mus'ab dan As'ad menjawab, \"Engkau mandi, membersihkan pakaianmu, mengucapkan kesaksian yang haq (syahadat), kemudian engkau mendirikan shalat.\" Usaid segera bangkit melakukan perkara tersebut, lalu ia bersabda, \"Sesungguhnya di belakangku ada seorang pria (Sa'ad bin Mu'adz) yang jika dia mengikutimu, niscaya tidak akan ada satu pun orang dari kaumnya yang tertinggal untuk mengikutimu.",
      "Aku akan segera mengirimnya kemari.\" Usaid bin Hudhair pun kembali menemui Sa'ad bin Mu'adz yang sedang duduk berkumpul bersama kaumnya.",
      "Begitu melihat Usaid datang, Sa'ad bin Mu'adz berkata kepada kaumnya, \"Demi Allah, Usaid datang menemui kalian dengan wajah yang berbeda dari saat dia pergi tadi.\" Sa'ad bertanya, \"Apa yang telah engkau perbuat?\" Usaid menjawab, \"Aku telah berbicara kepada dua pria itu, dan demi Allah, aku melihat tidak ada masalah pada urusan mereka berdua.",
      "Namun, aku mendengar bani Haritsah telah keluar untuk membunuh As'ad bin Zurarah karena mereka mengetahui dia adalah sepupumu, dengan tujuan untuk merusak perjanjianmu.\" Mendengar kabar tersebut, Sa'ad bin Mu'adz bangkit dengan penuh amarah demi melindungi sepupunya. Ia mengambil tombak lalu pergi menuju kebun.",
      "Namun sesampainya di sana, ia mendapati Mus'ab dan As'ad sedang duduk dengan tenang. Sa'ad menyadari bahwasanya Usaid sengaja melakukan hal itu agar dirinya mau datang dan mendengarkan dakwah mereka.",
      "Sa'ad bin Mu'adz berdiri di hadapan mereka berdua seraya berkata dengan nada keras kepada As'ad bin Zurarah, \"Wahai Abu Umamah, demi Allah, seandainya tidak ada hubungan kekerabatan di antara kita, niscaya engkau tidak akan bisa membawa perkara yang kami benci ini ke perkampungan kami!\" Mus'ab bin Umair kembali mengulang perkataan yang serupa, \"Mengapa engkau tidak duduk dan mendengarkan terlebih dahulu?",
      "Jika engkau rida dengan perkara yang kami sampaikan, engkau dapat menerimanya. Namun jika engkau membencinya, kami akan menjauhkan perkara yang engkau benci itu dari dirimu.\" Sa'ad bin Mu'adz menjawab, \"Engkau bersikap adil.\" Ia pun meletakkan tombaknya lalu duduk mendengarkan. Mus'ab menawarkan Islam kepadanya dan membacakan ayat-ayat Al-Qur'an.",
      "Pancaran keindahan Islam langsung meresap ke dalam diri Sa'ad bin Mu'adz bahkan sebelum ia bersuara. Ia menanyakan cara masuk Islam, lalu melakukan mandi, bersuci, mengucapkan syahadat, dan melakukan shalat. Setelah menyatakan keislamannya, Sa'ad bin Mu'adz segera kembali menuju tempat berkumpulnya kabilah bani Abdul Asyhal.",
      "Ia berdiri di hadapan kaumnya dan berseru, \"Wahai bani Abdul Asyhal, bagaimana kedudukan diriku di tengah-tengah kalian?\" Kaumnya menjawab, \"Engkau adalah pemuka kami, orang yang paling bijak pandangannya, dan paling mulia urusannya di antara kami.\" Sa'ad bin Mu'adz kemudian menegaskan dengan penuh ketetapan: \"Maka haram hukumnya bagi pembicaraan pria dan wanita di antara kalian dengan diriku, sampai kalian semua beriman kepada Allah dan Rasul-Nya!\" Demi Allah, hari itu belum lagi berganti menjadi malam, melainkan seluruh rumah dari rumah-rumah bani Abdul Asyhal, baik pria maupun wanita, semuanya telah menyatakan keislaman mereka secara serentak.",
      "Mus'ab bin Umair pun kembali ke rumah As'ad bin Zurarah dan terus mengajarkan Islam hingga Madinah dipenuhi oleh cahaya keimanan. Kisah keislaman dua pemuka besar Madinah yang menggerakkan seluruh kaumnya ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 77,
     "title": "Persiapan Keberangkatan Kaum Muslimin Madinah Menuju Musim Haji",
     "paragraphs": [
      "Ibnu Ishaq melanjutkan kisahnya bahwasanya setelah dakwah Islam tersebar luas di kota Madinah melalui perantaraan Mus'ab bin Umair, musim haji berikutnya pun tiba. Mus'ab bin Umair memutuskan untuk kembali ke kota Mekah. Dari kota Madinah, sekelompok masyarakat Ansar yang telah memeluk Islam berangkat bersama-sama dengan kaumnya yang masih memeluk agama kesyirikan.",
      "Mereka bertolak menuju Mekah dengan tujuan untuk menunaikan ibadah haji. Selama dalam perjalanan dan sesampainya di Mekah, kaum muslimin dari kalangan Ansar ini menyembunyikan keislaman mereka secara rapat-rapat dari kaum musyrikin yang berangkat bersama mereka.",
      "Mereka saling berjanji untuk mengadakan pertemuan rahasia dengan Rasulullah ﷺ di tempat yang sama pada musim haji sebelumnya. Mereka menetapkan rencana untuk berkumpul di Aqabah pada hari-hari tasyrik. Ikatan janji rahasia ini mereka sepakati demi menjaga keselamatan dakwah dan menghindari makar serta permusuhan dari kaum Quraisy yang berada di Mekah.",
      "Kisah persiapan keberangkatan dan rencana pertemuan rahasia ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 78,
     "title": "Kesepakatan Pertemuan Malam Hari di Aqabah",
     "paragraphs": [
      "Ibnu Ishaq melanjutkan kisahnya bahwasanya ketika kaum muslimin dari kalangan Ansar telah menyelesaikan rangkaian ibadah haji mereka bersama kaum musyrikin dari penduduk Yatsrib, mereka bersiap untuk merealisasikan rencana pertemuan dengan Rasulullah ﷺ. Mereka menetapkan malam pertengahan hari tasyrik sebagai waktu pertemuan rahasia tersebut.",
      "Ka'ab bin Malik raḍiyallāhu 'anhu meriwayatkan jalannya peristiwa malam itu. Ia menceritakan bahwa sepanjang malam, mereka tidur di tempat bermalam mereka bersama kaumnya yang masih musyrik. Ketika sepertiga malam terakhir tiba dan manusia telah tertidur lelap, kaum muslimin Ansar mulai keluar dari tempat pembaringan mereka secara sembunyi-sembunyi.",
      "Mereka menyelinap keluar satu per satu dengan sangat hati-hati layaknya burung-burung yang merayap di dalam kegelapan, agar tidak menimbulkan kecurigaan bagi kaum musyrikin yang ada di sekitar mereka. Mereka semua berjalan menuju tempat pertemuan di lembah dekat Aqabah. Sesampainya di sana, mereka berkumpul menantikan kedatangan Rasulullah ﷺ.",
      "Jumlah kaum muslimin dari Madinah yang berhasil berkumpul di lembah Aqabah pada malam itu adalah tujuh puluh tiga orang pria, dan disertai oleh dua orang wanita dari kalangan mereka.",
      "Kedua wanita yang ikut hadir menyaksikan peristiwa bersejarah tersebut adalah Nusaibah binti Ka'ab bin Amr (yang dikenal dengan julukan Ummu Umarah) dari bani Mazin bin An-Najjar, serta Asma binti Amr bin Adi (yang dikenal dengan julukan Ummu Mani') dari bani Salimah. Kisah perkumpulan rahasia para pembela Islam di Aqabah ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 79,
     "title": "Pertemuan Lembah Aqabah dan Kehadiran Al-Abbas bin Abdul Muthalib",
     "paragraphs": [
      "Ibnu Ishaq melanjutkan kisahnya bahwasanya setelah tujuh puluh tiga orang pria dan dua orang wanita dari kalangan Ansar berkumpul di lembah dekat Aqabah, tidak lama kemudian datanglah Rasulullah ﷺ. Beliau tidak datang seorang diri, melainkan didampingi oleh pamannya, Al-Abbas bin Abdul Muthalib, yang pada saat itu masih memeluk agama kaumnya (belum masuk Islam).",
      "Al-Abbas ingin hadir dalam pertemuan tersebut untuk memastikan keselamatan dan mengukuhkan jaminan bagi putra saudaranya. Al-Abbas bin Abdul Muthalib menjadi orang pertama yang angkat bicara di hadapan jamaah Ansar yang telah berkumpul. Ia berseru, \"Wahai segenap kaum Khazraj!",
      "Sesungguhnya Muhammad berada di tengah-tengah kami dalam kemuliaan dan benteng pertahanan dari kaumnya sendiri, serta dari orang-orang yang memiliki pandangan yang sama dengan kami tentang urusannya. Namun, dia enggan melainkan ingin bergabung bersama kalian dan menyatu dengan kalian.",
      "Jika kalian merasa mampu untuk memenuhi apa yang kalian serukan kepadanya, serta mampu melindunginya dari orang-orang yang menyelisihi dirinya, maka silakan kalian pikul tanggung jawab yang telah kalian ambil itu.",
      "Akan tetapi, jika kalian memperkirakan akan menyerahkannya dan membiarkannya terlantar setelah dia keluar bersama kalian, maka dari sekarang tinggalkanlah dia!\" Mendengar perkataan Al-Abbas, kaum Ansar berpaling dan berkata, \"Kami telah mendengar apa yang engkau ucapkan.\" Kemudian mereka menghadap kepada Rasulullah ﷺ dan berkata, \"Berbicaralah, wahai Rasulullah!",
      "Ambillah janji untuk dirimu dan untuk Tuhanmu sesuai dengan apa yang engkau cintai.\" Maka Rasulullah ﷺ mulai berbicara. Beliau membacakan ayat-ayat Al-Qur'an, menyeru mereka kepada Allah جل جلاله, dan memberikan motivasi yang kuat agar mereka tetap teguh di dalam Islam. Kisah dimulainya dialog pembaiatan besar di lembah Aqabah ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 80,
     "title": "Janji Setia Baiat Aqabah Kedua",
     "paragraphs": [
      "Ibnu Ishaq melanjutkan kisahnya bahwasanya setelah Rasulullah ﷺ menyampaikan seruannya, beliau bersabda mengenai syarat pembaiatan: \"Aku membaiat kalian untuk melindungi diriku sebagaimana kalian melindungi wanita-wanita dan anak-anak kalian.\" Mendengar perkataan tersebut, Al-Bara' bin Ma'rur segera memegang tangan Rasulullah ﷺ lalu berkata, \"Benar, demi Dzat yang telah mengutusmu dengan kebenaran sebagai seorang nabi, kami pasti akan melindungimu sebagaimana kami melindungi keluarga kami!",
      "Maka baiatlah kami, wahai Rasulullah!",
      "Demi Allah, kami adalah putra-putra peperangan dan ahli dalam persenjataan yang telah kami warisi secara turun-temurun.\" Ketika Al-Bara' sedang berbicara dengan Rasulullah ﷺ, Abu al-Haitsam bin at-Tayyihan memotong pembicaraan seraya berkata, \"Wahai Rasulullah, sesungguhnya di antara kami dan orang-orang itu (kaum Yahudi) ada hubungan tali perjanjian, dan kami akan memutuskannya.",
      "Apakah jika kami telah melakukannya, kemudian Allah memenangkan dirimu, engkau akan kembali kepada kaummu dan meninggalkan kami?\" Rasulullah ﷺ tersenyum lalu bersabda: \"Tidak, bahkan darah dibalas darah, dan kehancuran dibalas kehancuran. Aku adalah bagian dari kalian dan kalian adalah bagian dari diriku.",
      "Aku akan memerangi siapa saja yang kalian perangi, dan aku akan berdamai dengan siapa saja yang kalian ajak berdamai.\" Setelah itu, Rasulullah ﷺ bersabda kepada mereka, \"Keluarkanlah kepadaku dua belas orang pemimpin (naqib) dari kalangan kalian agar mereka menjadi penanggung jawab atas kaumnya.\" Maka mereka segera mengeluarkan sembilan orang pemimpin dari kabilah Khazraj dan tiga orang pemimpin dari kabilah Aus.",
      "Kisah pengukuhan janji setia dan pemilihan para pemimpin Ansar ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 81,
     "title": "Terbongkarnya Pertemuan Rahasia Aqabah dan Seruan Setan",
     "paragraphs": [
      "Ibnu Ishaq melanjutkan kisahnya bahwasanya setelah dua belas orang pemimpin (naqib) dari kalangan Ansar terpilih, mereka segera mengambil tanggung jawab atas kaumnya masing-masing. Ketika seluruh jamaah yang hadir telah bersiap untuk memulai prosesi jabat tangan pembaiatan satu per satu, tiba-tiba terdengar teriakan yang sangat keras dari puncak Aqabah.",
      "Teriakan itu berseru dengan suara yang sangat lantang dan melengking, yang belum pernah didengar ada suara selantang itu sebelumnya, \"Wahai para penghuni kemah-kemah yang ada di Mina!",
      "Apakah kalian membiarkan Muhammad beserta orang-orang yang telah murtad (keluar dari agama nenek moyang) bersamanya berkumpul untuk memerangi kalian?!\" Mendengar teriakan yang membongkar rahasia tersebut, Rasulullah ﷺ segera bersabda kepada jamaah kaum Ansar yang berada di lembah: \"Ini adalah setan penghuni Aqabah.",
      "Ini adalah putra dari Azab.\" Setelah itu, Rasulullah ﷺ mendongak ke arah sumber suara tersebut dan berseru menantang, \"Ingatlah, demi Allah, wahai musuh Allah, sesungguhnya aku benar-benar akan menyelesaikan urusan ini denganmu sampai tuntas!\" Rasulullah ﷺ kemudian segera menoleh kembali kepada kaum Ansar dan memerintahkan mereka dengan tegas, \"Sekarang, kembalilah kalian menuju tempat pembaringan dan kemah kalian masing-masing.\" Mendengar perintah tersebut, Al-Abbas bin Ubadah bin Nadhlah langsung menyela seraya berkata kepada beliau, \"Demi Allah yang telah mengutusmu dengan kebenaran sebagai seorang nabi, jika engkau menghendaki, niscaya besok pagi kami benar-benar akan menebaskan pedang-pedang kami kepada para penghuni Mina (kaum musyrikin)!\" Namun, Rasulullah ﷺ memberikan jawaban kepada mereka: \"Kita tidak diperintahkan untuk melakukan perkara peperangan tersebut.",
      "Oleh karena itu, kembalilah kalian menuju tempat pembaringan kalian.\" Maka kaum Ansar segera menyelinap kembali menuju tempat tidur mereka di kemah-kemah Mina, lalu mereka tidur di sana hingga pagi hari tiba. Kisah terbongkarnya baiat rahasia akibat seruan setan Aqabah ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 82,
     "title": "Investigasi Kaum Quraisy terhadap Kabar Baiat Aqabah",
     "paragraphs": [
      "Ibnu Ishaq melanjutkan kisahnya bahwasanya ketika pagi hari telah tiba, kabar mengenai pertemuan rahasia di Aqabah tersebut akhirnya sampai ke telinga para pemuka kaum Quraisy. Hal ini memicu kegemparan di kalangan mereka, sehingga sekelompok tokoh pemuka Quraisy segera mendatangi tempat perkemahan kabilah-kabilah penduduk Yatsrib yang berada di Mina.",
      "Sesampainya di sana, para pemuka Quraisy langsung melayangkan protes dan interogasi dengan berkata, \"Wahai segenap kaum Khazraj! Sesungguhnya telah sampai sebuah kabar kepada kami bahwasanya kalian telah mendatangi pria dari kalangan kami ini (Muhammad) untuk membawanya keluar dari kota kami, serta kalian telah membaiatnya untuk memerangi kami!",
      "Demi Allah, sesungguhnya tidak ada satu pun kabilah dari kalangan bangsa Arab yang paling kami benci jika sampai terjadi peperangan di antara kami dengan mereka, melainkan kalian!\" Mendengar tuduhan mendadak tersebut, orang-orang musyrik dari penduduk Yatsrib yang ikut dalam rombongan haji langsung terkejut karena mereka memang sama sekali tidak mengetahui apa-apa tentang pertemuan rahasia yang terjadi pada sepertiga malam terakhir itu.",
      "Mereka pun segera bersumpah dengan nama Allah untuk meyakinkan kaum Quraisy seraya berkata, \"Demi Allah, kabar itu sama sekali tidak benar, dan hal seperti itu tidak pernah terjadi pada kami!\" Sementara itu, kaum muslimin dari kalangan Ansar yang berada di tempat tersebut memilih untuk saling berdiam diri dan tidak mengucapkan sepatah kata pun.",
      "Mereka membiarkan orang-orang musyrik dari kaumnya terus memberikan pembelaan dan bantahan kepada Quraisy. Para pemuka Quraisy pun akhirnya memercayai bantahan orang-orang musyrik Yatsrib tersebut, lalu mereka berdiri dan meninggalkan tempat perkemahan dengan keyakinan bahwa kabar angin itu hanyalah dusta.",
      "Kisah investigasi kaum Quraisy di perkemahan Mina ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 83,
     "title": "Pengejaran Kaum Quraisy Terhadap Kaum Ansar",
     "paragraphs": [
      "Ibnu Ishaq melanjutkan kisahnya bahwasanya setelah rombongan haji dari Yatsrib bertolak kembali ke negeri mereka, kaum Quraisy terus melakukan penyelidikan secara mendalam. Hingga akhirnya, mereka berhasil mendapatkan kepastian dan bukti yang sangat jelas bahwasanya pertemuan rahasia serta pembaiatan Rasulullah ﷺ benar-benar telah terjadi di Aqabah.",
      "Begitu menyadari bahwasanya kabar tersebut adalah fakta, para penunggang kuda dari kalangan kaum Quraisy segera dikerahkan untuk melakukan pengejaran secara besar-besaran terhadap rombongan kaum Ansar yang telah meninggalkan Mekah. Mereka memacu kuda-kuda mereka dengan cepat demi menangkap para pembela Islam tersebut. Namun, rombongan kaum Ansar telah berjalan cukup jauh.",
      "Para penunggang kuda Quraisy tidak berhasil mengejar rombongan utama, melainkan hanya menemukan dua orang pemimpin Ansar yang terpisah di tengah jalan. Dua orang tersebut adalah Sa'ad bin Ubadah bin Dulaim dari kabilah Khazraj dan Al-Mundzir bin Amr bin Khunais dari kabilah Aus.",
      "Ketika menyadari keberadaan para pengejar Quraisy, Al-Mundzir bin Amr segera menggunakan kelincahannya untuk meloloskan diri, hingga akhirnya ia berhasil melarikan diri dan tidak dapat ditangkap oleh mereka. Adapun Sa'ad bin Ubadah, ia berhasil dikepung dan ditangkap oleh para penunggang kuda Quraisy.",
      "Kaum Quraisy segera mengikat kedua tangan Sa'ad bin Ubadah ke lehernya dengan menggunakan tali pelana untanya sendiri. Mereka kemudian menyeretnya, memukulinya, dan menjambak rambutnya yang lebat sepanjang jalan menuju kota Mekah dalam kondisi tertawan. Kisah pengejaran kaum Quraisy dan tertawannya Sa'ad bin Ubadah ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 84,
     "title": "Penyelamatan Sa'ad bin Ubadah oleh Pemuka Quraisy",
     "paragraphs": [
      "Ibnu Ishaq melanjutkan kisahnya bahwasanya Sa'ad bin Ubadah raḍiyallāhu 'anhu menuturkan sendiri peristiwa yang dialaminya ketika berada dalam siksaan kaum Quraisy di kota Mekah. Beliau menceritakan, \"Demi Allah, ketika aku berada di tangan mereka dalam kondisi diseret dan disiksa, tiba-tiba muncul sekelompok pria dari kalangan kaum Quraisy.",
      "Di antara mereka tampak seorang pria yang berkulit putih, bersih, dan bertubuh jangkung. Di dalam hatiku, aku berkata, 'Jika ada kebaikan pada salah seorang dari kaum ini, maka pastilah ada pada pria jangkung ini.'\" Namun, begitu pria jangkung tersebut mendekat ke arah Sa'ad bin Ubadah, ia justru melayangkan pukulan yang sangat keras ke wajah beliau.",
      "Sa'ad melanjutkan, \"Maka aku berkata di dalam diriku sendiri, 'Demi Allah, setelah peristiwa ini, tidak ada lagi kebaikan yang tersisa pada mereka sedikit pun.'\" Ketika Sa'ad bin Ubadah sedang terus-menerus dipukuli dan diseret di tengah jalan, datanglah seorang pria dari kalangan Quraisy yang merasa iba melihat kondisinya.",
      "Pria tersebut mendekat lalu berbisik ke telinga Sa'ad bin Ubadah, \"Celaka engkau! Apakah engkah tidak memiliki ikatan jaminan perlindungan (jiwār) atau perjanjian dengan salah seorang dari pemuka Quraisy?\" Sa'ad menjawab, \"Tentu, aku memilikinya.",
      "Aku dahulu selalu melindungi kafilah dagang milik Jubair bin Muth'im bin Adi dan menjamin urusan mereka dari gangguan orang-orang di negeriku. Aku juga selalu melindungi kafilah dagang milik Al-Harits bin Harb bin Umayyah bin Abdi Syams.\" Pria Quraisy itu segera berseru kepada orang-orang yang sedang menyiksa, \"Celaka kalian!",
      "Lepaskan tangan kalian dari pria ini, karena sesungguhnya dia adalah orang yang menjamin urusan dan melindungi kafilah dagang milik Jubair bin Muth'im dan Al-Harits bin Harb!\" Pria itu kemudian segera berlari menuju Masjidil Haram untuk menemui Jubair bin Muth'im dan Al-Harits bin Harb yang sedang duduk bersama.",
      "Sesampainya di sana, ia mengabarkan, \"Sesungguhnya ada seorang pria dari kabilah Khazraj sedang dipukuli di lembah Mekah, dan dia menyebut-nyebut nama kalian berdua serta menyebutkan adanya hubungan jaminan di antara kalian.\" Jubair dan Al-Harits terkejut lalu bertanya, \"Siapakah nama pria itu?\" Pria tersebut menjawab, \"Dia adalah Sa'ad bin Ubadah.\" Jubair bin Muth'im dan Al-Harits bin Harb segera bangkit dan berkata, \"Benar, demi Allah, apa yang dikatakannya adalah sebuah kebenaran.",
      "Dia selalu melindungi urusan dagang kita di negerinya.\" Keduanya langsung bergegas pergi menuju tempat Sa'ad bin Ubadah ditawan, lalu mereka melepaskan ikatan talinya dan menyelamatkannya dari siksaan kaum Quraisy hingga akhirnya beliau dapat kembali ke Madinah dengan selamat. Kisah penyelamatan Sa'ad bin Ubadah melalui jaminan dagang ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 85,
     "title": "Izin Berhijrah ke Madinah Bagi Kaum Muslimin",
     "paragraphs": [
      "Ibnu Ishaq melanjutkan kisahnya bahwasanya setelah peristiwa Baiat Aqabah Kedua selesai dan kaum Ansar telah kembali ke Madinah, Rasulullah ﷺ tetap tinggal di kota Mekah untuk beberapa waktu. Gangguan dan tekanan yang dilancarkan oleh kaum Quraisy kepada para sahabat beliau yang berada di Mekah semakin hari semakin keras dan bertubi-tubi.",
      "Kaum Quraisy merasa sangat terancam dengan adanya ikatan janji setia antara Rasulullah ﷺ dengan penduduk Yatsrib. Melihat kondisi para sahabatnya yang terus berada dalam siksaan dan penyempitan, Rasulullah ﷺ akhirnya memberikan amanat dan izin kepada kaum muslimin untuk berhijrah.",
      "Beliau bersabda kepada mereka: \"Sesungguhnya Allah جل جلاله telah menjadikan bagi kalian saudara-saudara dan negeri yang aman untuk tempat kalian berlindung.\" Maka setelah mendapatkan izin tersebut, kaum muslimin di Mekah mulai bersiap-siap untuk keluar dari kota mereka. Mereka mengemas barang-barang mereka secara sembunyi-sembunyi agar tidak ketahuan oleh kaum Quraisy.",
      "Mereka mulai berhijrah secara bertahap menuju kota Madinah untuk bergabung dengan saudara-saudara mereka dari kalangan Ansar. Kisah dimulainya perintah hijrah menuju Madinah ini tercantum di dalam kitab Al-Bidayah."
     ]
    },
    {
     "id": 86,
     "title": "Tokoh Kaum Muslimin yang Pertama Kali Berhijrah ke Madinah",
     "paragraphs": [
      "Ibnu Ishaq melanjutkan kisahnya mengenai nama-nama para sahabat Rasulullah ﷺ dari kalangan Muhajirin yang pertama kali bertolak melakukan hijrah menuju kota Madinah. Sahabat yang pertama kali berangkat menuju Madinah dari kalangan bani Makhzum adalah Abu Salamah bin Abdil Asad. Nama asli beliau adalah Abdullah bin Abdil Asad bin Hilal bin Abdullah bin Umar bin Makhzum.",
      "Abu Salamah berangkat berhijrah menuju Madinah satu tahun sebelum terjadinya peristiwa Baiat Aqabah Kedua. Hal itu terjadi karena ketika beliau kembali dari tanah Habasyah (Etiopia) menuju Mekah, kaum Quraisy langsung melancarkan intimidasi dan gangguan yang keras kepada dirinya.",
      "Begitu mendengar kabar tentang keberadaan kaum Ansar di Yatsrib yang telah menerima Islam, Abu Salamah memutuskan untuk segera keluar menuju Madinah demi mengamankan diri dan agamanya. Setelah Abu Salamah, sahabat berikutnya yang menyusul berhijrah ke Madinah adalah Amir bin Rabi'ah. Beliau merupakan sekutu dari bani Adi bin Ka'ab.",
      "Amir bin Rabi'ah berangkat berhijrah bersama istrinya, Laila binti Abi Hatsmah bin Huzafah bin Ghanim bin Abdullah bin Auf bin Ubaid bin Uaij bin Adi bin Ka'ab. Laila binti Abi Hatsmah tercatat sebagai wanita pertama yang memasuki kota Madinah dengan mengendarai sekedup unta dalam gelombang hijrah ini.",
      "Selanjutnya, Abdullah bin Jahsy bin Riyab bin Ya'mar bin Shabirah bin Murrah bin Kabir bin Ghanm bin Dudan bin Asad bin Khuzaimah juga berangkat berhijrah. Beliau membawa serta seluruh anggota keluarganya beserta saudara laki-lakinya, Abu Ahmad bin Jahsy, untuk pergi meninggalkan Mekah menuju Madinah.",
      "Kisah mengenai para pelopor hijrah kaum Muhajirin ini tercantum di dalam kitab Al-Bidayah."
     ]
    }
   ]
  },
  {
 "id": 87,
 "title": "Rumah-Rumah yang Kosong di Mekah Akibat Gelombang Hijrah",
 "paragraphs": [
  "Ibnu Ishaq melanjutkan kisahnya bahwasanya gelombang hijrah kaum Muhajirin ke Madinah semakin hari semakin besar dan meluas. Kepindahan ini terjadi secara masif hingga menyebabkan beberapa perkampungan di sudut kota Mekah menjadi sepi sunyi. Banyak rumah dari kabilah-kabilah Arab yang ditinggalkan sama sekali oleh para penghuninya yang memilih setia memeluk Islam.",
  "Di antara perkampungan yang paling tampak lengang adalah wilayah tempat tinggal bani Ghanam bin Dudan. Seluruh kaum pria dan wanita dari bani Ghanam tanpa terkecuali telah mengemas barang-barang mereka dan berangkat menuju Madinah, baik mereka yang berstatus merdeka maupun para budak. Rumah-rumah mereka dikunci rapat dan ditinggalkan begitu saja dalam keadaan kosong tanpa ada seorang pun yang menjaganya.",
  "Suatu hari, Utbah bin Rabi'ah, Syaibah bin Rabi'ah, dan Abu Jahal bin Hisyam berjalan melewati perkampungan bani Ghanam tersebut. Mereka memperhatikan deretan rumah yang pintunya tertutup rapat dan jendelanya berderit ditiup angin, memantulkan suasana yang sangat senyap.",
  "Utbah bin Rabi'ah memandangi rumah-rumah kosong itu dengan tatapan sayu lalu menghela napas panjang seraya berkata: \"Setiap rumah, betapa pun lamanya ia dihuni dengan penuh keselamatan, niscaya suatu hari kelak akan ditinggalkan dalam kesunyian dan kepedihan.\"",
  "Utbah kemudian menoleh kepada rekan-rekannya dan berkata, \"Rumah-rumah bani Ghanam telah kosong dan ditinggalkan sama sekali oleh penghuninya.\" Namun, Abu Jahal justru menanggapi hal itu dengan penuh kebencian dan rasa angkuh. la menunjuk ke arah rumah Abdullah bin Jahsy yang kosong lalu berseru, \"Ini semua adalah ulah dari putra saudara perempuan kita (Muhammad)! Dialah yang telah mencerai-beraikan jemaah kita, memecah belah urusan kita, dan memisahkan kita dari karib kerabat kita!\"",
  "Abu Jahal kemudian dengan semena-mena menduduki rumah kosong milik Abdullah bin Jahsy yang indah tersebut dan menjadikannya sebagai hak miliknya secara sepihak. Kisah mengenai rumah-rumah kosong bani Ghanam dan ketamakan Abu Jahal ini tercantum di dalam kitab Al-Bidayah."
 ]
},
{
 "id": 88,
 "title": "Keberangkatan Hijrah Umar bin Khattab dan Para Sahabat Secara Berkelompok",
 "paragraphs": [
  "Ibnu Ishaq melanjutkan kisahnya bahwasanya setelah gelombang pertama tersebut, para sahabat Rasulullah lainnya mulai berangkat berhijrah secara berturut-turut menuju Madinah. Mereka saling menyusul dan berkumpul di Madinah, hingga akhirnya sebagian besar dari mereka bertemu dan tinggal bersama di wilayah Al-Awalim, di perkampungan bani Amr bin Auf yang terletak di Quba.",
  "Di antara mereka yang berangkat berhijrah adalah Umar bin Khattab radiyallahu 'anhu. Beliau tidak berangkat seorang diri, melainkan memimpin sebuah rombongan besar yang terdiri dari keluarga dan karib kerabatnya. Umar bin Khattab bertolak menuju Madinah bersama dengan saudaranya, Zaid bin Khattab radiyallahu 'anhu, serta beberapa tokoh penting lainnya.",
  "Ikut serta dalam rombongan tersebut Sa'id bin Zaid bin Amr bin Nufail, Amr bin Suraqah bersama saudaranya Abdullah bin Suraqah, serta Khunais bin Hudzafah As-Sahmi (suami dari Hafshah binti Umar). Selain itu, jemaah dari bani Al-Buka yang merupakan sekutu mereka juga ikut bergabung, di antaranya adalah Ayas bin Al-Buka, Khalid bin Al-Buka, Amr bin Al-Buka, dan Amir bin Al-Buka.",
  "Rombongan besar yang dipimpin oleh Umar bin Khattab ini berjalan menyusuri padang pasir hingga akhirnya tiba dengan selamat di Quba, Madinah. Setibanya di sana, mereka semua singgah dan menetap di rumah Rifa'ah bin Abdil Mundzir bin Zanbar. Kisah mengenai keberangkatan hijrah berkelompok Umar bin Khattab beserta para sahabat ini tercantum di dalam kitab Al-Bidayah."
 ]
},
{
 "id": 89,
 "title": "Kisah Ayas bin Abi Rabi'ah dan Pembujukan Abu Jahal di Quba",
 "paragraphs": [
  "Ibnu Ishaq melanjutkan kisahnya bahwasanya setelah Umar bin Khattab radiyallahu 'anhu beserta rombongannya menetap di Quba, datanglah Ayas bin Abi Rabi'ah bin Al-Mughirah menyusul mereka. Ayas bin Abi Rabi'ah merupakan saudara seibu dari Abu Jahal bin Hisyam dan Al-Harits bin Hisyam.",
  "Tidak lama setelah kepindahan Ayas, Abu Jahal bin Hisyam dan Al-Harits bin Hisyam berangkat dari Mekah menuju Madinah demi mengejarnya. Kedua bersaudara ini tiba di Quba saat Ayas bin Abi Rabi'ah sedang bersama Umar bin Khattab di tempat persinggahan mereka.",
  "Abu Jahal dan Al-Harits segera menemui Ayas dan melancarkan bujuk rayu serta tipu daya. Mereka berdua berkata kepada Ayas: \"Sesungguhnya ibumu telah bernazar bahwa rambutnya tidak akan tersentuh oleh sisir, dan dirinya tidak akan berteduh dari terik matahari, sampai dia melihat wajahmu kembali!\"",
  "Mendengar kabar tentang kondisi ibunya, hati Ayas bin Abi Rabi'ah menjadi luluh dan merasa iba. Namun, Umar bin Khattab yang menyadari kelicikan Abu Jahal segera memperingatkan Ayas dengan tegas, \"Wahai Ayas! Demi Allah, kaummu itu tidak lain hanyalah ingin memalingkanmu dari agamamu, maka waspadalah terhadap mereka! Demi Allah, seandainya ibumu merasa gatal akibat kutu, niscaya dia pasti akan menyisir rambutnya. Dan seandainya terik matahari Mekah telah membakarnya, niscaya dia pasti akan mencari tempat berteduh!\"",
  "Ayas bin Abi Rabi'ah menolak peringatan Umar dan berkata, \"Aku akan keluar bersama mereka berdua hanya untuk menunaikan nazar ibuku. Lagipula, aku memiliki sejumlah harta di Mekah yang bisa kuambil.\" Umar bin Khattab kembali menimpali, \"Demi Allah, engkau tahu bahwa aku adalah salah satu orang Quraisy yang paling banyak hartanya. Ambillah setengah dari hartaku, dan menetaplah engkau di sini bersama kami, jangan ikut bersama mereka.\"",
  "Akan tetapi, Ayas bin Abi Rabi'ah tetap bersikeras untuk pulang bersama kedua saudaranya. Melihat ketetapan hati Ayas yang tidak bisa diubah lagi, Umar bin Khattab akhirnya pasrah lalu memberikan untanya yang tangguh kepada Ayas seraya berkata, \"Jika engkau memang harus pergi, maka naiklah di atas untaku ini. Sesungguhnya ia adalah unta yang sangat terlatih dan cepat. Tetaplah berada di atas punggungnya, dan jika engkau melihat gelagat mencurigakan atau makar dari kedua orang itu, maka paculah unta ini untuk meloloskan diri!\"",
  "Maka Ayas bin Abi Rabi'ah berangkat bertolak kembali menuju Mekah dengan menunggangi unta milik Umar, dikawal oleh Abu Jahal dan Al-Harits bin Hisyam. Kisah pembujukan bermodus nazar ibu di Quba ini tercantum di dalam kitab Al-Bidayah."
 ]
},
{
 "id": 90,
 "title": "Penangkapan Ayas bin Abi Rabi'ah di Tengah Jalan Menuju Mekah",
 "paragraphs": [
  "Ibnu Ishaq melanjutkan kisahnya bahwasanya rombongan tersebut berjalan bersama-sama hingga mereka menempuh sebagian perjalanan kembali ke kota Mekah. Ketika mereka sampai di suatu tempat di tengah jalan, Abu Jahal bin Hisyam mulai melancarkan siasatnya. la menoleh kepada Ayas bin Abi Rabi'ah lalu berkata dengan nada mengeluh, \"Wahai saudaraku, demi Allah, sesungguhnya untaku ini terasa sangat sulit dikendarai dan membuatku lelah. Apakah engkau berkenan memboncengku di atas untamu yang tangguh itu?\"",
  "Ayas bin Abi Rabi'ah menjawab dengan polos tanpa curiga, \"Benar, tentu saja bisa.\" Maka Ayas segera menghentikan untanya dan menderumkannya ke tanah agar Abu Jahal dapat naik berboncengan bersamanya. Abu Jahal dan Al-Harits bin Hisyam pun ikut turun dari tunggangan mereka.",
  "Namun, begitu mereka bertiga telah berdiri di atas tanah, Abu Jahal dan Al-Harits secara mendadak menyergap Ayas bin Abi Rabi'ah secara bersama-sama. Mereka berdua langsung memegangi tubuh Ayas, menjatuhkannya, lalu mengikat kedua tangan dan kakinya dengan tali secara rapat-rapat. Siasat kelicikan Abu Jahal berhasil membuat Ayas tidak sempat meloloskan diri dengan unta milik Umar bin Khattab.",
  "Abu Jahal dan Al-Harits kemudian menaikkan Ayas yang telah terikat kuat itu ke atas punggung unta, lalu membawa masuk ke kota Mekah dalam kondisi tertawan di siang bolong. Sesampainya di hadapan penduduk Mekah, Abu Jahal berseru dengan penuh keangkuhan, \"Wahai segenap penduduk Mekah! Demikianlah hendaknya yang kalian lakukan kepada orang-orang bodoh di antara kalian, sebagaimana kami telah memperbuat perkara ini kepada orang bodoh kami ini!\" Kisah penangkapan dan pengkhianatan di tengah jalan terhadap Ayas bin Abi Rabi'ah ini tercantum di dalam kitab Al-Bidayah."
 ]
},
{
 "id": 91,
 "title": "Penahanan Para Sahabat yang Terfitnah di Mekah",
 "paragraphs": [
  "Ibnu Ishaq melanjutkan kisahnya bahwasanya setelah peristiwa penangkapan tersebut, Ayas bin Abi Rabi'ah dikurung dan ditawan di kota Mekah bersama dengan beberapa sahabat lainnya yang juga bernasib serupa. Mereka berada dalam siksaan dan tekanan yang berat dari kaum Quraisy sehingga terhalang untuk melakukan hijrah ke Madinah.",
  "Umar bin Khattab radiyallahu 'anhu menuturkan bahwa pada awalnya, kaum muslimin yang telah berada di Madinah memandang buruk kondisi para sahabat yang tertawan tersebut. Umar bersaksi, \"Kami dahulu sering kali mengatakan bahwa Allah tidak akan pernah menerima tebusan, amalan, maupun taubat dari orang-orang yang terkena fitnah (kembali tunduk di bawah siksaan Quraisy) itu. Mereka adalah kaum yang telah mengenal Allah namun kemudian kembali pada kekufuran akibat bencana dan siksaan yang menimpa mereka.\"",
  "Pandangan serupa juga dirasakan oleh orang-orang yang terfitnah itu sendiri di Mekah. Mereka mengira bahwa pintu taubat telah tertutup rapat bagi diri mereka. Kondisi ini terus berlangsung hingga Rasulullah tiba di Madinah, lalu Allah menurunkan ayat-ayat-Nya mengenai urusan mereka:",
  "قُلْ يُعِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَى أَنْفُسِهِمْ لَا تَقْنَطُوا مِنْ رَّحْمَةِ اللَّهِ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ - وَآنِبُوا إِلَى رَبِّكُمْ وَأَسْلِمُوا لَهُ مِنْ قَبْلِ أَنْ يَأْتِيَكُمُ الْعَذَابُ ثُمَّ لَا تُنْصَرُوْنَ - وَاتَّبِعُوا أَحْسَنَ مَا أُنْزِلَ إِلَيْكُمْ mِّنْ رَّبِّكُمْ",
  "\"Katakanlah (Muhammad), 'Wahai hamba-hamba-Ku yang melampaui batas terhadap diri mereka sendiri! Janganlah kamu berputus asa dari rahmat Allah. Sesungguhnya Allah mengampuni dosa-dosa semuanya. Sungguh, Dialah Yang Maha Pengampun, Maha Penyayang.' Dan kembalilah kamu kepada Tuhanmu, dan berserah dirilah kepada-Nya sebelum datang azab kepadamu, kemudian kamu tidak dapat ditolong. Dan ikutilah sebaik-baik apa yang telah diturunkan kepadamu dari Tuhanmu...\"",
  "Umar bin Khattab melanjutkan, \"Maka aku segera menuliskan ayat-ayat ini pada selembar lembaran kertas, lalu aku mengirimkannya kepada Hisyam bin al-Ash bin Wa'il di Mekah.\" Hisyam bin al-Ash termasuk salah satu sahabat yang ditawan dan disiksa bersama Ayas bin Abi Rabi'ah. Kisah mengenai turunnya ayat harapan bagi para sahabat yang tertawan di Mekah ini tercantum di dalam kitab Al-Bidayah."
 ]
},
{
 "id": 92,
 "title": "Penerimaan Surat Umar bin Khattab oleh Hisyam bin al-Ash dan Pelarian ke Madinah",
 "paragraphs": [
  "Ibnu Ishaq melanjutkan kisahnya berdasarkan penuturan Hisyam bin al-Ash radiyallāhu 'anhu ketika menerima lembaran surat yang dikirimkan oleh Umar bin Khattab radiyallāhu 'anhu. Hisyam bin al-Ash menceritakan, \"Ketika surat itu sampai ke tanganku, aku segera membacanya di lembah Dzi Thuwa. Aku membolak-balik lembaran tersebut dan membacanya berulang-ulang, namun aku tetap tidak dapat memahami maksudnya dengan baik, hingga aku berdoa, 'Ya Allah, fahamkanlah ayat ini kepadaku.'\"",
  "Allah kemudian memberikan ilham dan pemahaman ke dalam hati Hisyam bin al-Ash bahwasanya ayat tersebut diturunkan khusus sebagai kabar gembira bagi orang-orang yang senasib dengannya. Ayat itu menegaskan bahwa pintu taubat dan rahmat Allah tetap terbuka lebar bagi mereka, serta melarang mereka dari berputus asa.",
  "Begitu menyadari hakikat tersebut, Hisyam bin al-Ash tidak ingin membuang waktu lagi. la segera berjalan menuju untanya, menaikinya, lalu memacu tunggangannya itu untuk keluar meloloskan diri dari kota Mekah. Hisyam berkendara dengan cepat melintasi padang pasir menuju Madinah hingga akhirnya ia berhasil menyusul Rasulullah dan berkumpul kembali bersama kaum muslimin.",
  "Sementara itu, Ibnu Ishaq menyebutkan bahwasanya para sahabat Rasulullah dari kalangan kaum Muhajirin terus berdatangan ke Madinah secara bergelombang. Mereka berhijrah dengan membawa seluruh jiwa dan harta yang mereka miliki, hingga tidak ada lagi yang tertinggal di kota Mekah bersama Rasulullah melainkan hanya Abu Bakar radiyallahu 'anhu dan Ali bin Abi Thalib radiyallahu 'anhu. Kedua sahabat ini tetap bertahan di Mekah mendampingi Rasulullah atas perintah dan izin dari beliau sendiri. Selain mereka berdua, orang-orang yang masih berada di Mekah hanyalah para sahabat yang disekap, ditawan, atau dalam kondisi sakit dan lemah sehingga tidak memiliki kemampuan untuk keluar melakukan perjalanan. Kisah mengenai pelarian Hisyam bin al-Ash serta kondisi akhir kaum muslimin di Mekah ini tercantum di dalam kitab Al-Bidayah."
 ]
},
{
 "id": 93,
 "title": "Rencana Pembunuhan Rasulullah di Darun Nadwah",
 "paragraphs": [
  "Ibnu Ishaq melanjutkan kisahnya bahwasanya ketika kaum Quraisy melihat para sahabat Rasulullah telah memiliki tempat perlindungan dan kekuatan di Madinah, mereka menyadari bahwa situasi telah berubah. Mereka sangat mengkhawatirkan keluarnya Rasulullah untuk menyusul para sahabatnya, karena mereka tahu bahwa beliau telah memiliki pengikut yang siap membela dan berperang demi dirinya.",
  "Oleh karena itu, para pemuka kaum Quraisy segera mengadakan pertemuan darurat di Darun Nadwah-rumah peninggalan Qushai bin Kilab yang biasa mereka gunakan untuk memutuskan perkara-perkara besar. Pertemuan ini dihadiri oleh tokoh-tokoh utama dari setiap kabilah Quraisy, di antaranya adalah Abu Jahal bin Hisyam, Utbah bin Rabi'ah, Syaibah bin Rabi'ah, Abu Sufyan bin Harb, Nubaih bin al-Hajjaj, Munabbih bin al-Hajjaj, serta Umayyah bin Khalaf.",
  "Ketika mereka hendak memasuki Darun Nadwah, muncul seorang lelaki tua yang berpenampilan megah. Lelaki tua itu berdiri di dekat pintu, lalu para pemuka Quraisy bertanya kepadanya, \"Siapakah engkau, wahai orang tua?\" Lelaki tua itu menjawab, \"Aku adalah seorang syekh (orang tua) dari penduduk Najd. Aku mendengar perihal rencana pertemuan kalian, maka aku datang kemari untuk mendengarkan apa yang kalian bicarakan, dan barangkali aku bisa memberikan pendapat serta nasihat kepada kalian.\" Mereka pun berkata, \"Benar, kalau begitu masuklah.\" Orang tua itu pun ikut masuk bersama mereka, yang mana sesungguhnya ia tidak lain adalah iblis yang menjelma menjadi manusia.",
  "Setelah berkumpul, mereka mulai mendiskusikan tindakan yang harus diambil terhadap Rasulullah. Salah seorang dari mereka mengusulkan, \"Tempatkanlah pria ini di dalam belenggu besi, lalu kuncilah pintunya rapat-rapat, dan biarkan dia merasakan kematian sebagaimana penyair-penyair sebelum dirinya mati!\"",
  "Mendengar usulan tersebut, si syekh dari Najd langsung menyela, \"Tidak, demi Allah! Pendapat ini sama sekali tidak bagus untuk kalian. Demi Allah, jika kalian mengurungnya, niscaya berita tentang kurungan itu pasti akan bocor keluar dan sampai kepada para sahabatnya. Mereka pasti akan datang menyerbu kalian, merebutnya dari tangan kalian, lalu jumlah mereka akan semakin bertambah banyak hingga mereka dapat mengalahkan kalian dengan perkara itu. Carilah pendapat yang lain!\"",
  "Tokoh yang lain kemudian memberikan usulan kedua, \"Kalau begitu, kita usir saja dia dari negeri kita, lalu kita buang dia jauh-jauh! Setelah dia keluar dari wilayah kita, kita tidak perlu peduli lagi ke mana pun dia pergi dan apa pun yang dia perbuat, karena urusan kita dengannya telah selesai.\"",
  "Si syekh dari Najd kembali membantah dengan tegas, \"Tidak, demi Allah! Pendapat ini pun tidak bagus untuk kalian. Apakah kalian tidak melihat betapa indahnya perkataannya, manis bicaranya, serta kemampuannya dalam memikat hati manusia dengan apa yang dia bawa? Demi Allah, jika kalian melakukan perkara itu, dia pasti akan mendatangi kabilah-kabilah Arab lainnya, lalu memikat mereka dengan bicaranya hingga mereka mengikutinya. Setelah itu, dia akan memimpin mereka untuk mendatangi dan menginjak-injak wilayah kalian, lalu merebut kekuasaan dari tangan kalian. Carilah pendapat selain ini!\"",
  "Akhirnya, Abu Jahal bin Hisyam angkat bicara dan melontarkan siasatnya yang paling keji, \"Demi Allah, sesungguhnya aku memiliki sebuah pendapat yang kalian belum memikirkannya.\" Mereka bertanya, \"Apakah pendapatmu itu, wahai Abu al-Hakam?\" Abu Jahal menjelaskan: \"Aku berpendapat agar kita mengambil dari setiap kabilah seorang pemuda yang kuat, bernasab mulia, dan memiliki ketangkasan. Kemudian kita berikan kepada setiap pemuda itu sebuah pedang yang tajam. Mereka semua harus mendatangi Muhammad secara serentak, lalu menebasnya dengan pedang-pedang mereka sekaligus seperti tebasan satu orang, hingga kita dapat membunuhnya dan beristirahat dari urusannya!\"",
  "Abu Jahal melanjutkan siasatnya, \"Jika mereka membunuhnya dengan cara demikian, maka darahnya akan tersebar di antara seluruh kabilah. Dengan begitu, bani Abdi Manaf (keluarga Muhammad) tidak akan mampu untuk memerangi seluruh kabilah Quraisy sekaligus. Mereka pasti akan terpaksa menerima tebusan darah (diat), lalu kita tinggal membayar tebusan itu kepada mereka.\"",
  "Mendengar siasat keji tersebut, si syekh dari Najd langsung berseru dengan penuh kepuasan, \"Demi Allah, inilah pendapat yang benar! Pendapat pria ini adalah yang paling tepat, dan tidak ada pendapat lain yang layak diterima selain perkara ini!\" Maka seluruh pemuka Quraisy menyepakati rencana pembunuhan massal tersebut dan mereka segera bubar untuk mempersiapkan para pemuda eksekutornya. Kisah konspirasi maut di Darun Nadwah ini tercantum di dalam kitab Al-Bidayah."
 ]
},
{
 "id": 94,
 "title": "Turunnya Malaikat Jibril dan Izin Hijrah Bagi Rasulullah",
 "paragraphs": [
  "Ibnu Ishaq melanjutkan kisahnya bahwasanya setelah kaum Quraisy menyepakati rencana keji mereka di Darun Nadwah, Malaikat Jibril 'alaihis salām segera datang menemui Rasulullah. Jibril 'alaihis salām menyampaikan wahyu dari Allah dan berkata kepada beliau: \"Janganlah engkau bermalam pada malam ini di atas tempat tidurmu yang biasa engkau gunakan untuk bermalam.\"",
  "Ketika waktu malam telah tiba dan kegelapan mulai menyelimuti kota Mekah, para pemuda yang telah dipilih dari setiap kabilah Quraisy mulai bergerak melaksanakan siasat mereka. Mereka mendatangi rumah Rasulullah secara sembunyi-sembunyi lalu mengepungnya dengan sangat ketat. Para pemuda tersebut terus mengintip dan mengawasi setiap sudut rumah, menantikan saat beliau tertidur lelap agar mereka dapat menerobos masuk dan menebaskan pedang mereka secara serentak.",
  "Melihat kepungan para eksekutor Quraisy yang berada di luar rumahnya, Rasulullah segera menoleh kepada Ali bin Abi Thalib radiyallahu 'anhu. Beliau bersabda kepada Ali bin Abi Thalib: \"Tidurlah engkau di atas tempat tidurku, dan berselimutlah dengan kain selimut milikku yang berwarna hijau buatan Hadramaut ini. Tidurlah di sana, karena sesungguhnya tidak akan ada satu pun perkara yang engkau benci yang dapat menimpa dirimu dari mereka.\"",
  "Rasulullah biasa menggunakan kain selimut hijau buatan Hadramaut tersebut untuk tidur sebagai alas dan penutup tubuh beliau. Maka Ali bin Abi Thalib radiyallahu 'anhu segera mematuhi perintah itu dan berbaring di atas tempat tidur Rasulullah demi mengelabui para pengepung. Kisah turunnya Jibril 'alaihis salām membawa izin hijrah serta kesiapan Ali bin Abi Thalib radiyallahu 'anhu bertaruh nyawa ini tercantum di dalam kitab Al-Bidayah."
 ]
},
{
 "id": 95,
 "title": "Rasulullah Melewati Kepungan Pemuda Quraisy",
 "paragraphs": [
  "Ibnu Ishaq melanjutkan kisahnya bahwasanya setelah Ali bin Abi Thalib radiyallahu 'anhu berbaring di tempat tidurnya, Rasulullah bersiap untuk keluar meninggalkan rumahnya. Pada saat itu, Abu Jahal bin Hisyam yang berada di luar bersama para pemuda pengepung sedang mengolok-olok beliau. Abu Jahal berseru kepada rekan-rekannya, \"Sesungguhnya Muhammad mengklaim bahwa jika kalian mengikuti agamanya, kalian akan menjadi raja-raja bagi bangsa Arab dan ajam (non-Arab)! Kemudian setelah mati, kalian akan dibangkitkan dan dijadikan bagi kalian kebun-kebun seperti kebun-kebun di Yordania. Dia juga mengklaim bahwa jika kalian tidak melakukannya, kalian akan disembelih olehnya, lalu setelah mati kalian akan dibangkitkan dan dijadikan bagi kalian api yang membakar kalian!\"",
  "Mendengar cercaan tersebut, Rasulullah segera keluar menemui mereka sembari membawa segenggam tanah di tangannya. Beliau bersabda kepada Abu Jahal, \"Benar, aku memang mengatakan perkara itu, dan engkau adalah salah satu di antara mereka.\"",
  "Allah kemudian menutup pandangan dan indra para pemuda eksekutor Quraisy tersebut. Rasulullah mulai menaburkan tanah yang ada di tangannya ke atas kepala setiap pria yang mengepung rumahnya, satu per satu. Sembari melangkah melewati mereka yang berdiri kaku dalam kondisi buta, beliau membacakan ayat-ayat awal dari surah Yasin:",
  "يس - وَالْقُرْآنِ الْحَكِيمِ - إِنَّكَ لَمِنَ الْمُرْسَلِينَ - عَلَى صِرَاطٍ مُسْتَقِيمٍ - تنزيل العزيز الرَّحِيمِ - لِتُنْذِرَ قَوْمًا مَا أُنْذِرَ آبَاؤُهُمْ فَهُمْ غَافِلُونَ - لَقَدْ حَقَّ الْقَوْلُ عَلَى أَكْثَرِهِمْ فَهُمْ لَا يُؤْمِنُونَ - إِنَّا جَعَلْنَا فِي أَعْنَاقِهِمْ أَغْلَالًا فَهِيَ إِلَى الْأَذْقَانِ فَهُمْ مُقْمَحُونَ - وَجَعَلْنَا مِنْ بَيْنِ أَيْدِيهِمْ سَدًّا وَمِنْ خَلْفِهِمْ سَدًّا فَأَغْشَيْنَاهُمْ فَهُمْ لَا يُبْصِرُونَ",
  "\"Yasin. Demi Al-Qur'an yang penuh hikmah. Sungguh, engkau (Muhammad) adalah salah seorang dari rasul-rasul, (yang berada) di atas jalan yang lurus, (sebagai wahyu) yang diturunkan oleh (Allah) Yang Mahaperkasa, Maha Penyayang, agar engkau memberi peringatan kepada suatu kaum yang nenek moyangnya belum pernah diberi peringatan, karena itu mereka lalai. Sungguh, ketetapan (terhadap mereka) telah pasti berlaku bagi kebanyakan mereka, karena mereka tidak beriman. Sungguh, Kami telah memasang belenggu di leher mereka, lalu (tangan mereka diangkat) ke dagu, karena itu mereka tertengadah. Dan Kami jadikan di hadapan mereka sekat dan di belakang mereka sekat (pula), dan Kami tutup (mata) mereka sehingga mereka tidak dapat melihat.\"",
  "Rasulullah terus berjalan melintasi kepungan tersebut hingga berhasil meloloskan diri sepenuhnya dari rumah beliau. Tidak ada satu pun dari para pemuda Quraisy itu yang menyadari atau melihat keberangkatan beliau. Setelah membersihkan sisa tanah di tangannya, beliau segera bergegas menuju tempat yang aman untuk memulai perjalanan hijrahnya. Kisah mukjizat Rasulullah membutakan pandangan para pengepung rumahnya ini tercantum di dalam kitab Al-Bidayah."
 ]
},
{
 "id": 96,
 "title": "Penemuan Para Pengepung Quraisy terhadap Ali bin Abi Thalib radiyallahu 'anhu",
 "paragraphs": [
  "Ibnu Ishaq melanjutkan kisahnya bahwasanya setelah Rasulullah keluar meloloskan diri, datanglah seorang pria yang bukan termasuk dari kalangan pemuda pengepung rumah beliau. Pria tersebut terkejut melihat para pemuda Quraisy masih berdiri tegak mengelilingi rumah, lalu ia bertanya kepada mereka, \"Apa yang sedang kalian tunggu di sini?\" Mereka menjawab, \"Kami sedang menunggu Muhammad keluar.\"",
  "Pria itu langsung menimpali dengan heran, \"Semoga Allah merugikan kalian! Demi Allah, Muhammad benar-benar telah keluar melewati kalian, dan dia telah menaburkan tanah di atas kepala kalian semua, lalu pergi meninggalkan kalian! Apakah kalian tidak menyadari apa yang telah menimpa kalian?\"",
  "Mendengar perkataan pria tersebut, para pemuda pengepung panik dan segera meraba kepala mereka masing-masing. Mereka semua terkejut karena mendapati ada sisa tanah yang menempel di atas kepala mereka. Namun, mereka tetap berusaha saling menenangkan dan berkata, \"Demi Allah, kita intip saja ke dalam, sesungguhnya dia masih berada di tempat tidurnya!\"",
  "Mereka pun beramai-ramai mengintip melalui celah pintu rumah Rasulullah. Ketika pandangan mereka tertuju ke arah tempat tidur, mereka melihat sesosok tubuh yang sedang berbaring dalam kondisi tertutup rapat oleh kain selimut hijau buatan Hadramaut. Mereka pun berseru dengan yakin, \"Demi Allah, itu dia Muhammad sedang tidur berselimut!\"",
  "Para pemuda Quraisy tersebut terus berjaga di posisi mereka tanpa berani mendobrak masuk, hingga fajar subuh akhirnya menyingsing. Begitu tirai kegelapan malam tersingkap sepenuhnya, sosok yang berada di atas tempat tidur itu mulai bergerak dan bangkit dari pembaringannya. Ketika sosok tersebut membuka kain selimut hijaunya, barulah mereka menyadari bahwa pria yang melangkah keluar dari dalam rumah itu bukanlah Rasulullah, melainkan Ali bin Abi Thalib radiyallahu 'anhu.",
  "Melihat wajah Ali bin Abi Thalib radiyallahu 'anhu, para pemuda pengepung langsung tercengang dan sadar bahwa siasat mereka telah gagal total. Mereka berseru dengan penuh penyesalan, \"Demi Allah, apa yang dikatakan oleh pria semalam itu kepada kita ternyata benar-benar sebuah kenyataan!\" Kisah terbongkarnya penyamaran di pagi hari ini tercantum di dalam kitab Al-Bidayah."
 ]
},
{
 "id": 97,
 "title": "Keberangkatan Rasulullah ke Rumah Abu Bakar radiyallahu 'anhu",
 "paragraphs": [
  "Ibnu Ishaq melanjutkan kisahnya bahwasanya setelah Rasulullah berhasil meloloskan diri dari kepungan para pemuda Quraisy, beliau segera melangkah menuju rumah Abu Bakar radiyallahu 'anhu. Kedatangan beliau di kediaman sahabat karibnya itu bermaksud untuk memulai perjalanan panjang meninggalkan kota Mekah.",
  "Aisyah binti Abi Bakar radiyallahu 'anhā meriwayatkan jalannya peristiwa penting pada hari itu. Beliau menceritakan bahwasanya Rasulullah biasanya mendatangi rumah Abu Bakar radiyallāhu 'anhu pada salah satu dari dua waktu, baik di pagi hari atau di sore hari. Namun, pada hari keberangkatan hijrah tersebut, beliau mendatangi rumah mereka tepat di waktu siang hari yang sangat terik, sebuah waktu yang tidak biasa beliau gunakan untuk berkunjung.",
  "Ketika Abu Bakar radiyallahu 'anhu melihat kedatangan beliau dari kejauhan, ia langsung merasa terkejut dan berkata, \"Demi Allah, tidaklah Rasulullah datang menemui kita pada waktu seperti ini melainkan pasti ada suatu urusan besar yang telah terjadi!\"",
  "Rasulullah kemudian masuk ke dalam rumah Abu Bakar radiyallahu 'anhu. Setelah mengambil tempat duduk, beliau menoleh kepada Abu Bakar radiyallahu 'anhu dan bersabda dengan nada yang serius: \"Keluarkanlah orang-orang yang ada di sekitarmu saat ini.\"",
  "Abu Bakar radiyallahu 'anhu segera menjawab untuk menenangkan beliau, \"Wahai Rasulullah, sesungguhnya mereka yang ada di sini tidak lain adalah kedua putriku (Aisyah dan Asma), yang juga merupakan keluargamu sendiri. Demi ayah dan ibuku yang menjadi tebusanmu, tidak ada orang asing di antara kami.\"",
  "Mendengar penuturan tersebut, Rasulullah akhirnya menyampaikan kabar yang telah dinanti-nantikan. Beliau bersabda kepada Abu Bakar radiyallahu 'anhu: \"Sesungguhnya Allah telah memberikan izin kepadaku untuk keluar meninggalkan Mekah dan melakukan hijrah.\"",
  "Begitu mendengar sabda beliau, Abu Bakar radiyallahu 'anhu langsung menyela dengan penuh harap dan rasa haru, \"Apakah aku boleh mendampingimu dalam perjalanan ini, wahai Rasulullah?\" Rasulullah memberikan jawaban yang melegakan hatinya: \"Benar, engkau akan mendampingiku.\"",
  "Aisyah radiyallahu 'anhā menceritakan bahwa demi Allah, sebelum hari itu, ia belum pernah melihat ada seorang pria yang menangis karena begitu gembiranya, sampai ia melihat ayahnya, Abu Bakar radiyallahu 'anhu, menangis tersedu-sedu karena sangat bahagia setelah mendapatkan izin untuk mendampingi hijrah Rasulullah. Kisah dimulainya rencana perjalanan rahasia dari rumah Abu Bakar radiyallahu 'anhu ini tercantum di dalam kitab Al-Bidayah."
 ]
},
{
 "id": 98,
 "title": "Persiapan Tunggangan dan Keberangkatan Menuju Gua Tsur",
 "paragraphs": [
  "Ibnu Ishaq melanjutkan kisahnya bahwasanya setelah Abu Bakar radiyallahu 'anhu mendapatkan kepastian untuk mendampingi Rasulullah, ia segera bersiap dengan penuh totalitas. Abu Bakar radiyallahu 'anhu berkata, \"Wahai Rasulullah, sesungguhnya aku telah mempersiapkan dua ekor unta ini sejak beberapa bulan yang lalu khusus untuk keperluan keluar kita ini.\" la kemudian menawarkan salah satu unta terbaiknya kepada beliau.",
  "Namun, Rasulullah menolak untuk menerimanya secara cuma-cuma. Beliau bersabda, \"Aku tidak akan menunggangi unta yang bukan milikku kecuali dengan membayar harganya.\" Abu Bakar radiyallahu 'anhu pun berkata, \"Demi ayah dan ibuku, maka unta ini menjadi milikmu dengan harga tersebut, wahai Rasulullah.\"",
  "Aisyah binti Abi Bakar radiyallahu 'anhā menceritakan bahwasanya mereka segera mengemas perbekalan dengan sangat cepat. Mereka memasukkan makanan ke dalam sebuah kantong kulit. Asma binti Abi Bakar radiyallahu 'anhā kemudian memotong ikat pinggangnya menjadi dua bagian; satu bagian digunakan untuk mengikat mulut kantong perbekalan tersebut, dan satu bagian lagi tetap ia gunakan sebagai ikat pinggangnya. Karena peristiwa itulah, Asma kemudian dikenal dengan julukan Dzatun Nithaqain (Wanita yang Memiliki Dua Ikat Pinggang).",
  "After seluruh persiapan selesai, Rasulullah dan Abu Bakar radiyallahu 'anhu segera keluar meninggalkan rumah melalui pintu belakang secara sembunyi-sembunyi. Mereka berdua berjalan dengan cepat meninggalkan kota Mekah menuju arah selatan, hingga akhirnya tiba di Gua Tsur, sebuah gua yang terletak di puncak Gunung Tsur.",
  "Mereka berdua memasuki gua tersebut dan menetap di dalamnya selama tiga malam. Selama masa persembunyian itu, Abdullah bin Abi Bakar-seorang pemuda yang cerdas dan tangkas-bertugas memantau pergerakan kaum Quraisy di Mekah pada siang hari, lalu mendatangi gua pada malam hari untuk menyampaikan seluruh informasi kepada mereka.",
  "Sementara itu, Amir bin Fuhairah, bekas budak Abu Bakar, menggembalakan kambing-kambing perahan di sekitar gua untuk menghapus jejak kaki Abdullah sekaligus menyediakan susu segar bagi Rasulullah dan Abu Bakar radiyallahu 'anhu. Kisah dimulainya persembunyian rahasia di Gua Tsur ini tercantum di dalam kitab Al-Bidayah."
 ]
},
{
 "id": 99,
 "title": "Pencarian Kaum Quraisy ke Gua Tsur dan Mukjizat Keselamatan",
 "paragraphs": [
  "Ibnu Ishaq melanjutkan kisahnya bahwasanya ketika kaum Quraisy menyadari bahwa Rasulullah dan Abu Bakar radiyallahu 'anhu telah meloloskan diri, mereka segera mengadakan sayembara besar-besaran. Mereka menjanjikan hadiah berupa seratus ekor unta bagi siapa saja yang berhasil menangkap atau membunuh salah satu dari keduanya. Para pelacak jejak dan pemuda Quraisy segera dikerahkan ke segala penjuru untuk menyisir setiap jalur keluar kota Mekah.",
  "Pencarian yang gencar tersebut akhirnya membawa sekelompok pemuka dan pelacak Quraisy mendaki Gunung Tsur, hingga mereka berdiri tepat di depan mulut Gua Tsur. Jarak di antara mereka dengan Rasulullah dan Abu Bakar radiyallahu 'anhu yang berada di dalam gua menjadi sangat dekat, hingga tidak ada lagi penghalang melainkan hanya beberapa langkah saja.",
  "Dalam kondisi yang sangat menegangkan itu, Abu Bakar radiyallahu 'anhu merasa sangat khawatir terhadap keselamatan Rasulullah. la berbisik lirih kepada beliau, \"Wahai Rasulullah, seandainya salah seorang dari mereka melihat ke arah bawah kakinya, niscaya dia pasti akan melihat kita yang berada di bawah sini.\"",
  "Mendengar kekhawatiran sahabatnya, Rasulullah dengan penuh ketenangan menoleh lalu memberikan jawaban yang menguatkan jiwanya: \"Wahai Abu Bakar, apa prasangkamu terhadap dua orang manusia yang mana Allah menjadi pihak ketiganya?\"",
  "Allah kemudian menurunkan perlindungan-Nya dan memalingkan pandangan orang-orang Quraisy tersebut, sehingga tidak ada seorang pun dari mereka yang tergerak untuk menengok ke dalam gua. Para pengepung itu akhirnya berbalik arah dan meninggalkan puncak Gunung Tsur dengan keyakinan bahwa tidak ada manusia di dalam sana. Kisah mukjizat keselamatan di mulut Gua Tsur serta keteguhan hati Rasulullah ini tercantum di dalam kitab Al-Bidayah."
 ]
},
{
 "id": 100,
 "title": "Pertemuan dengan Suraqah bin Malik di Tengah Jalan Hijrah",
 "paragraphs": [
  "Ibnu Ishaq melanjutkan kisahnya bahwasanya setelah tiga malam berlalu dan dirasa kondisi telah cukup aman, Rasulullah dan Abu Bakar radiyallahu 'anhu keluar dari Gua Tsur. Mereka berangkat bersama Abdullah bin Uraiqit-seorang penunjuk jalan yang pandai meskipun masih memeluk agama kaumnya serta Amir bin Fuhairah yang mendampingi mereka. Mereka mengambil rute pesisir pantai yang jarang dilalui manusia demi menghindari kejaran kaum Quraisy.",
  "Meskipun jalur yang diambil sangat terpencil, sayembara berhadiah seratus ekor unta tetap membuat banyak orang tergiur untuk mencari mereka. Di tengah perjalanan, keberadaan rombongan Rasulullah berhasil diendus oleh seorang penunggang kuda yang tangguh bernama Suraqah bin Malik bin Ju'tsum. Begitu melihat sosok rombongan tersebut dari kejauhan, Suraqah segera memacu kudanya dengan sangat cepat demi meraih hadiah besar itu.",
  "Ketika jarak Suraqah sudah semakin dekat hingga bacaan Al-Qur'an Rasulullah dapat terdengar olehnya, Abu Bakar radiyallahu 'anhu yang terus waspada menengok ke belakang dan berseru dengan cemas, \"Wahai Rasulullah, pengejar itu telah berhasil mendekati kita!\" Namun, Rasulullah tetap tenang dan berdoa memohon perlindungan kepada Allah.",
  "Seketika itu juga, sebuah mukjizat terjadi. Kaki-kaki depan kuda yang ditunggangi oleh Suraqah bin Malik secara mendadak terperosok dan ambles ke dalam permukaan tanah yang keras, hingga membuat Suraqah terlempar jatuh dari punggung kudanya. Suraqah segera bangkit dan berusaha menegakkan kembali kudanya, namun begitu kuda itu menarik kakinya dari dalam tanah, membubunglah asap putih yang tebal seperti debu padang pasir.",
  "Menyadari bahwasanya dirinya sedang berhadapan dengan kekuatan Allah yang melindungi Rasulullah, runtuhlah keberanian Suraqah bin Malik. la langsung berseru memohon rasa aman dan berjanji tidak akan mencelakai mereka. Suraqah berkata, \"Sesungguhnya aku tahu bahwa apa yang menimpaku ini adalah karena doa kalian, maka berdoalah kepada Allah untuk keselamatan diriku, dan aku berjanji akan memalingkan setiap pengejar yang mencari kalian!\"",
  "Rasulullah kemudian berdoa hingga kuda Suraqah dapat kembali berdiri dengan bebas. Suraqah pun berbalik arah dan menepati janjinya; setiap kali ia bertemu dengan para pengejar Quraisy di tengah jalan, ia selalu berkata kepada mereka, \"Aku telah menyisir jalur ini, dan tidak ada seorang pun yang kalian cari di arah sini.\" Kisah pengejaran Suraqah bin Malik yang berujung pada mukjizat amblesnya kaki kuda ini tercantum di dalam kitab Al-Bidayah."
 ]
},
{
 "id": 101,
 "title": "Sambutan Hangat dan Khotbah Pertama Rasulullah di Madinah",
 "paragraphs": [
  "Ibnu Ishaq melanjutkan kisahnya bahwasanya setelah menempuh perjalanan panjang yang penuh dengan marabahaya, Rasulullah beserta rombongannya akhirnya tiba di kota Madinah dengan selamat. Kedatangan beliau telah dinanti-nantikan sejak lama oleh seluruh penduduk Yatsrib, baik dari kalangan kaum Ansar maupun kaum Muhajirin yang telah tiba mendahului beliau.",
  "Begitu kabar mengenai masuknya Rasulullah ke pinggiran kota Madinah terdengar, orang-orang segera keluar dari rumah-rumah mereka. Mereka berbondong-bondong memadati jalanan, menyambut kedatangan beliau dengan penuh rasa gembira, takbir yang bergemuruh, serta penghormatan yang luar biasa. Setiap kabilah dari kalangan Ansar saling berharap dan meminta agar Rasulullah berkenan mampir dan menetap di lingkungan tempat tinggal mereka.",
  "Setibanya di Madinah, Rasulullah kemudian menyampaikan khotbah pertamanya di dihadapan kaum muslimin. Di dalam khotbah tersebut, beliau memberikan amanat, bimbingan, serta landasan utama bagi masyarakat baru yang sedang dibangun di kota suci tersebut. Rasulullah bersabda: \"Wahai segenap manusia! Sebarkanlah salam, berikanlah makanan, sambunglah tali silaturahmi, dan shalatlah kalian di waktu malam ketika manusia sedang tertidur lelap, niscaya kalian akan masuk ke dalam surga dengan penuh keselamatan.\"",
  "Amanat yang disampaikan oleh Rasulullah di awal kedatangannya ini meletakkan dasar-dasar kedamaian, sosial, dan ketakwaan bagi seluruh penduduk Madinah. Setelah itu, beliau menentukan tempat berdirinya masjid dan rumah tinggal beliau melalui unta tunggangannya yang dibiarkan berjalan hingga menderum di tanah milik dua anak yatim dari bani Najjar. Kisah sambutan hangat serta khotbah pertama Rasulullah di kota Madinah ini tercantum di dalam kitab Al-Bidayah."
 ]
},
{
 "id": 102,
 "title": "Piagam Madinah dan Persaudaraan Kaum Muhajirin dan Ansar",
 "paragraphs": [
  "Ibnu Ishaq melanjutkan kisahnya bahwasanya setelah Rasulullah menetap di Madinah dan merampungkan pembangunan masjidnya, beliau segera mengambil langkah strategis berikutnya untuk memperkuat fondasi masyarakat Islam. Beliau menulis sebuah dokumen perjanjian resmi yang dikenal sebagai Piagam Madinah. Dokumen ini mengikat seluruh penduduk Madinah, baik dari kalangan kaum kaum muslimin Muhajirin dan Ansar, maupun kaum Yahudi dan kabilah-kabilah lain yang berada di sekitar kota tersebut.",
  "Di dalam piagam tersebut, Rasulullah menegaskan bahwa kaum muslimin dari kalangan Quraisy (Muhajirin) dan Yatsrib (Ansar), serta orang-orang yang mengikuti mereka dan berjuang bersama mereka, adalah satu umat yang utuh (ummatan wāhidatan) di hadapan seluruh manusia. Perjanjian ini juga menjamin kebebasan beragama, hak milik, serta kewajiban bersama untuk saling membela kota Madinah apabila ada musuh dari luar yang datang menyerang.",
  "Selain mengikat perjanjian umum, Rasulullah juga melakukan langkah penting lainnya, yaitu mempersaudarakan para sahabat dari kalangan Muhajirin dengan sahabat dari kalangan Ansar secara individu. Beliau mempersaudarakan mereka dua orang-dua orang di rumah Anas bin Malik radiyallahu 'anhu.",
  "Tujuan dari persaudaraan ini adalah untuk menghilangkan rasa asing yang dialami oleh kaum Muhajirin yang telah meninggalkan seluruh harta dan tanah kelahiran mereka di Mekah, sekaligus untuk mempererat ikatan ukhuwah Islamiyah di antara kedua kelompok. Di antara para sahabat yang dipersaudarakan oleh beliau adalah Abu Bakar radiyallāhu 'anhu dipersaudarakan dengan Kharijah bin Zaid, Umar bin Khattab radiyallahu 'anhu dipersaudarakan dengan Itban bin Malik, dan Ja'far bin Abi Thalib dipersaudarakan dengan Mu'adz bin Jabal radiyallahu 'anhu. Kisah mengenai penyusunan Piagam Madinah dan persaudaraan kaum Muhajirin serta Ansar ini tercantum di dalam kitab Al-Bidayah."
 ]
},
{
 "id": 103,
 "title": "Ketetapan Mengenai Pembagian Harta Warisan dan Nafkah Antara Kaum Muhajirin dan Ansar",
 "paragraphs": [
  "Ibnu Ishaq melanjutkan kisahnya bahwasanya setelah Rasulullah mempersaudarakan kaum Muhajirin dan kaum Ansar, ikatan persaudaraan tersebut terjalin dengan sangat kuat. Hubungan ini bahkan melampaui batas hubungan sosial biasa, di mana mereka saling berbagi harta benda dan saling menanggung beban kehidupan satu sama lain.",
  "Begitu kuatnya ikatan persaudaraan yang dibangun oleh Rasulullah tersebut, hingga kaum Muhajirin dapat mewarisi harta dari kaum Ansar yang menjadi saudaranya ketika meninggal dunia. Sistem pembagian harta warisan berdasarkan ikatan persaudaraan hijrah ini terus berlaku di antara mereka, dan hak karib kerabat dari nasab asli mereka sempat tergeser untuk sementara waktu demi menguatkan pondasi umat yang baru dibentuk di Madinah.",
  "Ketetapan saling mewarisi harta berdasarkan tali persaudaraan iman dan hijrah ini terus berjalan di kota Madinah selama beberapa waktu, hingga akhirnya Allah menurunkan ayat-ayat-Nya yang menetapkan kembali aturan waris yang baku berdasarkan hubungan nasab dan rahim: \"Dan orang-orang yang mempunyai hubungan kerabat, sebagiannya lebih berhak terhadap sesamanya (dalam hal waris) di dalam Kitab Allah...\"",
  "Dengan turunnya ayat tersebut, ketetapan mengenai hak saling mewarisi berdasarkan persaudaraan individu antara Muhajirin dan Ansar resmi dihapus, dan aturan pembagian warisan dikembalikan sepenuhnya kepada jalur nasab dan kekerabatan darah. Meskipun demikian, hubungan ukhuwah Islamiyah, tolong-menolong, dan kasih sayang di antara kaum Muhajirin dan Ansar tetap terjaga dengan penuh keikhlasan. Kisah mengenai ketetapan awal persaudaraan hingga turunnya ayat penghapusan waris persaudaraan ini tercantum di dalam kitab Al-Bidayah."
 ]
},
{
 "id": 104,
 "title": "Permulaan Syariat Adzan Bagi Kaum Muslimin di Madinah",
 "paragraphs": [
  "Ibnu Ishaq melanjutkan kisahnya bahwasanya setelah kaum muslimin menetap di Madinah dengan aman, mereka mendirikan shalat berjamaah secara rutin bersama Rasulullah Namun pada masa-saat awal itu, belum ada metode atau penanda khusus yang digunakan untuk mengumpulkan manusia ketika waktu shalat telah tiba. Kaum muslimin biasanya hanya berkumpul dan memperkirakan sendiri masuknya waktu shalat, lalu mereka langsung melaksanakannya begitu jemaah telah lengkap.",
  "Kondisi tersebut membuat Rasulullah berdiskusi bersama para sahabat untuk mencari sebuah cara agar manusia dapat berkumpul secara serentak. Muncul beberapa usulan di dalam musyawarah tersebut. Ada yang mengusulkan agar mereka menyalakan api di tempat yang tinggi ketika waktu shalat masuk, namun usulan ini kurang disukai. Ada pula yang mengusulkan agar menggunakan terompet sebagaimana yang dilakukan oleh kaum Yahudi, atau menggunakan lonceng sebagaimana yang diperbuat oleh kaum Nasrani. Rasulullah juga kurang berkenan dengan usulan-usulan yang menyerupai kebiasaan kaum lain tersebut.",
  "Di tengah kebuntuan itu, seorang sahabat dari kalangan Ansar bernama Abdullah bin Zaid bin Abdi Rabbihi mendatangi Rasulullah . la menceritakan mimpi yang dialaminya semalam. Abdullah bin Zaid berkata, \"Wahai Rasulullah, sesungguhnya aku bermimpi melihat seorang pria yang mengenakan pakaian hijau sedang membawa sebuah lonceng di tangannya. Aku bertanya kepadanya, 'Apakah engkau mau menjual lonceng itu?' Pria tersebut bertanya kembali, 'Untuk apa engkau menggunakannya?' Aku menjawab, 'Kami akan menggunakannya untuk menyeru manusia agar mendirikan shalat.' Pria itu lalu berkata, 'Maukah engkau kutunjukkan cara yang lebih baik dari perkara itu?' Aku menjawab, 'Tentu saja.' Maka dia mengajarkan kepadaku kalimat-kalimat adzan.\"",
  "Abdullah bin Zaid kemudian melafalkan kalimat adzan tersebut di hadapan Rasulullah Begitu mendengar lafalnya yang agung, Rasulullah bersabda: \"Sesungguhnya ini adalah mimpi yang benar, insya Allah.\"",
  "Rasulullah kemudian memerintahkan Abdullah bin Zaid agar menemui Bilal bin Rabah radiyallahu 'anhu. Beliau bersabda, \"Berdirilah engkau bersama Bilal, lalu ajarkanlah kalimat-kalimat itu kepadanya agar dia mengumandangkannya, karena sesungguhnya Bilal memiliki suara yang lebih lantang dan indah daripadamu.\"",
  "Maka Bilal bin Rabah segera mengumandangkan adzan pertama di kota Madinah. Ketika Umar bin Khattab radiyallahu 'anhu mendengarnya dari dalam rumahnya, ia segera keluar seraya menarik kain selendangnya dan berkata, \"Demi Tuhan yang telah mengutusmu dengan kebenaran, wahai Rasulullah, sesungguhnya aku pun telah melihat mimpi yang sama seperti apa yang dia lihat!\" Rasulullah kemudian memuji Allah atas ketetapan syariat yang agung ini. Kisah permulaan syariat adzan di Madinah ini tercantum di dalam kitab Al-Bidayah."
 ]
},
{
 "id": 105,
 "title": "Perubahan Kiblat dari Baitul Maqdis ke Ka'bah",
 "paragraphs": [
  "Ibnu Ishaq melanjutkan kisahnya bahwasanya setelah syariat adzan berjalan dengan tertib, kaum muslimin di Madinah masih melaksanakan ibadah shalat dengan menghadap ke arah Baitul Maqdis di Yerusalem. Rasulullah melaksanakan shalat menghadap ke Baitul Maqdis selama sekitar belasan bulan setelah kepindahan beliau ke kota Madinah. Selama kurun waktu tersebut, tersimpan harapan yang sangat kuat di dalam hati beliau agar Allah mengalihkan arah kiblat menuju Ka'bah di Mekah, yang merupakan rumah suci warisan Nabi Ibrahim 'alaihis salām.",
  "Beliau sering kali menengadahkan wajahnya ke langit, menanti turunnya wahyu yang membawa perubahan tersebut. Hingga akhirnya, ketika Rasulullah sedang melaksanakan shalat berjamaah bersama para sahabat, turunlah perintah dari Allah yang mengabulkan harapan beliau:",
  "قَدْ نَرَى تَقَلُّبَ وَجْهِكَ فِي السَّمَاءِ فَلَنُوَلِّيَنَّكَ قِبْلَةً تَرْضَاهَا فَوَلْ وَجْهَكَ شَطْرَ الْمَسْجِدِ الْحَرَامِ",
  "\"Sungguh, Kami melihat wajahmu (Muhammad) sering menengadah ke langit, maka benar-benar akan Kami palingkan engkau ke kiblat yang engkau sukai. Maka hadapkanlah wajahmu ke arah Masjidilharam...\"",
  "Begitu ayat ini turun di tengah jalannya shalat, Rasulullah langsung memutar posisi tubuh beliau diikuti oleh seluruh jemaah para sahabat, merubah arah kiblat dari yang semula menghadap ke utara (Baitul Maqdis) menjadi berbalik menghadap ke arah selatan (Ka'bah di Masjidilharam).",
  "Peristiwa perubahan arah kiblat ini menjadi momentum besar yang membedakan secara tegas identitas ibadah kaum muslimin sekaligus menjadi ujian keimanan bagi manusia pada masa itu. Orang-orang yang lemah imannya serta kaum munafik mulai bimbang, sementara kaum Yahudi Madinah melancarkan berbagai kritik dan protes. Namun, kaum muslimin yang kokoh imannya segera menyatakan kepatuhan mutlak tanpa keraguan sedikit pun. Kisah mengenai peristiwa penting perubahan arah kiblat dari Baitul Maqdis ke Ka'bah ini tercantum di dalam kitab Al-Bidayah."
 ]
}, 

  {
   "id": 2,
   "label": "Jilid 2",
   "theme": "Segera hadir",
   "available": true,
   "chapters": [
    {
 "id": 1,
 "title": "Musyawarah Sebelum Perang Badar",
 "paragraphs": [
  "Diriwayatkan oleh Ibnu Abi Hatim dan Ibnu Mardawaih—dan ini adalah lafal miliknya—dari Abi Imran, ia mendengar Abu Ayyub al-Anshari raḍiyallāhu 'anhu berkata bahwa ketika mereka berada di Madinah, Rasulullah ﷺ bersabda, \"Sesungguhnya aku dikabarkan tentang kafilah dagang Abu Sufyan yang sedang datang mendekat. Apakah kalian mau jika kita keluar menyongsong kafilah ini, semoga Allah menjadikannya sebagai ghanimah bagi kita?\" Kami pun menjawab, \"Ya.\"",
  "Maka Rasulullah ﷺ keluar dan kami pun ikut keluar. Setelah kami berjalan selama satu atau dua hari, beliau ﷺ bersabda kepada kami, \"Bagaimana pendapat kalian tentang menghadapi kaum tersebut (pasukan Quraisy)? Karena sesungguhnya mereka telah dikabarkan tentang keberangkatan kalian.\" Kami menjawab, \"Tidak, demi Allah, kami tidak memiliki kekuatan untuk memerangi kaum tersebut, melainkan kami hanya menginginkan kafilah dagang itu.\" Kemudian beliau ﷺ bertanya lagi, \"Bagaimana pendapat kalian tentang memerangi kaum tersebut?\" Kami pun memberikan jawaban yang sama.",
  "Lalu Miqdad bin 'Amr raḍiyallāhu 'anhu berdiri dan berkata, \"Jika demikian, kami tidak akan mengatakan kepadamu, wahai Rasulullah, sebagaimana yang dikatakan oleh kaum Nabi Musa 'alaihis salām kepada Nabi Musa: *'Pergilah kamu bersama Tuhanmu, dan berperanglah kamu berdua, sesungguhnya kami hanya duduk menanti di sini saja.'*\" Abu Ayyub al-Anshari raḍiyallāhu 'anhu melanjutkan, \"Kami, orang-orang Anshar, sangat berharap seandainya kamilah yang mengucapkan perkataan seperti yang dikatakan oleh Miqdad, hal itu sungguh lebih kami cintai daripada kami memiliki harta yang sangat banyak.\"",
  "Maka Allah 'Azza wa Jalla menurunkan ayat kepada Rasul-Nya: *“Sebagaimana Tuhanmu mengeluarkanmu dari rumahmu dengan kebenaran, padahal sesungguhnya sebagian dari orang-orang yang beriman itu tidak menyukainya.”* Kisah ini disebutkan di dalam kitab *al-Bidayah* dan disebutkan secara lengkap dalam *Majma' az-Zawaid*, kemudian dinyatakan bahwa hadits ini diriwayatkan oleh al-Bazzar secara lengkap, dan oleh ath-Thabarani sebagiannya, serta di dalam sanadnya terdapat Abdul Aziz bin Imran yang berstatus *matruk* (ditinggalkan haditsnya)."
 ]
},
{
 "id": 2,
 "title": "Sikap Kaum Anshar dan Keteguhan Mereka di Badar",
 "paragraphs": [
  "Diriwayatkan oleh Imam Ahmad, sebagaimana yang tercantum dalam kitab *al-Bidayah*, dari Anas raḍiyallāhu 'anhu, ia menceritakan bahwa ketika Nabi ﷺ meminta musyawarah mengenai keberangkatan beliau menuju Badar, Abu Bakar raḍiyallāhu 'anhu memberikan pendapatnya, kemudian beliau meminta musyawarah lagi dan Umar raḍiyallāhu 'anhu pun memberikan pendapatnya. Setelah itu, beliau kembali meminta musyawarah, maka sebagian kaum Anshar berkata, \"Hanya kepada kalian Rasulullah ﷺ menginginkan jawaban, wahai sekalian kaum Anshar.\"",
  "Lalu sebagian kaum Anshar berkata, \"Wahai Rasulullah, kalau begitu kami tidak akan mengatakan sebagaimana yang dikatakan oleh Bani Israil kepada Nabi Musa 'alaihis salām: *'Pergilah kamu bersama Tuhanmu, dan berperanglah kamu berdua, sesungguhnya kami hanya duduk menanti di sini saja.'* Akan tetapi—demi Zat yang mengutusmu dengan kebenaran—seandainya engkau memacu unta-unta ini hingga sampai ke Barkil Ghimad, niscaya kami akan benar-benar mengikutimu.\" Ibnu Katsir mengatakan bahwa ini adalah sanad berkualifikasi *tsulatsi* (memiliki tiga perawi hingga sahabat) yang sahih sesuai syarat kitab Sahih.",
  "Di dalam riwayat Imam Ahmad yang lain, juga dari hadits Anas raḍiyallāhu 'anhu, disebutkan bahwa Rasulullah ﷺ meminta musyawarah ketika sampai kabar kepadanya mengenai kedatangan Abu Sufyan. Abu Bakar raḍiyallāhu 'anhu angkat bicara, namun Rasulullah ﷺ berpaling darinya. Kemudian Umar raḍiyallāhu 'anhu angkat bicara, dan beliau ﷺ juga berpaling darinya.",
  "Melihat hal itu, Sa'ad bin Ubadah raḍiyallāhu 'anhu berkata, \"Kepada kamilah Rasulullah ﷺ menginginkan jawaban. Demi Zat yang jiwaku berada di tangan-Nya, seandainya engkau memerintahkan kami untuk mengarungi lautan ini niscaya kami akan benar-benar mengarunginya, dan seandainya engkau memerintahkan kami untuk memacu unta-unta ini hingga ke Barkil Ghimad niscaya kami akan benar-benar melakukannya.\" Maka Rasulullah ﷺ pun mengajak manusia untuk berangkat. Demikianlah yang tercantum di dalam *al-Bidayah*, dan dikeluarkan pula oleh Ibnu Asakir dari Anas dengan redaksi yang serupa sebagaimana terdapat dalam *Kanzul 'Ummal*.",
  "Diriwayatkan pula oleh Ibnu Mardawaih dari Alqamah bin Waqqash al-Laitsi raḍiyallāhu 'anhu, ia menceritakan bahwa Rasulullah ﷺ keluar menuju Badar hingga ketika beliau sampai di al-Rauha', beliau berkhotbah di hadapan manusia dan bertanya, \"Bagaimana pendapat kalian?\" Abu Bakar raḍiyallāhu 'anhu menjawab, \"Wahai Rasulullah, telah sampai kabar kepada kami bahwa mereka berada di tempat ini dan itu.\" Kemudian beliau kembali berkhotbah di hadapan manusia dan bertanya, \"Bagaimana pendapat kalian?\" Umar raḍiyallāhu 'anhu pun menjawab seperti perkataan Abu Bakar. Beliau kembali berkhotbah di hadapan manusia dan bertanya, \"Bagaimana pendapat kalian?\" Maka Sa'ad bin Mu'adz raḍiyallāhu 'anhu berdiri dan berkata, \"Wahai Rasulullah, tampaknya engkau menginginkan jawaban dari kami. Demi Zat yang telah memuliakanmu dan menurunkan Kitab kepadamu, aku belum pernah menempuh jalan itu sama sekali dan aku tidak memiliki pengetahuan tentangnya. Namun, seandainya engkau berjalan membawa kami hingga mendatangi Barkil Ghimad di wilayah Yaman, niscaya kami akan benar-benar berjalan bersamamu. Kami tidak akan menjadi seperti orang-orang yang berkata kepada Nabi Musa 'alaihis salām: *'Pergilah kamu bersama Tuhanmu, dan berperanglah kamu berdua, sesungguhnya kami hanya duduk menanti di sini saja.'* Akan tetapi, pergilah engkau bersama Tuhanmu dan berperanglah, sesungguhnya kami bersamamu ikut bergabung. Barangkali engkau keluar untuk suatu urusan, lalu Allah menghendaki perkara lain kepadamu. Maka perhatikanlah apa yang Allah kehendaki kepadamu lalu laksanakanlah. Sambungkanlah tali hubungan dengan siapa saja yang engkau kehendaki, putuskanlah tali hubungan dengan siapa saja yang engkau kehendaki, musuhilah siapa saja yang engkau kehendaki, berdamailah dengan siapa saja yang engkau kehendaki, dan ambillah dari harta-harta kami apa saja yang engkau kehendaki.\"",
  "Maka turunlah Al-Qur'an sesuai dengan perkataan Sa'ad raḍiyallāhu 'anhu tersebut: *“Sebagaimana Tuhanmu mengeluarkanmu dari rumahmu dengan kebenaran, padahal sesungguhnya sebagian dari orang-orang yang beriman itu tidak menyukainya”* hingga akhir ayat. Al-Umawi menyebutkan di dalam kitab *Maghazi*-nya dengan menambahkan redaksi setelah kalimat 'dan ambillah dari harta-harta kami apa saja yang engkau kehendaki': \"Dan berikanlah kepada kami apa saja yang engkau kehendaki. Apa yang engkau ambil dari kami sungguh lebih kami cintai daripada apa yang engkau tinggalkan. Apa saja yang engkau perintahkan kepada kami, maka urusan kami mengikut kepada perintahmu. Demi Allah, seandainya engkau berjalan hingga mencapai Al-Bark dari daerah Ghumdan, niscaya kami akan benar-benar berjalan bersamamu.\" Demikianlah yang tercantum di dalam *al-Bidayah*.",
  "Kisah ini juga disebutkan oleh Ibnu Ishaq, dan di dalam rangkaian riwayatnya disebutkan bahwa Sa'ad bin Mu'adz raḍiyallāhu 'anhu berkata, \"Demi Allah, seakan-akan engkau menginginkan jawaban dari kami, wahai Rasulullah.\" Beliau ﷺ menjawab, \"Benar.\" Sa'ad berkata, \"Sungguh kami telah beriman kepadamu, kami telah membenarkanmu, dan kami bersaksi bahwa apa yang engkau bawa adalah kebenaran. Kami pun telah memberikan janji-janji dan kesepakatan kami kepadamu untuk mendengar dan taat kepadamu. Maka berjalannlah, wahai Rasulullah, menuju apa yang engkau inginkan, maka kami bersamamu. Demi Zat yang mengutusmu dengan kebenaran, seandainya engkau membawa kami menghadapi lautan ini lalu engkau mengarunginya, niscaya kami akan benar-benar mengarunginya bersamamu. Tidak akan ada satu pun laki-laki dari kami yang tertinggal, dan kami tidak benci jika engkau mempertemukan kami dengan musuh kami esok hari. Sesungguhnya kami adalah orang-orang yang kokoh di dalam peperangan dan jujur saat bertemu musuh. Semoga Allah memperlihatkan kepadamu dari kami apa yang dapat menyenangkan matamu. Maka berjalanlah di atas berkah Allah.\"",
  "Maka Rasulullah ﷺ merasa gembira dengan perkataan Sa'ad tersebut dan membuatnya bersemangat. Kemudian beliau ﷺ bersabda, \"Berjalanlah kalian dan bergembiralah, karena sesungguhnya Allah telah menjanjikan kepadaku salah satu dari dua golongan. Demi Allah, seakan-akan sekarang aku sedang melihat ke tempat-tempat kematian kaum tersebut.\" Demikianlah yang tercantum di dalam *al-Bidayah*."
 ]
}
 ]
 },
  {
   "id": 3,
   "label": "Jilid 3",
   "theme": "Segera hadir",
   "available": false,
   "chapters": []
  },
  {
   "id": 4,
   "label": "Jilid 4",
   "theme": "Segera hadir",
   "available": false,
   "chapters": []
  }
 ]
};
