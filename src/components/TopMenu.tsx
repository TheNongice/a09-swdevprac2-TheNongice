import styles from './topmenu.module.css';
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';

export default function TopMenu() {
    return (
        <div className={styles.menucontainer + ' ' + 'bg-orange-300'}>
            <div style={{ flex: 1 }}></div>

            <div className={styles.rightmenu}>
                <TopMenuItem title="Booking" pageRef='/booking' />
                <Image src={'/img/logo.png'} alt="Event Logo" className={styles.logoimg} width={100} height={40} />
            </div>
        </div>
    );
}
