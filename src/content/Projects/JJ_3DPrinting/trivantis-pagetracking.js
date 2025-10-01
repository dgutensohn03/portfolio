function PageTrackingObj(exp, titleName, cm, frame){
   this.VarTrivPageTracking = new Variable( 'VarTrivPageTracking', null, 0, cm, frame, exp, titleName, true );
   this.numPages = 0;
   this.publishTimeStamp = 0;
   this.title = null;
}

PageTrackingObj.prototype.InitPageTracking = function ( )
{
	var THIS = this;
	var pageTrackData = this.VarTrivPageTracking.getValue();
	var bDoInit = true;
	try {
	    if (pageTrackData && pageTrackData.length > 0 && pageTrackData != '~~~null~~~')
	    {
	        var topLevelSplit = pageTrackData.split('#');
	        if (topLevelSplit && topLevelSplit.length > 1)
            {
		        var arrIds = topLevelSplit[0].split(',');
		        var arrStatus = topLevelSplit[1].split('');
		        var bits = 4;
		        for( var i=0; i<arrIds.length; i++ )
		        {
			        var id = parseInt( '0x' + arrIds[i] );
			        var mask = 1<<(i%bits);
			        var status = ( parseInt('0x'+arrStatus[Math.floor(i/bits)] ) & mask ) == 0 ? 1 : 2;
			        var node = this.FindNode( this.title, id );
			        if( node )
				        node.v = status;
		        }
    		}
        }
    } catch (e) { }
}

PageTrackingObj.prototype.FindNode = function( node, id )
{
	if( node.id == id )
		return node;
	
	var match = null;
	if( typeof( node.c ) != 'undefined' ){
		for( var i=0; i<node.c.length; i++ ){
			match = this.FindNode( node.c[i], id );
			if( match != null )
				break;
		}
	}
	
	return match;
}

PageTrackingObj.prototype.InternalGetRangeStatus = function( node )
{
	if( node == null )
		return -1;
		
	if( typeof(node.c) == 'undefined' )
	{
		return node.v;
	}
	else
	{
		// we need to calculate
		if( node.v == 0 )
		{
			var bAllComplete = true;
			var bInprogress = false;
			for( var i=0; i<node.c.length; i++ )
			{
				var cnode = node.c[i];
				var status = this.InternalGetRangeStatus( cnode );
				if( status == 1 || status == 2 )
					bInprogress = true;
				if( status == 0 || status == 1)
					bAllComplete = false;
			}
			
			if( !node.t && bAllComplete )
				return 2;
			else if( bInprogress )
				return 1;
			else
				return 0;
		}
		else
			return node.v
			
	}
}

//returns a incomplete or inprogress or complete
PageTrackingObj.prototype.GetRangeStatus = function( id, bInit )
{
	var status = -1;
	if ( bInit ) 
		this.InitPageTracking();
	
	status = this.InternalGetRangeStatus( this.FindNode( this.title, id ) );
		
	if( status == 0)
		return 'notstarted';	
	else if( status == 1 )
		return 'inprogress';
		
	return 'complete';
}


PageTrackingObj.prototype.InternalSetRangeStatus=function( node, status )
{
	if( node == null )
		return;
	node.v = status;
	if( status == 0 && typeof(node.c)!='undefined')
	{
		for( var i=0; i<node.c.length; i++ )
			this.InternalSetRangeStatus( node.c[i], status ); 
	}
}

PageTrackingObj.prototype.SetRangeStatus = function( id, status /*0 or 1 or 2*/)
{
	this.InternalSetRangeStatus( this.FindNode(this.title, id), status );
	
	this.SavePageTracking();
}

PageTrackingObj.prototype.IterateTree = function( func )
{
	var stack = [];
	stack.push( this.title );
	var i = 0;
	while( stack.length > 0 )
	{
		var node = stack.shift();
		
		if( typeof(node.c) != 'undefined' )
			stack = node.c.concat(stack);
			
		//do the thing
		func( node, i, stack );
		i++;
	}	
}

PageTrackingObj.prototype.SavePageTracking = function()
{
	var hexVal = 0;
	var hexString = '';
	
	var arrayIds = [];
	var arrayStatus= [];
	
	this.IterateTree( function(node, i, stack){
		if( node.v != 0 )
		{
			arrayIds.push(node.id);
			arrayStatus.push(node.v);
		}
	});
	
	for( var i=0; i<arrayIds.length; i++ )
	{
		if( i!=0 ) hexString += ',';
		hexString += arrayIds[i].toString(16);
	}
	
	hexString += '#';
	
	var bits = 4;
	var num = 0;
	for( var i=0; i<arrayStatus.length; i++ )
	{
		var bit = arrayStatus[i] == 2 ? 1 : 0
		num |= bit << (i%bits);
		if( ((i+1)%bits==0) || ((i+1)==arrayStatus.length) )
		{
			hexString += num.toString(16);
			num = 0;
		}
	}
	
	this.VarTrivPageTracking.set(hexString);
}

PageTrackingObj.prototype.GetNumCompPages = function(childArray, countCompleted)
{
	//Pass in title.c to get all completed pages
	for(var idx = 0; idx < childArray.length; idx++ )
	{
		if(childArray[idx].c)
			countCompleted = this.GetNumCompPages(childArray[idx].c, countCompleted);
		else if( typeof(childArray[idx].c) == 'undefined')
		{
			var strStatus ='';
			strStatus = this.GetRangeStatus(childArray[idx].id);
			if (strStatus === 'complete')
				countCompleted++;
		}
	}
	return countCompleted;
}

var trivPageTracking = new PageTrackingObj(365,'3d_printing', 0, null);
trivPageTracking.numPages = 45;

trivPageTracking.publishTimeStamp = 202352517447;

trivPageTracking.title={id:1,v:0,c:[{id:118,v:0,c:[{id:27790,v:0,c:[{id:27791,v:0},{id:29363,v:0}]},{id:24503,v:0,c:[{id:24504,v:0}]},{id:32587,v:0,c:[{id:32588,v:0},{id:33299,v:0},{id:633109,v:0},{id:917338,v:0},{id:709565,v:0}]},{id:36210,v:0,c:[{id:718263,v:0},{id:730014,v:0},{id:744831,v:0},{id:751312,v:0},{id:760467,v:0},{id:762883,v:0},{id:764701,v:0},{id:766768,v:0},{id:771425,v:0},{id:772611,v:0},{id:785830,v:0},{id:718251,v:0}]},{id:47043,v:0,c:[{id:826640,v:0},{id:1038791,v:0},{id:1084943,v:0},{id:828932,v:0},{id:849614,v:0},{id:826801,v:0},{id:827431,v:0},{id:840543,v:0},{id:852479,v:0},{id:837727,v:0},{id:1096970,v:0},{id:833894,v:0},{id:859763,v:0},{id:826709,v:0}]},{id:49560,v:0,c:[{id:878302,v:0},{id:878214,v:0},{id:878863,v:0},{id:878807,v:0},{id:878724,v:0},{id:878645,v:0},{id:877766,v:0},{id:877755,v:0},{id:877729,v:0}]},{id:697751,v:0,c:[{id:697781,v:0},{id:740245,v:0}]}]}]};
