// JavaScript Document

/*
==============================================================================
  Copyright (c) 2009-2013 SHARP CORPORATION. All rights reserved.

  SHARP Project Name

  This software is protected under the Copyright Laws of the United States,
  Title 17 USC, by the Berne Convention, and the copyright laws of other
  countries.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDER ''AS IS'' AND ANY EXPRESS 
  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. 

==============================================================================
  File          : JS_1.js

  Module        : Easy Content Creator
                                                                             
  Owner         : Sharp Software Development India

  Author        : Baskaran V, Punith Kumar K

  Reference     :
===========================================================================
  Reviews 

  Sl#     Review Date     Reviewer(s)               Remarks
===========================================================================
*/

function GotoEditTemp()
{
	document.getElementById("SelectTempPart_Id").style.display= "none";
	document.getElementById("EditTempPart_Id").style.display= "inline";
	document.getElementById("SchedulePart_Id").style.display= "none";
	document.getElementById("DistributePart_Id").style.display= "none";
	
	document.getElementById("SelectTempText_Id").style.display= "none";
	document.getElementById("EditTempText_Id").style.display= "inline";
	document.getElementById("ScheduleText_Id").style.display= "none";
	document.getElementById("DistributeText_Id").style.display= "none";
	
	document.getElementById("Wiz_1_Id").className= "Wiz_1_UnselectedBg";
	document.getElementById("Wiz_2_Id").className= "Wiz_2_SelectedBg";
	document.getElementById("Wiz_3_Id").className= "Wiz_3_UnselectedBg";
	document.getElementById("Wiz_4_Id").className= "Wiz_4_UnselectedBg";
}

function GotoSelectTemp()
{
	document.getElementById("SelectTempPart_Id").style.display= "inline";
	document.getElementById("EditTempPart_Id").style.display= "none";
	document.getElementById("SchedulePart_Id").style.display= "none";
	document.getElementById("DistributePart_Id").style.display= "none";
	
	document.getElementById("SelectTempText_Id").style.display= "inline";
	document.getElementById("EditTempText_Id").style.display= "none";
	document.getElementById("ScheduleText_Id").style.display= "none";
	document.getElementById("DistributeText_Id").style.display= "none";
	
	document.getElementById("Wiz_1_Id").className= "Wiz_1_SelectedBg";
	document.getElementById("Wiz_2_Id").className= "Wiz_2_UnselectedBg";
	document.getElementById("Wiz_3_Id").className= "Wiz_3_UnselectedBg";
	document.getElementById("Wiz_4_Id").className= "Wiz_4_UnselectedBg";
}

function GotoSchedule()
{
	document.getElementById("SelectTempPart_Id").style.display= "none";
	document.getElementById("EditTempPart_Id").style.display= "none";
	document.getElementById("SchedulePart_Id").style.display= "inline";
	document.getElementById("DistributePart_Id").style.display= "none";
	
	document.getElementById("SelectTempText_Id").style.display= "none";
	document.getElementById("EditTempText_Id").style.display= "none";
	document.getElementById("ScheduleText_Id").style.display= "inline";
	document.getElementById("DistributeText_Id").style.display= "none";
	
	document.getElementById("Wiz_1_Id").className= "Wiz_1_UnselectedBg";
	document.getElementById("Wiz_2_Id").className= "Wiz_2_UnselectedBg";
	document.getElementById("Wiz_3_Id").className= "Wiz_3_SelectedBg";
	document.getElementById("Wiz_4_Id").className= "Wiz_4_UnselectedBg";
}

function GotoDistribute()
{
	document.getElementById("SelectTempPart_Id").style.display= "none";
	document.getElementById("EditTempPart_Id").style.display= "none";
	document.getElementById("SchedulePart_Id").style.display= "none";
	document.getElementById("DistributePart_Id").style.display= "inline";
	
	document.getElementById("SelectTempText_Id").style.display= "none";
	document.getElementById("EditTempText_Id").style.display= "none";
	document.getElementById("ScheduleText_Id").style.display= "none";
	document.getElementById("DistributeText_Id").style.display= "inline";
	
	document.getElementById("Wiz_1_Id").className= "Wiz_1_UnselectedBg";
	document.getElementById("Wiz_2_Id").className= "Wiz_2_UnselectedBg";
	document.getElementById("Wiz_3_Id").className= "Wiz_3_UnselectedBg";
	document.getElementById("Wiz_4_Id").className= "Wiz_4_SelectedBg";
}

