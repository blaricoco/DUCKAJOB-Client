import { Tabs } from '@mantine/core';
import React from 'react';
import Links from '../Links';
import Reviews from '../Reviews';
import Skills from '../Skills';

import styles from './ProfileTab.module.scss';

const tabs = [
  {
    img: '/icons/tabs/user.svg',
    text: 'Bio',
  },
  {
    img: '/icons/tabs/star.svg',
    text: 'Reviews',
  },
  {
    img: '/icons/tabs/check-square.svg',
    text: 'Applications',
  },
  {
    img: '/icons/tabs/job.svg',
    text: 'Jobs',
  },
];

const ProfileTab = () => {
  const [active, setActive] = React.useState(0);
  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <div
            className={active === index ? styles.activeEl : styles.el}
            key={index}
            onClick={() => setActive(index)}>
            <img src={tab.img} alt="" />
            <p>{tab.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.body}>
        {active === 0 ? (
          <>
            <Skills />
            <Links />
          </>
        ) : active === 1 ? (
          <Reviews />
        ) : (
          <a href="ton://transfer/kQBXrhRh9tlsukixu0AnTt0uBsxNPNpcKCK_9KykqZ8AQd0m?text=Deploy&amount=50000000&init=te6cckECMgEACT4AAgE0BQECyUALE9eO0QE1sN5XURuu5X0UhEmyHoVRDdn6wT4aoOvMvqgAQXJ9OpJa3buORMyhWDchT6tKzpp-2qrY_RD7XGT2I5cACC5Pp1JLW7dxyJmUKwbkKfVpWdNP21VbH6Ifa4yexHLgAwIAQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB9QAEBwAQBBaCUmwUBFP8A9KQT9LzyyAsGAgFiIAcCASASCAIBIA4JAgEgDAoCybZmHaiaGoA_DFpAADHGf0gAID9IACA_SAAgOmP6Z_pn-oA6GmfwICA64Bpn-mf6Z_pj5gINgg1iDUINIg0CDO2DkdPfSAAgP0gAID9IACA6gDoQICA64AYCiGYAmiqgW2ecW2eQMQsACBBLXwsCybRlHaiaGoA_DFpAADHGf0gAID9IACA_SAAgOmP6Z_pn-oA6GmfwICA64Bpn-mf6Z_pj5gINgg1iDUINIg0CDO2DkdPfSAAgP0gAID9IACA6gDoQICA64AYCiGYAmiqgW2ecW2eQMQ0ACBA7XwsCAVgQDwBxsvRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgAsmydDtRNDUAfhi0gABjjP6QAEB-kABAfpAAQHTH9M_0z_UAdDTP4EBAdcA0z_TP9M_0x8wEGwQaxBqEGkQaBBnbByOnvpAAQH6QAEB-kABAdQB0IEBAdcAMBRDMATRVQLbPOLbPIDERAAgQe18LAgEgGxMCAUgWFALJsu87UTQ1AH4YtIAAY4z-kABAfpAAQH6QAEB0x_TP9M_1AHQ0z-BAQHXANM_0z_TP9MfMBBsEGsQahBpEGgQZ2wcjp76QAEB-kABAfpAAQHUAdCBAQHXADAUQzAE0VUC2zzi2zyAxFQAIEFtfCwICcxkXAseiI7UTQ1AH4YtIAAY4z-kABAfpAAQH6QAEB0x_TP9M_1AHQ0z-BAQHXANM_0z_TP9MfMBBsEGsQahBpEGgQZ2wcjp76QAEB-kABAfpAAQHUAdCBAQHXADAUQzAE0VUC2zzi2zyMRgACBBrXwsCx6DbtRNDUAfhi0gABjjP6QAEB-kABAfpAAQHTH9M_0z_UAdDTP4EBAdcA0z_TP9M_0x8wEGwQaxBqEGkQaBBnbByOnvpAAQH6QAEB-kABAdQB0IEBAdcAMBRDMATRVQLbPOLbPIxGgAIECtfCwIBIB4cAsm1db2omhqAPwxaQAAxxn9IACA_SAAgP0gAIDpj-mf6Z_qAOhpn8CAgOuAaZ_pn-mf6Y-YCDYINYg1CDSINAgztg5HT30gAID9IACA_SAAgOoA6ECAgOuAGAohmAJoqoFtnnFtnkDEdAAgQi18LAsm0xh2omhqAPwxaQAAxxn9IACA_SAAgP0gAIDpj-mf6Z_qAOhpn8CAgOuAaZ_pn-mf6Y-YCDYINYg1CDSINAgztg5HT30gAID9IACA_SAAgOoA6ECAgOuAGAohmAJoqoFtnnFtnkDEfAAYbXwsC9tAB0NMDAXGwwAGRf5Fw4gH6QCJQVW8E-GHtRNDUAfhi0gABjjP6QAEB-kABAfpAAQHTH9M_0z_UAdDTP4EBAdcA0z_TP9M_0x8wEGwQaxBqEGkQaBBnbByOnvpAAQH6QAEB-kABAdQB0IEBAdcAMBRDMATRVQLbPOJVGzEhAXrbPDDI-EIBzH8BygBVsFDLzxZQCc8WUAfPFhXLHxPLP8s_AcjLPxKBAQHPABLLPxLLPxPLP8sfyQHMye1UIgTu7aLt-3Ah10nCH5UwINcLH94Cklt_4CGCEEQtRG66jpUx0x8BghBELURuuvLggdMfATHbPH_gIYIQMgDgm7qOlTHTHwGCEDIA4Ju68uCB0x8BMds8f-AhghB8icQ_uo6VMdMfAYIQfInEP7ry4IH6QAEx2zx_4CEwLywjAmqCEJRqmLa6jqMx0x8BghCUapi2uvLggdM_ATHIAYIQr_kPV1jLH8s_yds8f-ABwACRMOMNcCskA_75ASCC8LGjU31oQXSahsjTxk8UYLuc4kA8YlKsjHlZ30OPwmUruo6GMNs8f9sx4CCC8PM74hM830FFVkkO-U0x49dxa2WW4L4rmDFVips3Zx-buo6GMNs8f9sx4CCC8CGozEb1h8UhtkM61Zg-qw8CuhqcHeKMgf6tbAYtuTd5KiklA8S6joYw2zx_2zHgIILw-liO_TO_lX8MrMmqaTfiE7i5qxHPjePmoGWJshyRLSq6joYw2zx_2zHggvCcpm7EOz9I0plSRvvR11ixIYPvr3iy_5ubbjGySSAMCrqOhds8f9sx4CgnJgFw-EFvJBAjXwOBadAGwAIW8vQrgQ3aBscFFfL0gUjz-CNTYqC-8vQqghAdzWUAcn9VIG1tbds8dQQtAXL4QW8kECNfA4FGfAbAARby9CqCAMGMBscFFfL0gQvU-CNTc6C-8vQpghAdzWUAcn9VIG1tbds8dQQtAFb4QW8kECNfA4IAl8AGwAIW8vQqggDNGAbHBRXy9IIAlEf4I1NioLvy9HQEAXT4QW8kECNfA4IAl8AGwAIW8vQqgVYJBscFFfL0ggDgnPgjU2Kgu_L0KoIQHc1lAHJ_VSBtbW3bPHMELQBcNfhBbyQQI18DggDDFAXAARXy9CqBDKIFxwUU8vSBWHH4I1NioLvy9PgjBHJQRAEm-EFvJBAjXwN_cFADgEIBbW3bPC0CovhBbyQQI18DgQ90J8AE8vQrggCYdgLHBfL0UwzHBY6TMDQqghAdzWUAcn9VIG1tbds8do6aK8cFjpM0KYIQHc1lAHJ_VSBtbW3bPHYE3gTiBC0tAfbIcQHKAVAHAcoAcAHKAlAFzxZQA_oCcAHKaCNusyVus7GOTH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMyXMzMBcAHKAOIhbrMuADCcfwHKAAEgbvLQgAHMlTFwAcoA4skB-wAAEjWBaXolwQfy9ABQN4IAgN8FwAAV8vSBHsD4I1OEoLvy9IIA4W5TZLry9FB1oPgjUHVxBAAccPgjVHERggP0gFMAVQfI3BGT">
            LINK
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileTab;
