/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { EntityService } from './entity.service';
import { PostService } from './post.service';
import { SocialMediaMetricService } from './socialmediametric.service';
import { ThreadService } from './thread.service';

const dummyResponse = {
  posts: [
    {
      thread: {
        uuid: '79e187d7d2a7c5928672c259d8e0491a82983d35',
        url: 'https://www.fxstreet.com/cryptocurrencies/news?q=Litecoin',
        site_full: 'www.fxstreet.com',
        site: 'fxstreet.com',
        site_section: 'https://www.fxstreet.com/cryptocurrencies/news',
        site_categories: ['investing', 'financial_news', 'finance', 'stocks'],
        section_title:
          '\r\n\tCrypto News today - Bitcoin and Altcoins News\r\n',
        title: 'Crypto News today - Bitcoin and Altcoins News',
        title_full: 'Crypto News today - Bitcoin and Altcoins News',
        published: '2025-02-21T10:06:00.000+02:00',
        replies_count: 0,
        participants_count: 0,
        site_type: 'news',
        country: 'US',
        main_image: '',
        performance_score: 0,
        domain_rank: 7783,
        domain_rank_updated: '2025-02-17T23:00:00.000+02:00',
        social: {
          updated: '2025-02-21T10:10:02.000+02:00',
          facebook: {
            likes: 180,
            comments: 17,
            shares: 59,
          },
          vk: {
            shares: 0,
          },
        },
      },
      uuid: '79e187d7d2a7c5928672c259d8e0491a82983d35',
      url: 'https://www.fxstreet.com/cryptocurrencies/news?q=Litecoin',
      ord_in_thread: 0,
      parent_url: null,
      author: null,
      published: '2025-02-21T10:06:00.000+02:00',
      title: 'Crypto News today - Bitcoin and Altcoins News',
      text: 'Full text is unavailable in the news API lite version',
      highlightText:
        "CRYPTO NEWS\nCryptocurrency Market News - \u003Cem\u003EBitcoin\u003C/em\u003E and Altcoins News\nFXStreet's latest content to stay... BEST CRYPTO BROKERS & EXCHANGES\nEditors’ Picks\nTop 3 Price Prediction \u003Cem\u003EBitcoin\u003C/em\u003E, Ethereum, Ripple: BTC... gears up for volatility while ETH and XRP fight to stay afloat\n\u003Cem\u003EBitcoin\u003C/em\u003E price has been consolidating between... More Cryptocurrencies News\n\u003Cem\u003EBitcoin\u003C/em\u003E underperforms as Gold, S&P 500 reach record high\n\u003Cem\u003EBitcoin\u003C/em\u003E (BTC) traded... Forks such as \u003Cem\u003EBitcoin\u003C/em\u003E Gold,\u003Cem\u003EBitcoin\u003C/em\u003E Cash, with the total number of forks currently exceeding ten.... ",
      highlightTitle:
        'Crypto News today - \u003Cem\u003EBitcoin\u003C/em\u003E and Altcoins News... ',
      highlightThreadTitle:
        'Crypto News today - \u003Cem\u003EBitcoin\u003C/em\u003E and Altcoins News... ',
      language: 'english',
      sentiment: 'neutral',
      categories: ['Economy, Business and Finance', 'Social Issue', 'Politics'],
      external_links: [],
      external_images: [],
      entities: {
        persons: [],
        organizations: [],
        locations: [],
      },
      rating: null,
      crawled: '2025-02-21T10:09:49.505+02:00',
      updated: '2025-02-21T10:09:49.505+02:00',
    },
    {
      thread: {
        uuid: '633e36587d0344e070942eb86c372000424d0171',
        url: 'https://www.forbes.com/sites/davidbirch/2025/02/22/quantum-computers-vs-garbage-excavators-the-race-for-the-lost-bitcoin',
        site_full: 'www.forbes.com',
        site: 'forbes.com',
        site_section:
          'https://news.google.com/search?q=the%20when%3A1h&hl=en-US&gl=US&ceid=US%3Aen',
        site_categories: [
          'media',
          'top_news_cz',
          'top_news_nz',
          'top_news_au',
          'top_news_ae',
          'top_news_us',
          'top_news_pt',
          'top_news_gb',
          'top_news_th',
          'top_news_sa',
          'top_news_sg',
          'top_news_ph',
          'top_news_rs',
          'top_news_hk',
          'top_news_nl',
          'top_news_qa',
          'top_news_ie',
          'top_news_pk',
          'top_news_se',
          'top_news_id',
          'top_news_dk',
          'top_news_eg',
          'top_news_sk',
          'top_news_ch',
          'top_news_za',
          'top_news_ma',
          'top_news_my',
          'top_news_il',
          'top_news_kw',
          'top_news_fi',
          'top_news_be',
          'top_news_in',
          'top_news_ca',
          'top_news_iq',
          'top_news',
        ],
        section_title: 'Google News - Search',
        title:
          'quantum-computers-vs-garbage-excavators-the-race-for-the-lost-bitcoin',
        title_full:
          'quantum-computers-vs-garbage-excavators-the-race-for-the-lost-bitcoin',
        published: '2025-02-22T02:00:00.000+02:00',
        replies_count: 0,
        participants_count: 1,
        site_type: 'news',
        country: 'US',
        main_image:
          'https://imageio.forbes.com/specials-images/imageserve/67b9ecc9037cd1dd8aabb4a0/0x0.jpg?format=jpg&amp;crop=1632,919,x0,y81,safe&amp;height=900&amp;width=1600&amp;fit=bounds',
        performance_score: 0,
        domain_rank: 69,
        domain_rank_updated: '2025-02-17T23:00:00.000+02:00',
        social: {
          updated: '2025-02-22T17:47:11.000+02:00',
          facebook: {
            likes: 0,
            comments: 0,
            shares: 0,
          },
          vk: {
            shares: 0,
          },
        },
      },
      uuid: '633e36587d0344e070942eb86c372000424d0171',
      url: 'https://www.forbes.com/sites/davidbirch/2025/02/22/quantum-computers-vs-garbage-excavators-the-race-for-the-lost-bitcoin',
      ord_in_thread: 0,
      parent_url: null,
      author: 'David G.W. Birch',
      published: '2025-02-22T02:00:00.000+02:00',
      title:
        'quantum-computers-vs-garbage-excavators-the-race-for-the-lost-bitcoin',
      text: 'Full text is unavailable in the news API lite version',
      highlightText:
        'very beginning, but I think it has just taken an interesting turn because the race to find the lost \u003Cem\u003Ebitcoin\u003C/em\u003E... The Lost \u003Cem\u003EBitcoin\u003C/em\u003E Story\nSometime in the summer of 2013, Mr.... Knowing the public key does not help you to figure out the private key, of course (if it did, \u003Cem\u003EBitcoin\u003C/em\u003E... (For the technically-minded, this is because \u003Cem\u003EBitcoin\u003C/em\u003E also relies on a particular type of cryptography... Can you get all of the lost \u003Cem\u003Ebitcoin\u003C/em\u003E out of the Satoshi wallet and move them over to the Dave Birch Holiday... ',
      highlightTitle:
        'quantum-computers-vs-garbage-excavators-the-race-for-the-lost-\u003Cem\u003Ebitcoin\u003C/em\u003E... ',
      highlightThreadTitle:
        'quantum-computers-vs-garbage-excavators-the-race-for-the-lost-\u003Cem\u003Ebitcoin\u003C/em\u003E... ',
      language: 'english',
      sentiment: 'neutral',
      categories: [
        'Science and Technology',
        'Economy, Business and Finance',
        'Social Issue',
      ],
      external_links: [
        'https://www.ft.com/content/63cf560a-69f3-42c2-82c3-7e8d97282716',
        'https://www.dgwbirch.com',
        'https://www.microsoft.com/en-us/microsoft-copilot/for-individuals/do-more-with-ai/general-ai/what-is-copilot?form=MA13KP',
        'https://crypto.com/en/university/will-quantum-computing-threaten-bitcoin-cryptocurrency',
        'https://www.cityam.com/james-howells-the-man-hoping-to-buy-a-rubbish-dump-in-his-search-for-750m-of-bitcoin/',
        'https://www.dlnews.com/articles/people-culture/quantum-computing-wont-kill-bitcoin-might-unlock-lost-coins/',
        'https://a.co/d/6khOSTJ',
        'https://cityam.com/james-howells-the-man-hoping-to-buy-a-rubbish-dump-in-his-search-for-750m-of-bitcoin/',
        'https://microsoft.com/en-us/microsoft-copilot/for-individuals/do-more-with-ai/general-ai/what-is-copilot?form=MA13KP',
        'https://dlnews.com/articles/people-culture/quantum-computing-wont-kill-bitcoin-might-unlock-lost-coins/',
        'https://www.microsoft.com/en-us/microsoft-copilot/for-individuals/do-more-with-ai/general-ai/what-is-copilot',
        'https://www.a.co/d/6khOSTJ',
        'https://dgwbirch.com',
        'https://www.cityam.com/james-howells-the-man-hoping-to-buy-a-rubbish-dump-in-his-search-for-750m-of-bitcoin',
        'https://www.dlnews.com/articles/people-culture/quantum-computing-wont-kill-bitcoin-might-unlock-lost-coins',
        'https://ft.com/content/63cf560a-69f3-42c2-82c3-7e8d97282716',
        'https://www.crypto.com/en/university/will-quantum-computing-threaten-bitcoin-cryptocurrency',
      ],
      external_images: [],
      entities: {
        persons: [],
        organizations: [],
        locations: [],
      },
      rating: null,
      crawled: '2025-02-22T17:47:04.255+02:00',
      updated: '2025-02-22T17:47:04.255+02:00',
    },
    {
      thread: {
        uuid: '03127d65ed24a0ff270592f5bdb8db12cd1d5666',
        url: 'https://www.forbes.com/sites/davidbirnbaum/2025/02/22/bitcoin-or-real-estate-its-time-to-change-how-we-think-about-wealth',
        site_full: 'www.forbes.com',
        site: 'forbes.com',
        site_section:
          'https://news.google.com/search?q=its%20when%3A1h&hl=en-US&gl=US&ceid=US%3Aen',
        site_categories: [
          'media',
          'top_news_cz',
          'top_news_nz',
          'top_news_au',
          'top_news_ae',
          'top_news_us',
          'top_news_pt',
          'top_news_gb',
          'top_news_th',
          'top_news_sa',
          'top_news_sg',
          'top_news_ph',
          'top_news_rs',
          'top_news_hk',
          'top_news_nl',
          'top_news_qa',
          'top_news_ie',
          'top_news_pk',
          'top_news_se',
          'top_news_id',
          'top_news_dk',
          'top_news_eg',
          'top_news_sk',
          'top_news_ch',
          'top_news_za',
          'top_news_ma',
          'top_news_my',
          'top_news_il',
          'top_news_kw',
          'top_news_fi',
          'top_news_be',
          'top_news_in',
          'top_news_ca',
          'top_news_iq',
          'top_news',
        ],
        section_title: 'Google News - Search',
        title:
          'bitcoin-or-real-estate-its-time-to-change-how-we-think-about-wealth',
        title_full:
          'bitcoin-or-real-estate-its-time-to-change-how-we-think-about-wealth',
        published: '2025-02-22T02:00:00.000+02:00',
        replies_count: 0,
        participants_count: 1,
        site_type: 'news',
        country: 'US',
        main_image:
          'https://imageio.forbes.com/specials-images/imageserve/67a58c597dc8d703f0cbd821/0x0.jpg?format=jpg&amp;height=900&amp;width=1600&amp;fit=bounds',
        performance_score: 0,
        domain_rank: 69,
        domain_rank_updated: '2025-02-17T23:00:00.000+02:00',
        social: {
          updated: '2025-02-22T23:40:17.000+02:00',
          facebook: {
            likes: 0,
            comments: 0,
            shares: 0,
          },
          vk: {
            shares: 0,
          },
        },
      },
      uuid: '03127d65ed24a0ff270592f5bdb8db12cd1d5666',
      url: 'https://www.forbes.com/sites/davidbirnbaum/2025/02/22/bitcoin-or-real-estate-its-time-to-change-how-we-think-about-wealth',
      ord_in_thread: 0,
      parent_url: null,
      author: 'Dave Birnbaum',
      published: '2025-02-22T02:00:00.000+02:00',
      title:
        'bitcoin-or-real-estate-its-time-to-change-how-we-think-about-wealth',
      text: 'Full text is unavailable in the news API lite version',
      highlightText:
        '\u003Cem\u003EBitcoin\u003C/em\u003E, on the other hand, has long been dismissed by traditional investors as the opposite.... That is, \u003Cem\u003Ebitcoin\u003C/em\u003E is physical, just not in a way that makes it vulnerable to natural disasters.... \u003Cem\u003EBitcoin\u003C/em\u003E: A New Kind of Property\nHere’s where \u003Cem\u003Ebitcoin\u003C/em\u003E shatters the old paradigm.... And crucially, \u003Cem\u003Ebitcoin\u003C/em\u003E does not require trust in institutions to protect it.... For years, investors scoffed at the idea that \u003Cem\u003Ebitcoin\u003C/em\u003E could be a store of value.... ',
      highlightTitle:
        '\u003Cem\u003Ebitcoin\u003C/em\u003E-or-real-estate-its-time-to-change-how-we-think-about-wealth... ',
      highlightThreadTitle:
        '\u003Cem\u003Ebitcoin\u003C/em\u003E-or-real-estate-its-time-to-change-how-we-think-about-wealth... ',
      language: 'english',
      sentiment: 'neutral',
      categories: [
        'Economy, Business and Finance',
        'Social Issue',
        'Human Interest',
      ],
      external_links: [
        'https://bitcoinmagazine.com/culture/the-blockstream-satellite-network-maintaining-bitcoin-sovereignty-in-space',
        'https://coinbits.app/blog/is-bitcoin-a-bearer-asset',
        'https://www.wsj.com/real-estate/los-angeles-fire-housing-shortage-a1424502',
        'https://davebirnbaum.com/',
        'https://bitcoinnews.com/opinion/bitcoin-wealth-preservation/',
        'https://bitcoinmagazine.com/technical/bitcoin-is-physical-bits-and-bytes-have-to-live-somewhere',
        'https://bitcoinnews.com/opinion/bitcoin-wealth-preservation',
        'https://www.bitcoinmagazine.com/technical/bitcoin-is-physical-bits-and-bytes-have-to-live-somewhere',
        'https://wsj.com/real-estate/los-angeles-fire-housing-shortage-a1424502',
        'https://www.bitcoinnews.com/opinion/bitcoin-wealth-preservation/',
        'https://davebirnbaum.com',
        'https://www.davebirnbaum.com/',
        'https://www.coinbits.app/blog/is-bitcoin-a-bearer-asset',
        'https://www.bitcoinmagazine.com/culture/the-blockstream-satellite-network-maintaining-bitcoin-sovereignty-in-space',
      ],
      external_images: [],
      entities: {
        persons: [],
        organizations: [],
        locations: [],
      },
      rating: null,
      crawled: '2025-02-22T23:40:13.991+02:00',
      updated: '2025-02-22T23:40:13.991+02:00',
    },
    {
      thread: {
        uuid: '5f9f8b83b2c612a07195e52a1400349daabf2faf',
        url: 'https://www.forbes.com/sites/digital-assets/2025/02/22/it-begins-bitcoin-and-crypto-brace-for-an-80-trillion-us-price-bombshell',
        site_full: 'www.forbes.com',
        site: 'forbes.com',
        site_section: 'https://newstral.com/en/article',
        site_categories: [
          'media',
          'top_news_cz',
          'top_news_nz',
          'top_news_au',
          'top_news_ae',
          'top_news_us',
          'top_news_pt',
          'top_news_gb',
          'top_news_th',
          'top_news_sa',
          'top_news_sg',
          'top_news_ph',
          'top_news_rs',
          'top_news_hk',
          'top_news_nl',
          'top_news_qa',
          'top_news_ie',
          'top_news_pk',
          'top_news_se',
          'top_news_id',
          'top_news_dk',
          'top_news_eg',
          'top_news_sk',
          'top_news_ch',
          'top_news_za',
          'top_news_ma',
          'top_news_my',
          'top_news_il',
          'top_news_kw',
          'top_news_fi',
          'top_news_be',
          'top_news_in',
          'top_news_ca',
          'top_news_iq',
          'top_news',
        ],
        section_title: 'Ticker - Newstral.com',
        title:
          'it-begins-bitcoin-and-crypto-brace-for-an-80-trillion-us-price-bombshell',
        title_full:
          'it-begins-bitcoin-and-crypto-brace-for-an-80-trillion-us-price-bombshell',
        published: '2025-02-22T02:00:00.000+02:00',
        replies_count: 0,
        participants_count: 1,
        site_type: 'news',
        country: 'US',
        main_image:
          'https://imageio.forbes.com/specials-images/imageserve/67b9bab0d6453d7662a536a7/0x0.jpg?format=jpg&amp;crop=1507,1062,x535,y456,safe&amp;height=900&amp;width=1600&amp;fit=bounds',
        performance_score: 0,
        domain_rank: 69,
        domain_rank_updated: '2025-02-17T23:00:00.000+02:00',
        social: {
          updated: '2025-02-22T14:54:26.000+02:00',
          facebook: {
            likes: 0,
            comments: 0,
            shares: 0,
          },
          vk: {
            shares: 0,
          },
        },
      },
      uuid: '5f9f8b83b2c612a07195e52a1400349daabf2faf',
      url: 'https://www.forbes.com/sites/digital-assets/2025/02/22/it-begins-bitcoin-and-crypto-brace-for-an-80-trillion-us-price-bombshell',
      ord_in_thread: 0,
      parent_url: null,
      author: 'Billy Bambrough',
      published: '2025-02-22T02:00:00.000+02:00',
      title:
        'it-begins-bitcoin-and-crypto-brace-for-an-80-trillion-us-price-bombshell',
      text: 'Full text is unavailable in the news API lite version',
      highlightText:
        'The \u003Cem\u003Ebitcoin\u003C/em\u003E price is hovering at just under $100,000 per \u003Cem\u003Ebitcoin\u003C/em\u003E, up from under $50,000 at the beginning... Now, as a soverign wealth fund suddenly kicks off the global \u003Cem\u003Ebitcoin\u003C/em\u003E adoption "race," \u003Cem\u003Ebitcoin\u003C/em\u003E-backing... You own \u003Cem\u003Ebitcoin\u003C/em\u003E, and then you run the \u003Cem\u003EBitcoin\u003C/em\u003E network.... You mine \u003Cem\u003Ebitcoin\u003C/em\u003E; you own \u003Cem\u003Ebitcoin\u003C/em\u003E,” Saylor, who has published a \u003Cem\u003Ebitcoin\u003C/em\u003E framework for the U.S. government... at the \u003Cem\u003EBitcoin\u003C/em\u003E 2024 conference.... ',
      highlightTitle:
        'it-begins-\u003Cem\u003Ebitcoin\u003C/em\u003E-and-crypto-brace-for-an-80-trillion-us-price-bombshell... ',
      highlightThreadTitle:
        'it-begins-\u003Cem\u003Ebitcoin\u003C/em\u003E-and-crypto-brace-for-an-80-trillion-us-price-bombshell... ',
      language: 'english',
      sentiment: 'negative',
      categories: ['Economy, Business and Finance', 'Social Issue'],
      external_links: [
        'https://www.cnbc.com/2024/12/12/watch-the-full-video-of-donald-trump-talking-with-jim-cramer-at-nyse.html',
        'https://app.deform.cc/form/0f3efc64-cf8c-4c1d-8bfa-2350f0a25bf0/?page_number=0',
        'https://x.com/saylor/status/1892635108282101914',
        'https://assets.contentstack.io/v3/assets/bltdef7a3f3c28ddd84/bltbd460db477d23baf/67659dbf8f5c6e6a7aaf224d/Digital_Assets_Framework.pdf',
        'https://www.banking.senate.gov/hearings/exploring-bipartisan-legislative-frameworks-for-digital-assets',
        'https://www.assets.contentstack.io/v3/assets/bltdef7a3f3c28ddd84/bltbd460db477d23baf/67659dbf8f5c6e6a7aaf224d/Digital_Assets_Framework.pdf',
        'https://banking.senate.gov/hearings/exploring-bipartisan-legislative-frameworks-for-digital-assets',
        'https://cnbc.com/2024/12/12/watch-the-full-video-of-donald-trump-talking-with-jim-cramer-at-nyse.html',
        'https://www.x.com/saylor/status/1892635108282101914',
        'https://www.app.deform.cc/form/0f3efc64-cf8c-4c1d-8bfa-2350f0a25bf0/?page_number=0',
        'https://app.deform.cc/form/0f3efc64-cf8c-4c1d-8bfa-2350f0a25bf0/',
      ],
      external_images: [],
      entities: {
        persons: [
          {
            name: 'Donald Trump',
            sentiment: 'negative',
          },
          {
            name: 'Michael Saylor',
            sentiment: 'none',
          },
          {
            name: 'Cynthia Lummis',
            sentiment: 'none',
          },
          {
            name: 'Tim Sco',
            sentiment: 'none',
          },
        ],
        organizations: [
          {
            name: 'U.S. Senate',
            sentiment: 'none',
          },
          {
            name: 'NFT',
            sentiment: 'none',
          },
        ],
        locations: [],
      },
      rating: null,
      crawled: '2025-02-22T14:54:02.541+02:00',
      updated: '2025-02-22T14:54:02.541+02:00',
    },
    {
      thread: {
        uuid: 'bf9230413e9a18c5fba828520f6f8fb2492bfe56',
        url: 'https://markets.businessinsider.com/news/stocks/montana-blazes-ahead-as-fourth-u-s-state-to-push-a-bitcoin-reserve-1034391541',
        site_full: 'markets.businessinsider.com',
        site: 'businessinsider.com',
        site_section: 'https://markets.businessinsider.com/news',
        site_categories: [
          'financial_news',
          'finance',
          'options',
          'top_news_nz',
          'top_news_au',
          'top_news_ae',
          'top_news_us',
          'top_news_gb',
          'top_news_th',
          'top_news_sg',
          'top_news_rs',
          'top_news_ph',
          'top_news_hk',
          'top_news_qa',
          'top_news_ie',
          'top_news_pk',
          'top_news_se',
          'top_news_id',
          'top_news_dk',
          'top_news_za',
          'top_news_my',
          'top_news_il',
          'top_news_kw',
          'top_news_fi',
          'top_news_ca',
          'top_news',
        ],
        section_title: 'News | Financial and Business News | Markets Insider',
        title:
          'Montana Blazes Ahead as Fourth U.S. State to Push a Bitcoin Reserve | Markets Insider',
        title_full:
          'Montana Blazes Ahead as Fourth U.S. State to Push a Bitcoin Reserve | Markets Insider',
        published: '2025-02-21T14:13:00.000+02:00',
        replies_count: 0,
        participants_count: 1,
        site_type: 'news',
        country: 'US',
        main_image:
          'https://blog.tipranks.com/wp-content/uploads/2025/02/Screenshot-2025-02-21-at-11.56.50-1024x554.png?utm_source=markets.businessinsider.com&amp;utm_medium=referral',
        performance_score: 0,
        domain_rank: 124,
        domain_rank_updated: '2025-02-17T23:00:00.000+02:00',
        social: {
          updated: '2025-02-21T14:46:14.000+02:00',
          facebook: {
            likes: 0,
            comments: 0,
            shares: 0,
          },
          vk: {
            shares: 0,
          },
        },
      },
      uuid: 'bf9230413e9a18c5fba828520f6f8fb2492bfe56',
      url: 'https://markets.businessinsider.com/news/stocks/montana-blazes-ahead-as-fourth-u-s-state-to-push-a-bitcoin-reserve-1034391541',
      ord_in_thread: 0,
      parent_url: null,
      author: 'Tipranks',
      published: '2025-02-21T14:13:00.000+02:00',
      title:
        'Montana Blazes Ahead as Fourth U.S. State to Push a Bitcoin Reserve | Markets Insider',
      text: 'Full text is unavailable in the news API lite version',
      highlightText:
        'Montana has blazed a trail, becoming the fourth U.S. state to push a \u003Cem\u003EBitcoin\u003C/em\u003E reserve bill through to... This initiative could transform \u003Cem\u003EBitcoin\u003C/em\u003E and other hefty digital assets into reserve assets for the state... As it stands, \u003Cem\u003EBitcoin\u003C/em\u003E is the lone digital giant meeting the bill’s criteria with its mammoth market cap... As more states like Illinois, Kentucky, and Texas dip their toes into \u003Cem\u003EBitcoin\u003C/em\u003E reserve waters, it’s clear... At the time of writing, \u003Cem\u003EBitcoin\u003C/em\u003E is sitting at $98,676.70 .... ',
      highlightTitle:
        'State to Push a \u003Cem\u003EBitcoin\u003C/em\u003E Reserve | Markets Insider... ',
      highlightThreadTitle:
        'State to Push a \u003Cem\u003EBitcoin\u003C/em\u003E Reserve | Markets Insider... ',
      language: 'english',
      sentiment: 'positive',
      categories: ['Economy, Business and Finance'],
      external_links: [
        'https://www.tipranks.com/screener/stocks?utm_source=markets.businessinsider.com&utm_medium=referral',
        'https://www.tipranks.com/cryptocurrency/btc-usd?utm_source=markets.businessinsider.com&utm_medium=referral',
        'https://www.tipranks.com/screener/analysts-top-stocks?utm_source=markets.businessinsider.com&utm_medium=referral',
        'https://www.tipranks.com/news/arizona-advances-bold-bitcoin-reserve-legislation?utm_source=markets.businessinsider.com&utm_medium=referral',
        'https://www.tipranks.com/cryptocurrency?utm_source=markets.businessinsider.com&utm_medium=referral',
        'https://www.tipranks.com/screener/analysts-top-stocks',
        'https://www.tipranks.com/cryptocurrency',
        'https://www.tipranks.com/cryptocurrency/btc-usd',
        'https://tipranks.com/news/arizona-advances-bold-bitcoin-reserve-legislation?utm_source=markets.businessinsider.com&utm_medium=referral',
        'https://tipranks.com/screener/analysts-top-stocks?utm_source=markets.businessinsider.com&utm_medium=referral',
        'https://www.tipranks.com/screener/stocks',
        'https://tipranks.com/cryptocurrency/btc-usd?utm_source=markets.businessinsider.com&utm_medium=referral',
        'https://tipranks.com/screener/stocks?utm_source=markets.businessinsider.com&utm_medium=referral',
        'https://tipranks.com/cryptocurrency?utm_source=markets.businessinsider.com&utm_medium=referral',
        'https://www.tipranks.com/news/arizona-advances-bold-bitcoin-reserve-legislation',
      ],
      external_images: [],
      entities: {
        persons: [
          {
            name: 'Utah Lea',
            sentiment: 'none',
          },
        ],
        organizations: [],
        locations: [],
      },
      rating: null,
      crawled: '2025-02-21T14:44:57.457+02:00',
      updated: '2025-02-21T14:44:57.457+02:00',
    },
    {
      thread: {
        uuid: '334f51b75913e56c3a7da4c830ee601120c4ad85',
        url: 'https://markets.businessinsider.com/news/currencies/bitcoin-ether-slumps-as-crypto-prices-crumble-on-report-of-massive-usd1-4b-bybit-security-incident-1034393134',
        site_full: 'markets.businessinsider.com',
        site: 'businessinsider.com',
        site_section: 'https://markets.businessinsider.com/news',
        site_categories: [
          'financial_news',
          'finance',
          'options',
          'top_news_nz',
          'top_news_au',
          'top_news_ae',
          'top_news_us',
          'top_news_gb',
          'top_news_th',
          'top_news_sg',
          'top_news_rs',
          'top_news_ph',
          'top_news_hk',
          'top_news_qa',
          'top_news_ie',
          'top_news_pk',
          'top_news_se',
          'top_news_id',
          'top_news_dk',
          'top_news_za',
          'top_news_my',
          'top_news_il',
          'top_news_kw',
          'top_news_fi',
          'top_news_ca',
          'top_news',
        ],
        section_title: 'News | Financial and Business News | Markets Insider',
        title:
          'Bitcoin, Ether Slump as Crypto Prices Dip on Report of Massive $1.4B Bybit Hack | Currency News | Financial and Business News | Markets Insider',
        title_full:
          'Bitcoin, Ether Slump as Crypto Prices Dip on Report of Massive $1.4B Bybit Hack | Currency News | Financial and Business News | Markets Insider',
        published: '2025-02-21T17:51:00.000+02:00',
        replies_count: 0,
        participants_count: 1,
        site_type: 'news',
        country: 'US',
        main_image:
          'https://cdn.sanity.io/images/s3y3vcno/production/195187795594706c8a6ae7f33f3c5cd96a7d38f5-1600x858.png',
        performance_score: 0,
        domain_rank: 124,
        domain_rank_updated: '2025-02-17T23:00:00.000+02:00',
        social: {
          updated: '2025-02-21T18:36:28.000+02:00',
          facebook: {
            likes: 0,
            comments: 0,
            shares: 0,
          },
          vk: {
            shares: 0,
          },
        },
      },
      uuid: '334f51b75913e56c3a7da4c830ee601120c4ad85',
      url: 'https://markets.businessinsider.com/news/currencies/bitcoin-ether-slumps-as-crypto-prices-crumble-on-report-of-massive-usd1-4b-bybit-security-incident-1034393134',
      ord_in_thread: 0,
      parent_url: null,
      author: 'Krisztian Sandor',
      published: '2025-02-21T17:51:00.000+02:00',
      title:
        'Bitcoin, Ether Slump as Crypto Prices Dip on Report of Massive $1.4B Bybit Hack | Currency News | Financial and Business News | Markets Insider',
      text: 'Full text is unavailable in the news API lite version',
      highlightText:
        '\u003Cem\u003EBitcoin\u003C/em\u003E (BTC) slid to near $97,000 after hovering near $100,000 earlier during the day, while ether (... Read more: \u003Cem\u003EBitcoin\u003C/em\u003E and Ether Tumble on Potential $1.46B Bybit Hack\nThis story originally appeared on... ',
      highlightTitle:
        '\u003Cem\u003EBitcoin\u003C/em\u003E, Ether Slump as Crypto Prices Dip on Report of Massive $1.4B Bybit Hack | Currency News | Financial... ',
      highlightThreadTitle:
        '\u003Cem\u003EBitcoin\u003C/em\u003E, Ether Slump as Crypto Prices Dip on Report of Massive $1.4B Bybit Hack | Currency News | Financial... ',
      language: 'english',
      sentiment: 'negative',
      categories: ['Economy, Business and Finance', 'Science and Technology'],
      external_links: [
        'https://x.com/benbybit/status/1892963530422505586',
        'https://www.coindesk.com/business/2025/02/21/bybit-experiences-usd1-46b-in-suspicious-outflows-zachxbt',
        'https://www.x.com/benbybit/status/1892963530422505586',
        'https://coindesk.com/business/2025/02/21/bybit-experiences-usd1-46b-in-suspicious-outflows-zachxbt',
      ],
      external_images: [],
      entities: {
        persons: [
          {
            name: 'Ben Zhou',
            sentiment: 'none',
          },
        ],
        organizations: [],
        locations: [],
      },
      rating: null,
      crawled: '2025-02-21T18:36:00.770+02:00',
      updated: '2025-02-21T18:36:00.770+02:00',
    },
    {
      thread: {
        uuid: 'da1380e5da649d90fc4a0c11eca70876a22df509',
        url: 'https://markets.businessinsider.com/news/currencies/u-s-marshals-service-managing-seized-assets-can-t-say-how-much-crypto-it-holds-1034393743',
        site_full: 'markets.businessinsider.com',
        site: 'businessinsider.com',
        site_section: 'https://markets.businessinsider.com/news',
        site_categories: [
          'investing',
          'financial_news',
          'finance',
          'top_news_nz',
          'top_news_au',
          'top_news_ae',
          'top_news_us',
          'top_news_gb',
          'top_news_th',
          'top_news_sg',
          'top_news_rs',
          'top_news_ph',
          'top_news_hk',
          'top_news_qa',
          'top_news_ie',
          'top_news_pk',
          'top_news_se',
          'top_news_id',
          'top_news_dk',
          'top_news_za',
          'top_news_my',
          'top_news_il',
          'top_news_kw',
          'top_news_fi',
          'top_news_ca',
          'top_news',
        ],
        section_title: 'News | Financial and Business News | Markets Insider',
        title:
          "U.S. Marshals Service Can't Say How Much Crypto It Holds, Complicating Bitcoin Reserve Plan | Currency News | Financial and Business News | Markets Insider",
        title_full:
          "U.S. Marshals Service Can't Say How Much Crypto It Holds, Complicating Bitcoin Reserve Plan | Currency News | Financial and Business News | Markets Insider",
        published: '2025-02-21T21:03:00.000+02:00',
        replies_count: 0,
        participants_count: 1,
        site_type: 'news',
        country: 'US',
        main_image: '',
        performance_score: 0,
        domain_rank: 124,
        domain_rank_updated: '2025-02-17T23:00:00.000+02:00',
        social: {
          updated: '2025-02-21T22:34:39.000+02:00',
          facebook: {
            likes: 0,
            comments: 0,
            shares: 0,
          },
          vk: {
            shares: 0,
          },
        },
      },
      uuid: 'da1380e5da649d90fc4a0c11eca70876a22df509',
      url: 'https://markets.businessinsider.com/news/currencies/u-s-marshals-service-managing-seized-assets-can-t-say-how-much-crypto-it-holds-1034393743',
      ord_in_thread: 0,
      parent_url: null,
      author: 'Tom Carreras',
      published: '2025-02-21T21:03:00.000+02:00',
      title:
        "U.S. Marshals Service Can't Say How Much Crypto It Holds, Complicating Bitcoin Reserve Plan | Currency News | Financial and Business News | Markets Insider",
      text: 'Full text is unavailable in the news API lite version',
      highlightText:
        'It is also supposed to be handling cryptocurrencies — for example, the billions of dollars worth of \u003Cem\u003Ebitcoin\u003C/em\u003E... In fact, the agency is struggling to come up with a rough estimate of even its \u003Cem\u003Ebitcoin\u003C/em\u003E holdings, a source... Not only would the USMS take weeks to provide \u003Cem\u003Ebitcoin\u003C/em\u003E deposit addresses to agencies when they’d just... Cash (BCH) or \u003Cem\u003EBitcoin\u003C/em\u003E Satoshi Vision (BSV), both of which forked off of \u003Cem\u003EBitcoin\u003C/em\u003E.... Trump said that, if elected, he would instruct the federal government to stop selling seized \u003Cem\u003Ebitcoin\u003C/em\u003E... ',
      highlightTitle:
        "Marshals Service Can't Say How Much Crypto It Holds, Complicating \u003Cem\u003EBitcoin\u003C/em\u003E Reserve Plan | Currency News... ",
      highlightThreadTitle:
        "Marshals Service Can't Say How Much Crypto It Holds, Complicating \u003Cem\u003EBitcoin\u003C/em\u003E Reserve Plan | Currency News... ",
      language: 'english',
      sentiment: 'neutral',
      categories: ['Economy, Business and Finance'],
      external_links: [
        'https://www.coindesk.com/markets/2021/07/28/us-marshals-service-chooses-anchorage-digital-for-custody-of-seized-digital-assets',
        'https://www.coinbase.com/blog/u-s-marshals-service-chooses-coinbase-to-safeguard-trade-its-large-cap',
        'https://oig.justice.gov/news/doj-oig-releases-report-us-marshals-services-management-seized-cryptocurrency',
        'https://www.usaspending.gov/award/CONT_AWD_15M50024FA4400016_1544_15M50024DA4400010_1544',
        'https://www.coindesk.com/policy/2025/02/04/trump-s-crypto-czar-sacks-says',
        'https://www.gao.gov/docket/b-422736.2',
        'https://sam.gov/opp/06efebc228e1418089ad54787a608cc6/view',
        'https://www.coindesk.com/business/2021/04/22/bitgo-will-custody-crypto-for-us-marshals-service-in-45m-deal',
        'https://coindesk.com/policy/2025/02/04/trump-s-crypto-czar-sacks-says',
        'https://coinbase.com/blog/u-s-marshals-service-chooses-coinbase-to-safeguard-trade-its-large-cap',
        'https://usaspending.gov/award/CONT_AWD_15M50024FA4400016_1544_15M50024DA4400010_1544',
        'https://www.sam.gov/opp/06efebc228e1418089ad54787a608cc6/view',
        'https://coindesk.com/business/2021/04/22/bitgo-will-custody-crypto-for-us-marshals-service-in-45m-deal',
        'https://gao.gov/docket/b-422736.2',
        'https://www.oig.justice.gov/news/doj-oig-releases-report-us-marshals-services-management-seized-cryptocurrency',
        'https://coindesk.com/markets/2021/07/28/us-marshals-service-chooses-anchorage-digital-for-custody-of-seized-digital-assets',
      ],
      external_images: [],
      entities: {
        persons: [],
        organizations: [],
        locations: [],
      },
      rating: null,
      crawled: '2025-02-21T22:34:31.920+02:00',
      updated: '2025-02-21T22:34:31.920+02:00',
    },
    {
      thread: {
        uuid: 'a58947106c7f8fad5d4bd4f5ea5a551fa8a44c80',
        url: 'https://cryptocon.substack.com/p/bit-by-bit',
        site_full: 'cryptocon.substack.com',
        site: 'substack.com',
        site_section:
          'https://substack.com/api/v1/inbox/top?tab=118&tabType=category',
        site_categories: [],
        section_title: '',
        title: 'Bit By Bit - by CryptoCon - Bitcoin Data Newsletter',
        title_full: 'Bit By Bit - by CryptoCon - Bitcoin Data Newsletter',
        published: '2025-02-22T00:39:00.000+02:00',
        replies_count: 0,
        participants_count: 1,
        site_type: 'news',
        country: 'US',
        main_image:
          'https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1effc4d2-c6bc-48b3-8c0f-a6f75faae6bf_1024x1024.webp',
        performance_score: 0,
        domain_rank: 271,
        domain_rank_updated: '2025-02-17T23:00:00.000+02:00',
        social: {
          updated: '2025-02-22T07:36:30.000+02:00',
          facebook: {
            likes: 0,
            comments: 0,
            shares: 0,
          },
          vk: {
            shares: 0,
          },
        },
      },
      uuid: 'a58947106c7f8fad5d4bd4f5ea5a551fa8a44c80',
      url: 'https://cryptocon.substack.com/p/bit-by-bit',
      ord_in_thread: 0,
      parent_url: null,
      author: 'CryptoCon',
      published: '2025-02-22T00:39:00.000+02:00',
      title: 'Bit By Bit - by CryptoCon - Bitcoin Data Newsletter',
      text: 'Full text is unavailable in the news API lite version',
      highlightText:
        '\u003Cem\u003EBitcoin\u003C/em\u003E seemingly can’t stay above 98.5k to save it’s life!... Join the \u003Cem\u003EBitcoin\u003C/em\u003E Data Newsletter free or paid to start learning how to profit long-term from someone... Subscribe\nDiscussion about this video Comments Restacks \u003Cem\u003EBitcoin\u003C/em\u003E Data Newsletter Subscribe Authors\nCryptoCon... ',
      highlightTitle:
        'Bit By Bit - by CryptoCon - \u003Cem\u003EBitcoin\u003C/em\u003E Data Newsletter... ',
      highlightThreadTitle:
        'Bit By Bit - by CryptoCon - \u003Cem\u003EBitcoin\u003C/em\u003E Data Newsletter... ',
      language: 'english',
      sentiment: 'neutral',
      categories: ['Economy, Business and Finance'],
      external_links: [
        'https://substackcdn.com/image/fetch/w_96,h_96,c_fill,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F95291242-3da1-4913-9a9e-7f5d9c668bc6_236x236.jpeg',
        'https://substackcdn.com/image/fetch/w_96,h_96,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F95291242-3da1-4913-9a9e-7f5d9c668bc6_236x236.jpeg',
        'https://substackcdn.com/image/fetch/w_64,h_64,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F95291242-3da1-4913-9a9e-7f5d9c668bc6_236x236.jpeg',
        'https://substackcdn.com/image/fetch/w_64,h_64,c_fill,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F95291242-3da1-4913-9a9e-7f5d9c668bc6_236x236.jpeg',
        'https://x.com/CryptoCon_/status/1892704191413735706',
        'https://substackcdn.com/image/fetch/w_32,h_32,c_fill,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F95291242-3da1-4913-9a9e-7f5d9c668bc6_236x236.jpeg',
        'https://substackcdn.com/image/fetch/w_32,h_32,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F95291242-3da1-4913-9a9e-7f5d9c668bc6_236x236.jpeg',
        'https://www.substackcdn.com/image/fetch/w_64,h_64,c_fill,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F95291242-3da1-4913-9a9e-7f5d9c668bc6_236x236.jpeg',
        'https://www.substackcdn.com/image/fetch/w_96,h_96,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F95291242-3da1-4913-9a9e-7f5d9c668bc6_236x236.jpeg',
        'https://www.substackcdn.com/image/fetch/w_32,h_32,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F95291242-3da1-4913-9a9e-7f5d9c668bc6_236x236.jpeg',
        'https://www.substackcdn.com/image/fetch/w_64,h_64,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F95291242-3da1-4913-9a9e-7f5d9c668bc6_236x236.jpeg',
        'https://www.substackcdn.com/image/fetch/w_32,h_32,c_fill,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F95291242-3da1-4913-9a9e-7f5d9c668bc6_236x236.jpeg',
        'https://www.x.com/CryptoCon_/status/1892704191413735706',
        'https://www.substackcdn.com/image/fetch/w_96,h_96,c_fill,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F95291242-3da1-4913-9a9e-7f5d9c668bc6_236x236.jpeg',
      ],
      external_images: [],
      entities: {
        persons: [],
        organizations: [
          {
            name: 'Bitcoin Data Newsletter',
            sentiment: 'none',
          },
        ],
        locations: [],
      },
      rating: null,
      crawled: '2025-02-22T07:34:59.428+02:00',
      updated: '2025-02-22T07:34:59.428+02:00',
    },
    {
      thread: {
        uuid: '5026beaf7900c2a1f5f1cddd800846f50021e5c5',
        url: 'https://www.prnewswire.com/news-releases/nano-labs-announces-pricing-of-unregistered-sale-of-equity-securities-and-increased-bitcoin-holdings-to-400-302382213.html',
        site_full: 'www.prnewswire.com',
        site: 'prnewswire.com',
        site_section:
          'https://www.prnewswire.com/news-releases/english-releases/',
        site_categories: ['media'],
        section_title:
          'All English-only  News and Press Releases from PR Newswire',
        title:
          'Nano Labs Announces Pricing of Unregistered Sale of Equity Securities and Increased Bitcoin Holdings to 400',
        title_full:
          'Nano Labs Announces Pricing of Unregistered Sale of Equity Securities and Increased Bitcoin Holdings to 400',
        published: '2025-02-21T13:00:00.000+02:00',
        replies_count: 0,
        participants_count: 1,
        site_type: 'news',
        country: 'US',
        main_image:
          'https://mma.prnewswire.com/media/2013003/nano_labs_Logo.jpg?p=facebook',
        performance_score: 0,
        domain_rank: 206,
        domain_rank_updated: '2025-02-17T23:00:00.000+02:00',
        social: {
          updated: '2025-02-21T13:04:37.000+02:00',
          facebook: {
            likes: 0,
            comments: 0,
            shares: 0,
          },
          vk: {
            shares: 0,
          },
        },
      },
      uuid: '5026beaf7900c2a1f5f1cddd800846f50021e5c5',
      url: 'https://www.prnewswire.com/news-releases/nano-labs-announces-pricing-of-unregistered-sale-of-equity-securities-and-increased-bitcoin-holdings-to-400-302382213.html',
      ord_in_thread: 0,
      parent_url: null,
      author: 'Nano Labs Ltd',
      published: '2025-02-21T13:00:00.000+02:00',
      title:
        'Nano Labs Announces Pricing of Unregistered Sale of Equity Securities and Increased Bitcoin Holdings to 400',
      text: 'Full text is unavailable in the news API lite version',
      highlightText:
        'The Aggregate Purchase Price will be satisfied in \u003Cem\u003EBitcoin\u003C/em\u003E (BTC) and USDT.... In addition, the Company has recently increased its \u003Cem\u003EBitcoin\u003C/em\u003E holdings.... As of February 21, 2025 , the Company holds a total of approximately 400 \u003Cem\u003EBitcoins\u003C/em\u003E, with a current value... The average acquisition cost of its \u003Cem\u003EBitcoin\u003C/em\u003E holdings is approximately US$99 ,500 per BTC, inclusive of... ',
      highlightTitle:
        'Nano Labs Announces Pricing of Unregistered Sale of Equity Securities and Increased \u003Cem\u003EBitcoin\u003C/em\u003E Holdings... ',
      highlightThreadTitle:
        'Nano Labs Announces Pricing of Unregistered Sale of Equity Securities and Increased \u003Cem\u003EBitcoin\u003C/em\u003E Holdings... ',
      language: 'english',
      sentiment: 'neutral',
      categories: ['Economy, Business and Finance'],
      external_links: [],
      external_images: [],
      entities: {
        persons: [],
        organizations: [
          {
            name: 'Nano Labs Ltd',
            sentiment: 'negative',
          },
        ],
        locations: [],
      },
      rating: null,
      crawled: '2025-02-21T13:04:21.990+02:00',
      updated: '2025-02-21T13:04:21.990+02:00',
    },
    {
      thread: {
        uuid: 'ee3d8bfc65df860c2ea33dd401dcaf45cf60ad0d',
        url: 'https://www.prnewswire.com/news-releases/thesis-backed-fold-becomes-first-bitcoin-financial-services-company-to-go-public-on-nasdaq-302382340.html',
        site_full: 'www.prnewswire.com',
        site: 'prnewswire.com',
        site_section: 'https://www.prnewswire.com/sitemap-news.xml?page=1',
        site_categories: ['media'],
        section_title: '',
        title:
          'Thesis*-Backed Fold Becomes First Bitcoin Financial Services Company to Go Public on Nasdaq',
        title_full:
          'Thesis*-Backed Fold Becomes First Bitcoin Financial Services Company to Go Public on Nasdaq',
        published: '2025-02-21T16:16:00.000+02:00',
        replies_count: 0,
        participants_count: 1,
        site_type: 'news',
        country: 'US',
        main_image:
          'https://mma.prnewswire.com/media/2522668/Thesis_Logo.jpg?p=facebook',
        performance_score: 0,
        domain_rank: 206,
        domain_rank_updated: '2025-02-17T23:00:00.000+02:00',
        social: {
          updated: '2025-02-21T16:20:01.000+02:00',
          facebook: {
            likes: 0,
            comments: 0,
            shares: 0,
          },
          vk: {
            shares: 0,
          },
        },
      },
      uuid: 'ee3d8bfc65df860c2ea33dd401dcaf45cf60ad0d',
      url: 'https://www.prnewswire.com/news-releases/thesis-backed-fold-becomes-first-bitcoin-financial-services-company-to-go-public-on-nasdaq-302382340.html',
      ord_in_thread: 0,
      parent_url: null,
      author: 'Thesis*',
      published: '2025-02-21T16:16:00.000+02:00',
      title:
        'Thesis*-Backed Fold Becomes First Bitcoin Financial Services Company to Go Public on Nasdaq',
      text: 'Full text is unavailable in the news API lite version',
      highlightText:
        '\u003Cem\u003EBitcoin\u003C/em\u003E into their daily financial lives.... As the first \u003Cem\u003EBitcoin\u003C/em\u003E financial services company to go public, it sets the stage for broader \u003Cem\u003EBitcoin\u003C/em\u003E adoption... Just like we helped people earn \u003Cem\u003EBitcoin\u003C/em\u003E through Fold, Mezo will empower them to leverage their \u003Cem\u003EBitcoin\u003C/em\u003E... , save, and spend \u003Cem\u003EBitcoin\u003C/em\u003E on everyday transactions.... the \u003Cem\u003EBitcoin\u003C/em\u003E economy with minimal risk or complexity.... ',
      highlightTitle:
        'Thesis*-Backed Fold Becomes First \u003Cem\u003EBitcoin\u003C/em\u003E Financial Services Company to Go Public on Nasdaq... ',
      highlightThreadTitle:
        'Thesis*-Backed Fold Becomes First \u003Cem\u003EBitcoin\u003C/em\u003E Financial Services Company to Go Public on Nasdaq... ',
      language: 'english',
      sentiment: 'positive',
      categories: ['Economy, Business and Finance', 'Science and Technology'],
      external_links: [
        'https://c212.net/c/link/?t=0&l=en&o=4367540-1&h=2929328100&u=https%3A%2F%2Fwww.foldapp.com%2F&a=www.foldapp.com',
        'https://c212.net/c/link/?t=0&l=en&o=4367540-1&h=1318483303&u=https%3A%2F%2Fwww.thesis.co%2F&a=%C2%A0www.Thesis.co',
        'https://c212.net/c/link/?t=0&l=en&o=4367540-1&h=487025484&u=https%3A%2F%2Fwww.foldapp.com%2F&a=%C2%A0',
        'https://www.c212.net/c/link/?t=0&l=en&o=4367540-1&h=487025484&u=https%3A%2F%2Fwww.foldapp.com%2F&a=%C2%A0',
        'https://www.c212.net/c/link/?t=0&l=en&o=4367540-1&h=2929328100&u=https%3A%2F%2Fwww.foldapp.com%2F&a=www.foldapp.com',
        'https://c212.net/c/link/',
        'https://www.c212.net/c/link/?t=0&l=en&o=4367540-1&h=1318483303&u=https%3A%2F%2Fwww.thesis.co%2F&a=%C2%A0www.Thesis.co',
      ],
      external_images: [],
      entities: {
        persons: [],
        organizations: [],
        locations: [],
      },
      rating: null,
      crawled: '2025-02-21T16:18:39.357+02:00',
      updated: '2025-02-21T16:18:39.357+02:00',
    },
  ],
  totalResults: 40500,
  moreResultsAvailable: 40490,
  next: '/newsApiLite?token=5e2b4dd8-2b09-411b-9d87-abddb5d810dc&ts=1740018184643&q=Bitcoin&sort=relevancy&order=desc&from=10&ns=47.735237&ni=ee3d8bfc65df860c2ea33dd401dcaf45cf60ad0d&highlight=true&size=10',
  requestsLeft: 1000,
  warnings: null,
};