function GotoPrevEditTemp()
{
	document.getElementById("SelectTempPart_Id").style.display= "none";
	document.getElementById("EditTempPart_Id").style.display= "inline";
	document.getElementById("SchedulePart_Id").style.display= "none";
	document.getElementById("DistributePart_Id").style.display= "none";
	
	document.getElementById("SelectTempText_Id").style.display= "none";
	document.getElementById("EditTempText_Id").style.display= "inline";
	document.getElementById("ScheduleText_Id").style.display= "none";
	document.getElementById("DistributeText_Id").style.display= "none";
	
	document.getElementById("Wiz_1_Id").className= "Wiz_1_UnselectedBg";
	document.getElementById("Wiz_2_Id").className= "Wiz_2_SelectedBg";
	document.getElementById("Wiz_3_Id").className= "Wiz_3_UnselectedBg";
	document.getElementById("Wiz_4_Id").className= "Wiz_4_UnselectedBg";
}

function GotoPrevSchedule()
{
	document.getElementById("SelectTempPart_Id").style.display= "none";
	document.getElementById("EditTempPart_Id").style.display= "none";
	document.getElementById("SchedulePart_Id").style.display= "inline";
	document.getElementById("DistributePart_Id").style.display= "none";
	
	document.getElementById("SelectTempText_Id").style.display= "none";
	document.getElementById("EditTempText_Id").style.display= "none";
	document.getElementById("ScheduleText_Id").style.display= "inline";
	document.getElementById("DistributeText_Id").style.display= "none";
	
	document.getElementById("Wiz_1_Id").className= "Wiz_1_UnselectedBg";
	document.getElementById("Wiz_2_Id").className= "Wiz_2_UnselectedBg";
	document.getElementById("Wiz_3_Id").className= "Wiz_3_SelectedBg";
	document.getElementById("Wiz_4_Id").className= "Wiz_4_UnselectedBg";
}

function Show_EditTempPart()
{
	document.getElementById("SelectTempPart_Id").style.display= "none";
	document.getElementById("EditTempPart_Id").style.display= "inline";
	document.getElementById("SchedulePart_Id").style.display= "none";
	document.getElementById("DistributePart_Id").style.display= "none";
	
	document.getElementById("SelectTempText_Id").style.display= "none";
	document.getElementById("EditTempText_Id").style.display= "inline";
	document.getElementById("ScheduleText_Id").style.display= "none";
	document.getElementById("DistributeText_Id").style.display= "none";
	
	document.getElementById("Wiz_1_Id").className= "Wiz_1_UnselectedBg";
	document.getElementById("Wiz_2_Id").className= "Wiz_2_SelectedBg";
	document.getElementById("Wiz_3_Id").className= "Wiz_3_UnselectedBg";
	document.getElementById("Wiz_4_Id").className= "Wiz_4_UnselectedBg";
}

function ShowSelectTemp()
{
	document.getElementById("SelectTempPart_Id").style.display= "inline";
	document.getElementById("EditTempPart_Id").style.display= "none";
	document.getElementById("SchedulePart_Id").style.display= "none";
	document.getElementById("DistributePart_Id").style.display= "none";
	
	document.getElementById("SelectTempText_Id").style.display= "inline";
	document.getElementById("EditTempText_Id").style.display= "none";
	document.getElementById("ScheduleText_Id").style.display= "none";
	document.getElementById("DistributeText_Id").style.display= "none";
	
	document.getElementById("Wiz_1_Id").className= "Wiz_1_SelectedBg";
	document.getElementById("Wiz_2_Id").className= "Wiz_2_UnselectedBg";
	document.getElementById("Wiz_3_Id").className= "Wiz_3_UnselectedBg";
	document.getElementById("Wiz_4_Id").className= "Wiz_4_UnselectedBg";
}

function ShowEditTemp()
{
	document.getElementById("SelectTempPart_Id").style.display= "none";
	document.getElementById("EditTempPart_Id").style.display= "inline";
	document.getElementById("SchedulePart_Id").style.display= "none";
	document.getElementById("DistributePart_Id").style.display= "none";
	
	document.getElementById("SelectTempText_Id").style.display= "none";
	document.getElementById("EditTempText_Id").style.display= "inline";
	document.getElementById("ScheduleText_Id").style.display= "none";
	document.getElementById("DistributeText_Id").style.display= "none";
	
	document.getElementById("Wiz_1_Id").className= "Wiz_1_UnselectedBg";
	document.getElementById("Wiz_2_Id").className= "Wiz_2_SelectedBg";
	document.getElementById("Wiz_3_Id").className= "Wiz_3_UnselectedBg";
	document.getElementById("Wiz_4_Id").className= "Wiz_4_UnselectedBg";
}

