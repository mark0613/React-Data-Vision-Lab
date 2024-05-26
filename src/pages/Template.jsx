import { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { Layout, Menu, theme } from 'antd';

const { Content, Footer, Sider } = Layout;

const items = [
    {
        key: 'antd',
        label: 'Ant Design Chart',
        children: [
            {
                key: 'antd/bar',
                label: 'Bar Chart',
            },
            {
                key: 'antd/pie',
                label: 'Pie Chart',
            },
            {
                key: 'antd/scatter',
                label: 'Scatter Plot',
            },
        ],
    },
    {
        key: 'chartjs',
        label: 'Chart.js',
        children: [
            {
                key: 'chartjs/bar',
                label: 'Bar Chart',
            },
            {
                key: 'chartjs/pie',
                label: 'Pie Chart',
            },
            {
                key: 'chartjs/scatter',
                label: 'Scatter Plot',
            },
        ],
    },
    {
        key: 'd3',
        label: 'D3',
        children: [
            {
                key: 'd3/bar',
                label: 'Bar Chart',
            },
            {
                key: 'd3/pie',
                label: 'Pie Chart',
            },
            {
                key: 'd3/scatter',
                label: 'Scatter Plot',
            },
            {
                key: 'd3/word-cloud',
                label: 'Word Cloud',
            },
        ],
    },
    {
        key: 'echarts',
        label: 'ECharts',
        children: [
            {
                key: 'echarts/bar',
                label: 'Bar Chart',
            },
            {
                key: 'echarts/pie',
                label: 'Pie Chart',
            },
            {
                key: 'echarts/scatter',
                label: 'Scatter Plot',
            },
        ],
    },
    {
        key: 'recharts',
        label: 'Recharts',
        children: [
            {
                key: 'recharts/bar',
                label: 'Bar Chart',
            },
            {
                key: 'recharts/pie',
                label: 'Pie Chart',
            },
            {
                key: 'recharts/scatter',
                label: 'Scatter Plot',
            },
        ],
    },
];

export const Template = ({ children }) => {
    const {
        token: {
            colorBgContainer,
            borderRadiusLG,
        },
    } = theme.useToken();

    const location = useLocation();
    const navigate = useNavigate();

    const [openKeys, setOpenKeys] = useState([location.pathname.split('/')[1]]);

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
                    defaultOpenKeys={openKeys}
                    selectedKeys={[location.pathname.slice(1)]}
                    items={items}
                    onClick={({ key }) => {
                        setOpenKeys(key);
                        navigate(`/${key}`);
                    }}
                />
            </Sider>
            <Layout>
                <Content
                    style={{
                        margin: '24px 16px 0',
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            minHeight: 'calc(100vh - 88px)',
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
