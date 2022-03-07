import{Layout} from '@douyinfe/semi-ui'
const {Footer} = Layout

export const CustomFooter = () => {
    return <Footer
        style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '20px',
            color: 'var(--semi-color-text-2)',
            backgroundColor: 'rgba(var(--semi-grey-0), 1)',
        }}
    >
        <span
            style={{
                display: 'flex',
                alignItems: 'center',
            }}
        >

            <span>Copyright © 2022 NJC. All Rights Reserved. </span>
        </span>

</Footer>
}