function ShowScheduleTemp()
{
	document.getElementById("SelectTempPart_Id").style.display= "none";
	document.getElementById("EditTempPart_Id").style.display= "none";
	document.getElementById("SchedulePart_Id").style.display= "inline";
	document.getElementById("DistributePart_Id").style.display= "none";
	
	document.getElementById("SelectTempText_Id").style.display= "none";
	document.getElementById("EditTempText_Id").style.display= "none";
	document.getElementById("ScheduleText_Id").style.display= "inline";
	document.getElementById("DistributeText_Id").style.display= "none";
	
	document.getElementById("Wiz_1_Id").className= "Wiz_1_UnselectedBg";
	document.getElementById("Wiz_2_Id").className= "Wiz_2_UnselectedBg";
	document.getElementById("Wiz_3_Id").className= "Wiz_3_SelectedBg";
	document.getElementById("Wiz_4_Id").className= "Wiz_4_UnselectedBg";
}

function ShowDistributeTemp()
{
	document.getElementById("SelectTempPart_Id").style.display= "none";
	document.getElementById("EditTempPart_Id").style.display= "none";
	document.getElementById("SchedulePart_Id").style.display= "none";
	document.getElementById("DistributePart_Id").style.display= "inline";
	
	document.getElementById("SelectTempText_Id").style.display= "none";
	document.getElementById("EditTempText_Id").style.display= "none";
	document.getElementById("ScheduleText_Id").style.display= "none";
	document.getElementById("DistributeText_Id").style.display= "inline";
	
	document.getElementById("Wiz_1_Id").className= "Wiz_1_UnselectedBg";
	document.getElementById("Wiz_2_Id").className= "Wiz_2_UnselectedBg";
	document.getElementById("Wiz_3_Id").className= "Wiz_3_UnselectedBg";
	document.getElementById("Wiz_4_Id").className= "Wiz_4_SelectedBg";
}

function HideHeaderFrame()
{
	document.getElementById("HideArrow_Header_Id").style.display= "none";
	document.getElementById("ShowArrow_Header_Id").style.display= "block";
		
	document.getElementById("Table1_Id").style.display= "none";
}

function ShowHeaderFrame()
{
	document.getElementById("ShowArrow_Header_Id").style.display= "none";
	document.getElementById("HideArrow_Header_Id").style.display= "block";
	
	document.getElementById("HideArrow_Content_Id").style.display= "none";
	document.getElementById("ShowArrow_Content_Id").style.display= "block";
	
	document.getElementById("HideArrow_Footer_Id").style.display= "none";
	document.getElementById("ShowArrow_Footer_Id").style.display= "block";
	
	document.getElementById("Table1_Id").style.display= "inline";
	document.getElementById("Table2_Id").style.display= "none";
	document.getElementById("Table3_Id").style.display= "none";
}

function HideContentFrame()
{
	document.getElementById("HideArrow_Content_Id").style.display= "none";
	document.getElementById("ShowArrow_Content_Id").style.display= "block";
		
	document.getElementById("Table2_Id").style.display= "none";
}

function ShowContentFrame()
{
	document.getElementById("ShowArrow_Content_Id").style.display= "none";
	document.getElementById("HideArrow_Content_Id").style.display= "block";
	
	document.getElementById("HideArrow_Header_Id").style.display= "none";
	document.getElementById("ShowArrow_Header_Id").style.display= "block";
	
	document.getElementById("HideArrow_Footer_Id").style.display= "none";
	document.getElementById("ShowArrow_Footer_Id").style.display= "block";
	
	document.getElementById("Table2_Id").style.display= "inline";
	document.getElementById("Table1_Id").style.display= "none";
	document.getElementById("Table3_Id").style.display= "none";
}

function HideFooterFrame()
{
	document.getElementById("HideArrow_Footer_Id").style.display= "none";
	document.getElementById("ShowArrow_Footer_Id").style.display= "block";
		
	document.getElementById("Table3_Id").style.display= "none";
}

function ShowFooterFrame()
{
	document.getElementById("ShowArrow_Footer_Id").style.display= "none";
	document.getElementById("HideArrow_Footer_Id").style.display= "block";
	
	document.getElementById("HideArrow_Content_Id").style.display= "none";
	document.getElementById("ShowArrow_Content_Id").style.display= "block";
	
	document.getElementById("HideArrow_Header_Id").style.display= "none";
	document.getElementById("ShowArrow_Header_Id").style.display= "block";
	
	document.getElementById("Table3_Id").style.display= "inline";
	document.getElementById("Table2_Id").style.display= "none";
	document.getElementById("Table1_Id").style.display= "none";
}


