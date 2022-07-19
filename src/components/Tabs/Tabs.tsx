import { CSSProperties, useState } from 'react';

export interface TabProps {
    label: string;
    children: React.ReactNode;
}

export const Tab: React.FC<TabProps> = () => null;

export interface TabsProps {
    children: React.ReactElement<TabProps>[];
}

export const Tabs: React.FC<TabsProps> = ({
    children: tabs
}) => {

    const [activeTab, setActiveTab] = useState(0);

    const tabSelected = (i: number) => {
        setActiveTab(i);
    };

    return <div style={style.container}>
        <div style={style.header}>
            {
                tabs.map((tab, i) => <button key={i} onClick={() => tabSelected(i)}>{tab.props.label}</button>)
            }
        </div>
        <div style={style.content}>
            {
                tabs.map((tab, i) => (
                    <div style={{...style.innerConentInactive, ...(activeTab === i ? style.innerConentActive : undefined)}}>
                        {tab.props.children}
                    </div>
                ))
            }
        </div>
    </div>
}

const style: Record<string, CSSProperties> = {
    container: {
        width: 300,
        height: 400,
        border: '1px solid blue',
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        minHeight: 10,
        display: 'flex',
        padding: 10,
        gap: 10,
        borderBottom: '1px solid blue'
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    innerConentActive: {
        display: 'flex'
    },
    innerConentInactive: {
        width: '100%',
        height: '100%',
        display: 'none',
    },
};