@Injectable()
export class WebzService {
  constructor(
    private readonly httpService: HttpService,
    private thread: ThreadService,
    private socialMediaMetric: SocialMediaMetricService,
    private post: PostService,
    private entity: EntityService,
  ) {}

  private readonly logger = new Logger(WebzService.name, { timestamp: true });

  async importDatabase() {
    try {
      const url = `https://api.webz.io/newsApiLite?token=${process.env.WEBZ_TOKEN}&q=Bitcoin`;
      console.log('🚀 ~ WebzService ~ importDatabase ~ url:', url);
      // const response = await firstValueFrom<Record<string, any>>(
      //   this.httpService.get(url),
      // );

      // const response = await fetch(
      //   'https://admin.naxa.com.np/api/blog?no_page=true',
      // );

      const { posts } = dummyResponse;
      const postPromises = posts.map(async (post) => {
        const { thread, entities, ...restPost } = post;

        const { social, ...restThread } = thread;

        // 1. create thread
        // @ts-expect-error - nnn
        await this.thread.create(restThread);

        const { updated, ...restMetric } = social;
        // Create SocialMediaMetric
        await Promise.all(
          Object.entries(restMetric).map(async ([platform, metric]) => {
            await Promise.all(
              Object.entries(metric).map(async ([metricType, metricCount]) => {
                const createMetric = await this.socialMediaMetric.create({
                  social_media: platform,
                  metric_type: metricType,
                  count: metricCount,
                  // @ts-expect-error - nnn
                  updated,
                  threadUuid: thread.uuid,
                });

                return createMetric;
                // updated
                // platform
                // metricType
                // metricCount
              }),
            );
          }),
        );

        // Create Post
        // @ts-expect-error - nnn
        await this.post.create(restPost);

        // Create Entity
        await Promise.all(
          Object.entries(entities).map(async ([entity_type, entity_value]) => {
            return await Promise.all(
              entity_value?.map(async (value) => {
                // @ts-expect-error - nn
                return await this.entity.create({
                  entity_type,
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                  entity_name: value.name,
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                  entity_sentiment: value.sentiment,
                  post_id: post.uuid,
                });
              }),
            );
          }),
        );
      });
      await Promise.all(postPromises);

      return 'Boom';
    } catch (error: any) {
      // console.log('🚀 ~ WebzService ~ importDatabase ~ error:', error);
      this.logger.error(
        `From Error ${error?.message}.` || 'Error fetching webz!',
        {
          timeStamp: true,
        },
      );
    }
  }
}
