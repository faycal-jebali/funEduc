import{E as Y,F as Ne,G as B,J as Ae,L as Pe,M as se,T as Z,c as Oe,x as Ie}from"./chunk-H7H6RDXH.js";import{$b as k,Aa as Te,Da as T,Fb as q,Gc as Me,Ib as P,Mb as E,Nb as M,Qa as Fe,Rb as h,Wb as K,Xb as O,Y as j,Zb as v,ac as b,bb as N,ca as ke,da as Q,db as R,fa as V,ib as A,ic as y,ja as a,k as De,l as Re,nb as F,oa as U,ob as W,p as re,pb as d,qb as u,r as ve,rb as $,ta as g,va as be,vc as Ee,wa as Se,wc as H,za as xe,zc as S}from"./chunk-6OGJQNIW.js";var Xe=[[["caption"]],[["colgroup"],["col"]],"*"],Je=["caption","colgroup, col","*"];function et(i,n){i&1&&O(0,2)}function tt(i,n){i&1&&(E(0,"thead",0),h(1,1),M(),E(2,"tbody",0),h(3,2)(4,3),M(),E(5,"tfoot",0),h(6,4),M())}function it(i,n){i&1&&h(0,1)(1,2)(2,3)(3,4)}var w=new V("CDK_TABLE");var ie=(()=>{class i{template=a(R);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,selectors:[["","cdkCellDef",""]]})}return i})(),oe=(()=>{class i{template=a(R);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,selectors:[["","cdkHeaderCellDef",""]]})}return i})(),Be=(()=>{class i{template=a(R);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,selectors:[["","cdkFooterCellDef",""]]})}return i})(),L=(()=>{class i{_table=a(w,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;constructor(){}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,o,r){if(t&1&&(v(r,ie,5),v(r,oe,5),v(r,Be,5)),t&2){let s;k(s=b())&&(o.cell=s.first),k(s=b())&&(o.headerCell=s.first),k(s=b())&&(o.footerCell=s.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",S],stickyEnd:[2,"stickyEnd","stickyEnd",S]},features:[y([{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:i}])]})}return i})(),X=class{constructor(n,e){e.nativeElement.classList.add(...n._columnCssClassName)}},ze=(()=>{class i extends X{constructor(){super(a(L),a(T))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[u]})}return i})();var je=(()=>{class i extends X{constructor(){let e=a(L),t=a(T);super(e,t);let o=e._table?._getCellRole();o&&t.nativeElement.setAttribute("role",o)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[u]})}return i})(),J=class{tasks=[];endTasks=[]},ee=new V("_COALESCED_STYLE_SCHEDULER"),le=(()=>{class i{_currentSchedule=null;_ngZone=a(Te);constructor(){}schedule(e){this._createScheduleIfNeeded(),this._currentSchedule.tasks.push(e)}scheduleEnd(e){this._createScheduleIfNeeded(),this._currentSchedule.endTasks.push(e)}_createScheduleIfNeeded(){this._currentSchedule||(this._currentSchedule=new J,this._ngZone.runOutsideAngular(()=>queueMicrotask(()=>{for(;this._currentSchedule.tasks.length||this._currentSchedule.endTasks.length;){let e=this._currentSchedule;this._currentSchedule=new J;for(let t of e.tasks)t();for(let t of e.endTasks)t()}this._currentSchedule=null})))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ke({token:i,factory:i.\u0275fac})}return i})();var ce=(()=>{class i{template=a(R);_differs=a(H);columns;_columnsDiffer;constructor(){}ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof z?e.headerCell.template:this instanceof de?e.footerCell.template:e.cell.template}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,features:[U]})}return i})(),z=(()=>{class i extends ce{_table=a(w,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(a(R),a(H))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",S]},features:[u,U]})}return i})(),de=(()=>{class i extends ce{_table=a(w,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(a(R),a(H))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",S]},features:[u,U]})}return i})(),ne=(()=>{class i extends ce{_table=a(w,{optional:!0});when;constructor(){super(a(R),a(H))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[u]})}return i})(),I=(()=>{class i{_viewContainer=a(A);cells;context;static mostRecentCellOutlet=null;constructor(){i.mostRecentCellOutlet=this}ngOnDestroy(){i.mostRecentCellOutlet===this&&(i.mostRecentCellOutlet=null)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,selectors:[["","cdkCellOutlet",""]]})}return i})(),ue=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=F({type:i,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,o){t&1&&h(0,0)},dependencies:[I],encapsulation:2})}return i})();var fe=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=F({type:i,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,o){t&1&&h(0,0)},dependencies:[I],encapsulation:2})}return i})(),Qe=(()=>{class i{templateRef=a(R);_contentClassName="cdk-no-data-row";constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,selectors:[["ng-template","cdkNoDataRow",""]]})}return i})(),He=["top","bottom","left","right"],ae=class{_isNativeHtmlTable;_stickCellCss;direction;_coalescedStyleScheduler;_isBrowser;_needsPositionStickyOnElement;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(n=>this._updateCachedSizes(n)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(n,e,t,o,r=!0,s=!0,l,c){this._isNativeHtmlTable=n,this._stickCellCss=e,this.direction=t,this._coalescedStyleScheduler=o,this._isBrowser=r,this._needsPositionStickyOnElement=s,this._positionListener=l,this._tableInjector=c,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(n,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(n);let t=[];for(let o of n)o.nodeType===o.ELEMENT_NODE&&t.push(o,...Array.from(o.children));this._afterNextRender({write:()=>{for(let o of t)this._removeStickyStyle(o,e)}})}updateStickyColumns(n,e,t,o=!0,r=!0){if(!n.length||!this._isBrowser||!(e.some(p=>p)||t.some(p=>p))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let s=n[0],l=s.children.length,c=this.direction==="rtl",f=c?"right":"left",_=c?"left":"right",C=e.lastIndexOf(!0),D=t.indexOf(!0),x,ge,we;r&&this._updateStickyColumnReplayQueue({rows:[...n],stickyStartStates:[...e],stickyEndStates:[...t]}),this._afterNextRender({earlyRead:()=>{x=this._getCellWidths(s,o),ge=this._getStickyStartColumnPositions(x,e),we=this._getStickyEndColumnPositions(x,t)},write:()=>{for(let p of n)for(let m=0;m<l;m++){let Ce=p.children[m];e[m]&&this._addStickyStyle(Ce,f,ge[m],m===C),t[m]&&this._addStickyStyle(Ce,_,we[m],m===D)}this._positionListener&&x.some(p=>!!p)&&(this._positionListener.stickyColumnsUpdated({sizes:C===-1?[]:x.slice(0,C+1).map((p,m)=>e[m]?p:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:D===-1?[]:x.slice(D).map((p,m)=>t[m+D]?p:null).reverse()}))}})}stickRows(n,e,t){if(!this._isBrowser)return;let o=t==="bottom"?n.slice().reverse():n,r=t==="bottom"?e.slice().reverse():e,s=[],l=[],c=[];this._afterNextRender({earlyRead:()=>{for(let f=0,_=0;f<o.length;f++){if(!r[f])continue;s[f]=_;let C=o[f];c[f]=this._isNativeHtmlTable?Array.from(C.children):[C];let D=this._retrieveElementSize(C).height;_+=D,l[f]=D}},write:()=>{let f=r.lastIndexOf(!0);for(let _=0;_<o.length;_++){if(!r[_])continue;let C=s[_],D=_===f;for(let x of c[_])this._addStickyStyle(x,t,C,D)}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:l,offsets:s,elements:c}):this._positionListener?.stickyFooterRowsUpdated({sizes:l,offsets:s,elements:c})}})}updateStickyFooterContainer(n,e){this._isNativeHtmlTable&&this._afterNextRender({write:()=>{let t=n.querySelector("tfoot");t&&(e.some(o=>!o)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,!1))}})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(n,e){if(!n.classList.contains(this._stickCellCss))return;for(let o of e)n.style[o]="",n.classList.remove(this._borderCellCss[o]);He.some(o=>e.indexOf(o)===-1&&n.style[o])?n.style.zIndex=this._getCalculatedZIndex(n):(n.style.zIndex="",this._needsPositionStickyOnElement&&(n.style.position=""),n.classList.remove(this._stickCellCss))}_addStickyStyle(n,e,t,o){n.classList.add(this._stickCellCss),o&&n.classList.add(this._borderCellCss[e]),n.style[e]=`${t}px`,n.style.zIndex=this._getCalculatedZIndex(n),this._needsPositionStickyOnElement&&(n.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(n){let e={top:100,bottom:10,left:1,right:1},t=0;for(let o of He)n.style[o]&&(t+=e[o]);return t?`${t}`:""}_getCellWidths(n,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],o=n.children;for(let r=0;r<o.length;r++){let s=o[r];t.push(this._retrieveElementSize(s).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(n,e){let t=[],o=0;for(let r=0;r<n.length;r++)e[r]&&(t[r]=o,o+=n[r]);return t}_getStickyEndColumnPositions(n,e){let t=[],o=0;for(let r=n.length;r>0;r--)e[r]&&(t[r]=o,o+=n[r]);return t}_retrieveElementSize(n){let e=this._elemSizeCache.get(n);if(e)return e;let t=n.getBoundingClientRect(),o={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(n,o),this._resizeObserver.observe(n,{box:"border-box"})),o}_updateStickyColumnReplayQueue(n){this._removeFromStickyColumnReplayQueue(n.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(n)}_removeFromStickyColumnReplayQueue(n){let e=new Set(n);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(o=>!e.has(o));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(n){let e=!1;for(let t of n){let o=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};o.width!==this._elemSizeCache.get(t.target)?.width&&ot(t.target)&&(e=!0),this._elemSizeCache.set(t.target,o)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}_afterNextRender(n){this._tableInjector?Fe(n,{injector:this._tableInjector}):this._coalescedStyleScheduler.schedule(()=>{n.earlyRead?.(),n.write()})}};function ot(i){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(n=>i.classList.contains(n))}var te=new V("CDK_SPL");var he=(()=>{class i{viewContainer=a(A);elementRef=a(T);constructor(){let e=a(w);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,selectors:[["","rowOutlet",""]]})}return i})(),me=(()=>{class i{viewContainer=a(A);elementRef=a(T);constructor(){let e=a(w);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,selectors:[["","headerRowOutlet",""]]})}return i})(),ye=(()=>{class i{viewContainer=a(A);elementRef=a(T);constructor(){let e=a(w);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,selectors:[["","footerRowOutlet",""]]})}return i})(),_e=(()=>{class i{viewContainer=a(A);elementRef=a(T);constructor(){let e=a(w);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=d({type:i,selectors:[["","noDataRowOutlet",""]]})}return i})();var pe=(()=>{class i{_differs=a(H);_changeDetectorRef=a(Ee);_elementRef=a(T);_dir=a(Ie,{optional:!0});_platform=a(Oe);_viewRepeater=a(B);_coalescedStyleScheduler=a(ee);_viewportRuler=a(Ae);_stickyPositioningListener=a(te,{optional:!0,skipSelf:!0});_document=a(Me);_data;_onDestroy=new De;_renderRows;_renderChangeSubscription;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&this._switchDataSource(e)}_dataSource;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;contentChanged=new xe;viewChange=new Re({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;_injector=a(be);constructor(){a(new Se("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE"}ngOnInit(){this._setupStickyStyler(),this._dataDiffer=this._differs.find([]).create((e,t)=>this.trackBy?this.trackBy(t.dataIndex,t.data):t),this._viewportRuler.change().pipe(j(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._onDestroy.next(),this._onDestroy.complete(),Y(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(o,r,s)=>this._getEmbeddedViewArgs(o.item,s),o=>o.item.data,o=>{o.operation===Ne.INSERTED&&o.context&&this._renderCellTemplateForItem(o.record.item.rowDef,o.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(o=>{let r=t.get(o.currentIndex);r.context.$implicit=o.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let o=Le(this._headerRowOutlet,"thead");o&&(o.style.display=e.length?"":"none")}let t=this._headerRowDefs.map(o=>o.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,t,"top"),this._headerRowDefs.forEach(o=>o.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let o=Le(this._footerRowOutlet,"tfoot");o&&(o.style.display=e.length?"":"none")}let t=this._footerRowDefs.map(o=>o.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,t,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(o=>o.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),o=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this._fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...o],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((r,s)=>{this._addStickyColumnStyles([r],this._headerRowDefs[s])}),this._rowDefs.forEach(r=>{let s=[];for(let l=0;l<t.length;l++)this._renderRows[l].rowDef===r&&s.push(t[l]);this._addStickyColumnStyles(s,r)}),o.forEach((r,s)=>{this._addStickyColumnStyles([r],this._footerRowDefs[s])}),Array.from(this._columnDefsByName.values()).forEach(r=>r.resetStickyChanged())}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){let e=[],t=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=0;o<this._data.length;o++){let r=this._data[o],s=this._getRenderRowsForData(r,o,t.get(r));this._cachedRenderRowsMap.has(r)||this._cachedRenderRowsMap.set(r,new WeakMap);for(let l=0;l<s.length;l++){let c=s[l],f=this._cachedRenderRowsMap.get(c.data);f.has(c.rowDef)?f.get(c.rowDef).push(c):f.set(c.rowDef,[c]),e.push(c)}}return e}_getRenderRowsForData(e,t,o){return this._getRowDefs(e,t).map(s=>{let l=o&&o.has(s)?o.get(s):[];if(l.length){let c=l.shift();return c.dataIndex=t,c}else return{data:e,rowDef:s,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),G(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=G(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=G(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=G(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);!this.multiTemplateDataRows&&e.length>1,this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(s,l)=>{let c=!!l.getColumnsDiff();return s||c},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let o=this._headerRowDefs.reduce(e,!1);o&&this._forceRenderHeaderRows();let r=this._footerRowDefs.reduce(e,!1);return r&&this._forceRenderFooterRows(),t||o||r}_switchDataSource(e){this._data=[],Y(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;Y(this.dataSource)?e=this.dataSource.connect(this):ve(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=re(this.dataSource)),this._renderChangeSubscription=e.pipe(j(this._onDestroy)).subscribe(t=>{this._data=t||[],this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let o=Array.from(t?.columns||[]).map(l=>{let c=this._columnDefsByName.get(l);return c}),r=o.map(l=>l.sticky),s=o.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(e,r,s,!this._fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let o=0;o<e.viewContainer.length;o++){let r=e.viewContainer.get(o);t.push(r.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length==1)return[this._rowDefs[0]];let o=[];if(this.multiTemplateDataRows)o=this._rowDefs.filter(r=>!r.when||r.when(t,e));else{let r=this._rowDefs.find(s=>s.when&&s.when(t,e))||this._defaultRowDef;r&&o.push(r)}return o.length,o}_getEmbeddedViewArgs(e,t){let o=e.rowDef,r={$implicit:e.data};return{templateRef:o.template,context:r,index:t}}_renderRow(e,t,o,r={}){let s=e.viewContainer.createEmbeddedView(t.template,r,o);return this._renderCellTemplateForItem(t,r),s}_renderCellTemplateForItem(e,t){for(let o of this._getCellTemplates(e))I.mostRecentCellOutlet&&I.mostRecentCellOutlet._viewContainer.createEmbeddedView(o,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,o=e.length;t<o;t++){let s=e.get(t).context;s.count=o,s.first=t===0,s.last=t===o-1,s.even=t%2===0,s.odd=!s.even,this.multiTemplateDataRows?(s.dataIndex=this._renderRows[t].dataIndex,s.renderIndex=t):s.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let o=this._columnDefsByName.get(t);return e.extractCellTemplate(o)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,o)=>t||o.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr";this._stickyStyler=new ae(this._isNativeHtmlTable,this.stickyCssClass,e,this._coalescedStyleScheduler,this._platform.isBrowser,this.needsPositionStickyOnElement,this._stickyPositioningListener,this._injector),(this._dir?this._dir.change:re()).pipe(j(this._onDestroy)).subscribe(t=>{this._stickyStyler.direction=t,this.updateStickyColumnStyles()})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let o=this._noDataRowOutlet.viewContainer;if(t){let r=o.createEmbeddedView(e.templateRef),s=r.rootNodes[0];r.rootNodes.length===1&&s?.nodeType===this._document.ELEMENT_NODE&&(s.setAttribute("role","row"),s.classList.add(e._contentClassName))}else o.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=F({type:i,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,o,r){if(t&1&&(v(r,Qe,5),v(r,L,5),v(r,ne,5),v(r,z,5),v(r,de,5)),t&2){let s;k(s=b())&&(o._noDataRow=s.first),k(s=b())&&(o._contentColumnDefs=s),k(s=b())&&(o._contentRowDefs=s),k(s=b())&&(o._contentHeaderRowDefs=s),k(s=b())&&(o._contentFooterRowDefs=s)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(t,o){t&2&&q("cdk-table-fixed-layout",o.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",S],fixedLayout:[2,"fixedLayout","fixedLayout",S]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[y([{provide:w,useExisting:i},{provide:B,useClass:Z},{provide:ee,useClass:le},{provide:te,useValue:null}])],ngContentSelectors:Je,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,o){t&1&&(K(Xe),O(0),O(1,1),$(2,et,1,0)(3,tt,7,0)(4,it,4,0)),t&2&&(N(2),P(o._isServer?2:-1),N(),P(o._isNativeHtmlTable?3:4))},dependencies:[me,he,_e,ye],styles:[".cdk-table-fixed-layout{table-layout:fixed}"],encapsulation:2})}return i})();function G(i,n){return i.concat(Array.from(n))}function Le(i,n){let e=n.toUpperCase(),t=i.viewContainer.element.nativeElement;for(;t;){let o=t.nodeType===1?t.nodeName:null;if(o===e)return t;if(o==="TABLE")break;t=t.parentNode}return null}var Ve=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=W({type:i});static \u0275inj=Q({imports:[Pe]})}return i})();var nt=[[["caption"]],[["colgroup"],["col"]],"*"],rt=["caption","colgroup, col","*"];function st(i,n){i&1&&O(0,2)}function at(i,n){i&1&&(E(0,"thead",0),h(1,1),M(),E(2,"tbody",2),h(3,3)(4,4),M(),E(5,"tfoot",0),h(6,5),M())}function lt(i,n){i&1&&h(0,1)(1,3)(2,4)(3,5)}var $t=(()=>{class i extends pe{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(o){return(e||(e=g(i)))(o||i)}})();static \u0275cmp=F({type:i,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(t,o){t&2&&q("mdc-table-fixed-layout",o.fixedLayout)},exportAs:["matTable"],features:[y([{provide:pe,useExisting:i},{provide:w,useExisting:i},{provide:ee,useClass:le},{provide:B,useClass:Z},{provide:te,useValue:null}]),u],ngContentSelectors:rt,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,o){t&1&&(K(nt),O(0),O(1,1),$(2,st,1,0)(3,at,7,0)(4,lt,4,0)),t&2&&(N(2),P(o._isServer?2:-1),N(),P(o._isNativeHtmlTable?3:4))},dependencies:[me,he,_e,ye],styles:[".mat-mdc-table-sticky{position:sticky !important}mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}.mat-mdc-table{min-width:100%;border:0;border-spacing:0;table-layout:auto;white-space:normal;background-color:var(--mat-table-background-color, var(--mat-sys-surface))}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell{text-align:right}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px}.mat-mdc-header-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-header-container-height, 56px);color:var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));line-height:var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));font-size:var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));font-weight:var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500))}.mat-mdc-row{height:var(--mat-table-row-item-container-height, 52px);color:var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)))}.mat-mdc-row,.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));line-height:var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));font-weight:var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-footer-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-footer-container-height, 52px);color:var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));line-height:var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));font-weight:var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mat-mdc-header-cell{border-bottom-color:var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));font-weight:inherit;line-height:inherit;box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mat-mdc-header-cell{text-align:right}.mdc-data-table__row:last-child>.mat-mdc-header-cell{border-bottom:none}.mat-mdc-cell{border-bottom-color:var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));line-height:inherit}.mdc-data-table__row:last-child>.mat-mdc-cell{border-bottom:none}.mat-mdc-footer-cell{letter-spacing:var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking))}mat-row.mat-mdc-row,mat-header-row.mat-mdc-header-row,mat-footer-row.mat-mdc-footer-row{border-bottom:none}.mat-mdc-table tbody,.mat-mdc-table tfoot,.mat-mdc-table thead,.mat-mdc-cell,.mat-mdc-footer-cell,.mat-mdc-header-row,.mat-mdc-row,.mat-mdc-footer-row,.mat-mdc-table .mat-mdc-header-cell{background:inherit}.mat-mdc-table mat-header-row.mat-mdc-header-row,.mat-mdc-table mat-row.mat-mdc-row,.mat-mdc-table mat-footer-row.mat-mdc-footer-cell{height:unset}mat-header-cell.mat-mdc-header-cell,mat-cell.mat-mdc-cell,mat-footer-cell.mat-mdc-footer-cell{align-self:stretch}"],encapsulation:2})}return i})(),qt=(()=>{class i extends ie{static \u0275fac=(()=>{let e;return function(o){return(e||(e=g(i)))(o||i)}})();static \u0275dir=d({type:i,selectors:[["","matCellDef",""]],features:[y([{provide:ie,useExisting:i}]),u]})}return i})(),Kt=(()=>{class i extends oe{static \u0275fac=(()=>{let e;return function(o){return(e||(e=g(i)))(o||i)}})();static \u0275dir=d({type:i,selectors:[["","matHeaderCellDef",""]],features:[y([{provide:oe,useExisting:i}]),u]})}return i})();var Yt=(()=>{class i extends L{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=g(i)))(o||i)}})();static \u0275dir=d({type:i,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[y([{provide:L,useExisting:i},{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:i}]),u]})}return i})(),Zt=(()=>{class i extends ze{static \u0275fac=(()=>{let e;return function(o){return(e||(e=g(i)))(o||i)}})();static \u0275dir=d({type:i,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[u]})}return i})();var Gt=(()=>{class i extends je{static \u0275fac=(()=>{let e;return function(o){return(e||(e=g(i)))(o||i)}})();static \u0275dir=d({type:i,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[u]})}return i})();var Xt=(()=>{class i extends z{static \u0275fac=(()=>{let e;return function(o){return(e||(e=g(i)))(o||i)}})();static \u0275dir=d({type:i,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",S]},features:[y([{provide:z,useExisting:i}]),u]})}return i})();var Jt=(()=>{class i extends ne{static \u0275fac=(()=>{let e;return function(o){return(e||(e=g(i)))(o||i)}})();static \u0275dir=d({type:i,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[y([{provide:ne,useExisting:i}]),u]})}return i})(),ei=(()=>{class i extends ue{static \u0275fac=(()=>{let e;return function(o){return(e||(e=g(i)))(o||i)}})();static \u0275cmp=F({type:i,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[y([{provide:ue,useExisting:i}]),u],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,o){t&1&&h(0,0)},dependencies:[I],encapsulation:2})}return i})();var ti=(()=>{class i extends fe{static \u0275fac=(()=>{let e;return function(o){return(e||(e=g(i)))(o||i)}})();static \u0275cmp=F({type:i,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[y([{provide:fe,useExisting:i}]),u],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,o){t&1&&h(0,0)},dependencies:[I],encapsulation:2})}return i})();var ii=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=W({type:i});static \u0275inj=Q({imports:[se,Ve,se]})}return i})();export{$t as a,qt as b,Kt as c,Yt as d,Zt as e,Gt as f,Xt as g,Jt as h,ei as i,ti as j,ii as k};
