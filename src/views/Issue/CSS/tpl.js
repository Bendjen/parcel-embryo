const direction = `flex-direction:
                row;            /*主轴为水平方向，起点在左端。（默认值）*/
                row-reverse;    /* 主轴为水平方向，起点在右端。*/
                column;         /* 主轴为垂直方向，起点在上沿。*/
                column-reverse; /* 主轴为垂直方向，起点在下沿。*/
`
const dir = `           dir:
                top
                right
                bottom
                left
`
const wrap = `flex-wrap:
            nowrap;          /* 不换行。（默认值） */
            wrap;            /* 换行，第一行在上方。 */
            wrap-reverse;    /* 换行，第一行在下方。 */
`

const content = `justify-content:
                flex-start;      /* 左对齐。（默认值）*/
                flex-end;        /* 右对齐。 */
                center;          /* 居中。 */
                space-between;   /* 两端对齐，项目之间的间隔都相等。 */
                space-around;    /* 每个项目两侧的间隔相等。项目之间的间隔比项目与边框的间隔大一倍。 */
`

const main =`           main：
                 right
                 left
                 justify
                 center
`

const items =`align-items:
            flex-start  /* 交叉轴的起点对齐。 */
            flex-end    /* 交叉轴的终点对齐。 */
            center      /* 交叉轴的中点对齐。 */
            baseline    /* 项目的第一行文字的基线对齐。 */
            stretch     /* 如果项目未设置高度或设为auto，将占满整个容器的高度。（默认值） */
`

const cross =`cross
        top
        bottom
        baseline
        center
        stretch
`

const box=`box：子元素设置
            mean：子元素平分空间
            first：第一个子元素不要多余空间，其他子元素平分多余空间
            last：最后一个子元素不要多余空间，其他子元素平分多余空间
            justify：两端第一个元素不要多余空间，其他子元素平分多余空间
`

const bfc=`
    .left{
        width:200px;
        float:left;
    }
    .right{
        overflow:hidden;
    }
`

const media=`ipone5: @media screen and (max-width: 320px)    
ipone6: @media screen and (min-width: 321px) and (max-width: 413px)  
ipone6plus: @media screen and (min-width: 414px) and (max-width: 639px)  
ipad: @media screen and (min-width: 640px)    
`


export {direction,dir,wrap,content,main,items,cross,box,bfc,media}