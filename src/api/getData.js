import axios from '../config/axios'
import axios2 from '../config/axios2'
import {baseUrl} from '../config/env'

/**
 **************************供应商平台 api****************************
 */
/**
 * 
 * @param {string} data 当前页面的url
 */
// export const getSignature = (data) => axios(baseUrl + '/home/GetJsApiInfo', {data})

/**
 * 登录接口
 * @param {String} SupplierID  
 * @param {String} WeixinOpenID  
 * @param {String} Phone  
 * @param {String} sex  
 * @param {String} nickname  
 * @param {String} userpic  
 */
export const JDlogin = (data) => axios(baseUrl + '/ERPForSupplierServer.asmx/WeChatBindingVendor', data)

/**
 * 供应商注册(OA审批)
 * @param {String} jsonStr 
 */
export const JDSupplierRegister = (data) => axios(baseUrl + '/ERPForWeixinServer.asmx/SupplierRegister', data)

/**
 * 获取微信供应商列表
 * @param {} data 
 */
export const JDSupplierList = (data) => axios(baseUrl + '/ERPForSupplierServer.asmx/GetWeixinSupplier', data, 'parse')

/**
 * 判断输入供应商名称或者税务码是否存在,并返回名称或者税务码
 * @param {String} FSupplierName 
 */
export const JDGetWeixinSupplierByNameOrCode = (data) => axios(baseUrl + '/ERPForSupplierServer.asmx/GetWeixinSupplierByNameOrCode', data, 'UrlDecode')

/**
 * 获取微信供应商公告
 * @param {} data 
 */
export const JDGetNotice = (data) => axios2('/Wap/GetNewsGG', data, 'parse')

/**
 * 获取微信供应商新闻列表
 * @param {} data 
 */
export const JDGetNewsList = (data) => axios2('/Wap/GetNewsSC', data, 'parse')
/**
 * 获取微信供应商新闻详情
 * @param {} data 
 */
export const JDGetNewsInfo = (data) => axios2('/Wap/NewsDetailGYS', data, 'parse')

/**
 * 获取供应商信息 
 * @param {string} FWeixinOpenID
 * 
 */
export const JDSupplierInfo = (data) => axios(baseUrl + '/ERPForWeixinServer.asmx/GetSupplierInfo', data, 'parse')

/**
 * 获取验证码
 * @param {string} phone
 */
export const JDgetSmsCode = (data) => axios(baseUrl + '/ERPForAppServer.asmx/SendVerificationCode', data)

/**
 * 采购订单列表
 * @param {string} StartTime
 * @param {string} EndTime
 * @param {string} WeixinOpenID
 * @param {string} Instruction
 * @param {string} Model
 */
export const JDgetOrderList = (data) => axios(baseUrl + '/ERPForSupplierServer.asmx/GetSupplierPurchaseOrder', data, 'parse')

/**
 * 采购订单列表SAP
 * @param {string} StartTime
 * @param {string} EndTime
 * @param {string} WeixinOpenID
 * @param {string} Instruction
 * @param {string} Model
 */
export const JDGetSAPPurchaseOrder = (data) => axios(baseUrl + '/SAPForAPPServer.asmx/GetSAPPurchaseOrder', data, 'parse')

/**
 * 采购订单列表SAP生成EXCEL
 * @param {string} StartTime
 * @param {string} EndTime
 * @param {string} WeixinOpenID
 * @param {string} Instruction
 * @param {string} Model
 */
export const JDGetSAPPurchaseOrderExcel = (data) => axios(baseUrl + '/ERPForWeixinServer.asmx/GetSAPPurchaseOrderExcel', data, 'UrlDecode')

/**
 * 入库单明细（列表）
 * @param {string} StartTime
 * @param {string} EndTime
 * @param {string} WeixinOpenID
 * @param {string} Instruction
 * @param {string} Model
 */
export const JDWarehouseList = (data) => axios(baseUrl + '/ERPForSAPServer.asmx/GetSupplierInstocks', data, 'UrlDecode')

/**
 * 入库单明细（列表）生成EXCEL
 * @param {string} StartTime
 * @param {string} EndTime
 * @param {string} WeixinOpenID
 * @param {string} Instruction
 * @param {string} Model
 * @param {string} MaterialCode
 */
export const JDWarehouseListExcel = (data) => axios(baseUrl + '/ERPForWeixinServer.asmx/GetSupplierInstocksExcel', data, 'UrlDecode')

/** 
 * 获取采购订单明细信息
 * @param {string} CgOrderNo 采购订单编号
 * 
 */
export const JDOrderDetail = (data) => axios(baseUrl + '/SAPForAPPServer.asmx/GetSupplierPurchaseOrderDetail', data, 'parse')

/** 
 * 采购收料通知单列表
 * @param {string} I_DATEF 开始时间
 * @param {string} I_DATET 结束时间
 * @param {string} I_ZZGCXT 型体
 * @param {string} I_VBELN 指令号
 * @param {string} I_LIFNR 当前用户登录的供应商名称
 * @param {string} I_ZTYPE 类型
 * 
 */
export const JDGetZCGSLTZD = (data) => axios(baseUrl + '/SAPForAPPServer.asmx/GetZCGSLTZD', data)

