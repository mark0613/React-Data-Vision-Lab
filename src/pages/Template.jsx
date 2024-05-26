import { Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const items = [
    {
        key: 'd3',
        label: 'D3',
        children: [],
    },
    {
        key: 'recharts',
        label: 'Recharts',
        children: [],
    },
    {
        key: 'echarts',
        label: 'ECharts',
        children: [],
    },
    {
        key: 'chart.js',
        label: 'Chart.js',
        children: [],
    },
];

export const Template = ({ children }) => {
    const {
        token: {
            colorBgContainer,
            borderRadiusLG,
        },
    } = theme.useToken();

    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
            >
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['d3']}
                    items={items}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                        height: '64px',
                    }}
                />
                <Content
                    style={{
                        margin: '24px 16px 0',
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            minHeight: 'calc(100vh - 152px)',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children}
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                        height: '64px',
                    }}
                >
                    React Data Vision Lab ©{new Date().getFullYear()} Mark
                </Footer>
            </Layout>
        </Layout>
    );
};
