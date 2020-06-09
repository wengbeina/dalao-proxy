import Popover from 'ant-design-vue/es/popover';
import 'ant-design-vue/es/popover/style/index.css';
import './style.scss';

export default {
    name: 'plugin-switcher',
    component: {
        Popover,
    },
    render() {
        return (
            <div class="plugin-cache-ui-switcher">
                <Popover visible={this.visible} placement="left">
                    <div slot="content" class="swicher-ui-content">
                        Cache Mock Switcher
                    </div>

                    <div class="switcher-handler"
                        onclick={this.onclick}
                        onmousedown={this.onmousedown}
                        style={this.style}>D</div>
                </Popover>
            </div >
        );
    },
    data() {
        return {
            dragging: false,
            holding: false,
            visible: false,
            position: {}
        }
    },
    computed: {
        style() {
            const { x, y } = this.position;
            return {
                top: y - 10 + 'px',
                left: x - 10 + 'px',
            }
        }
    },
    mounted() {
        window.addEventListener('mousemove', this.onmousemove);
        window.addEventListener('mouseup', this.onmouseup);
    },
    beforeDestroy() {
        window.removeEventListener('mousemove', this.onmousemove);
        window.removeEventListener('mouseup', this.onmouseup);
    },

    methods: {
        onclick() {
            if (!this.dragging) {
                this.visible = !this.visible;
            }
        },
        onmousedown(e) {
            this.holding = true;
        },

        onmousemove({ x, y }) {
            if (this.holding) {
                this.dragging = true;
                if (x < 0) x = 0;
                if (x > window.innerWidth - 20) x = window.innerWidth - 20;
                if (y < 0) y = 0;
                if (y > window.innerHeight) y = window.innerHeight;
                this.position = { x, y };
            }
        },
        onmouseup() {
            this.holding = false;
            setTimeout(() => {
                this.dragging = false;
            });
        }
    }
}