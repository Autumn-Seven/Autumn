
/**
 * 性别选项列表。
 * 
 * @type {Array} [{label, value}]
 */
export const genderOptions = [
	{label: '男', value: 1},
	{label: '女', value: 0}
];


/**
 * 数据库驱动选项列表。
 * 
 * @type {Array} [{label, value}]
 */
export const databaseDriverOptions = [
	{label: 'MySQL', value: 'com.mysql.jdbc.Driver'},
	{label: 'Oracle', value: 'oracle.jdbc.driver.OracleDriver'},
	{label: 'MSSQL', value: 'com.microsoft.sqlserver.jdbc.SQLServerDriver'},
];




/**
 * 默认状态选项列表。
 * 
 * @type {Array} [{label, value}]
 */
export const normalStatusOptions = [
	{label: '激活', value: 1},
	{label: '未激活', value: 0}
];



/**
 * 图表类型选项列表。
 * 
 * @type {Array} [{label, value}]
 */
export const chartTypeOptions = [
	{label: '表格', value: 'table'},
	{label: '折线图', value: 'line'},
	{label: '柱状图', value: 'column'},
	{label: '饼图', value: 'pie'},
	{label: '散点图', value: 'scatter'},
	{label: '地图', value: 'map'},
	{label: '烛状图', value: 'candlestick'},
	{label: '雷达图', value: 'radar'},
	{label: '箱线图', value: 'boxplot'},
	{label: '热力图', value: 'heatmap'},
	{label: '关系图', value: 'graph'},
	{label: '树型图', value: 'tree'},
	{label: '矩阵图', value: 'treemap'},
	{label: '太阳图', value: 'sunburst'},
	{label: '桑基图', value: 'sankey'},
	{label: '漏斗图', value: 'funnel'},
	{label: '仪表盘', value: 'gauge'},
	{label: '日历图', value: 'calendar'},
	{label: '组合', value: 'group'}
];


/**
 * 解析字体类型字符串。
 * 
 * @param {String} sType 类型
 * @return {String} 名称
 */
export function fontFamilyStr(sType) {
	return utiljs.getArrayItemValueByKey(fontFamilyOptions, 'value', sType, 'label') || '';
}