/** 
 * 品检单列表
 * @param {string} I_DATEF 开始时间
 * @param {string} I_DATET 结束时间
 * @param {string} I_ZZGCXT 型体
 * @param {string} I_VBELN 指令号
 * @param {string} I_LIFNR 当前用户登录的供应商名称
 * @param {string} I_MATNR 物料代码
 * 
 */
export const JDGetZCHECKB = (data) => axios(baseUrl + '/SAPForAPPServer.asmx/GetZCHECKB', data)

/** 
 * 退货单列表
 * @param {string} I_DATEF 开始时间
 * @param {string} I_DATET 结束时间
 * @param {string} I_ZZGCXT 型体
 * @param {string} I_VBELN 指令号
 * @param {string} I_LIFNR 当前用户登录的供应商名称
 * @param {string} I_MATNR 物料代码
 * 
 */
export const JDGetZRETURNS = (data) => axios(baseUrl + '/SAPForAPPServer.asmx/GetZRETURNS', data)

/** 
 * 暂收单列表
 * @param {string} StartDate 开始时间
 * @param {string} EndDate 结束时间
 * @param {string} TempreNo 暂收单号
 * @param {string} Mtono 指令号
 * @param {string} FactoryType 型体
 * 
 */
export const JDGetTemporaryList = (data) => axios(baseUrl + '/SAPForAPPServer.asmx/WeChatGetTempreoraryList', data)

/** 
 * 暂收单详情
 * @param {string} Type 开始时间
 * @param {string} Zno 结束时间
 * TYPE-1 暂收单列表点击进去获取本单信息 （传参暂收单号ZNO以及TYPE值1）
 * TYPE-2 送货单点击生成暂收单 （传参送货单号ZNO以及TYPE值2）
 * TYPE-3 采购订单点击生成暂收单 （传参采购订单号ZNO以及TYPE值3）
 * 
 */
export const JDGetTemporaryDetail = (data) => axios(baseUrl + '/SAPForAPPServer.asmx/GetTemporaryDetail', data)

/** 
 * 送货单列表
 * 
 */
export const JDGetDELIList = (data) => axios(baseUrl + '/SAPForAPPServer.asmx/WeChatGetDELIList', data)

/** 
 * 送货单详情
 * @param {string} DeliNO 送货单号
 * 
 */
export const JDGetDELIDetailForWX = (data) => axios(baseUrl + '/SAPForAPPServer.asmx/GetDELIDetailForWX', data)

/** 
 * 送货单详情（编辑）
 * @param {string} DeliNO 送货单号
 * 
 */
export const JDGetDELIDetailForWX_Edit = (data) => axios(baseUrl + '/SAPForAPPServer.asmx/GetDELIDetailForWX_Edit', data)

/** 
 * 生成送货单
 * @param {string} DeliNO 送货单号
 * 
 */
export const JDSendLetterOfAdvice = (data) => axios(baseUrl + '/SAPForAPPServer.asmx/SendLetterOfAdvice', data)

/** 
 * 入库单明细 
 * @param {string} MBLNR 凭证号
 * @param {string} MJAHR 年度
 * 
 */
export const JDGetSupplierInstocksDetail = (data) => axios(baseUrl + '/SAPForAPPServer.asmx/GetSupplierInstocksDetail', data)

/**
 * 往来对账获得组织信息接口（供【公司】下拉框使用）
 * @param {string} SupplyNo 供应商编号
 * @param {string} FOrgNumber 公司编号
 * @param {string} FOrgName 组织名称
 * @param {string} FInvoiceNotes 开票须知
 * 
 */
export const JDGetGetFactoryList = (data) => axios(baseUrl + '/SAPForAPPServer.asmx/GetOrgList', data)

/**
 * 往来对账汇总接口
 * @param {string} FSupplyNO 供应商编号
 * @param {string} I_BUKRS 公司编号
 * @param {string} I_SSDZ 是否对账
 * @param {string} ShowType 汇总类型
 */
export const JDGetSTOCKACCOUNTList = (data) => axios(baseUrl + '/SAPForAPPServer.asmx/GetSTOCKACCOUNTList', data)

/**
 * 往来对账汇总明细
 * @param {string} FSupplyNO 供应商编号
 * @param {string} I_BUKRS 公司编号
 * @param {string} I_SSDZ 是否对账
 * @param {string} ShowType 汇总类型
 * @param {string} I_WERKS 工厂编号
 * @param {string} MAKTX 物料名称
 */
export const JDGetSTOCKACCOUNTEntry = (data) => axios(baseUrl + '/SAPForAPPServer.asmx/GetSTOCKACCOUNTEntry', data)

// export const test = (data) => axios('http://work.goldemperor.com/Home/InitWxQY', data)
/**
 * 往来对账汇总接口生成EXCEL
 * @param {string} FSupplyNO 供应商编号
 * @param {string} I_BUKRS 公司编号
 * @param {string} I_SSDZ 是否对账
 * @param {string} ShowType 汇总类型
 */
export const JDGetSTOCKACCOUNTListExcel = (data) => axios(baseUrl + '/ERPForWeixinServer.asmx/GetSTOCKACCOUNTListExcel', data)