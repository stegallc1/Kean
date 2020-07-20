  
SELECT 
        a.LINE,
        SUM(CASE WHEN RIGHT(a.SLOT, 7) = '12:00PM' THEN a.Total ELSE 0 END) AS [12:00],
        SUM(CASE WHEN RIGHT(a.SLOT, 7) = ' 4:00PM' THEN a.Total ELSE 0 END) AS [16:00],        
        SUM(a.Total) AS Total
FROM 
        (SELECT  
            b.id as "LINE", 
            count(*) "Total", 
            a.requested_time as "Slot"
        FROM 
            [SparcsN4].[dbo].[road_gate_appointment] a 
            JOIN [SparcsN4].[dbo].[ref_bizunit_scoped] b ON 
                a.line_op_gkey = b.gkey
        WHERE
            a.state in ('USED', 'CREATED') AND
            --a.requested_time > GETDATE() AND
            a.trans_type = 'DOM' AND
            a.requested_time BETWEEN convert(datetime, convert(varchar(10), getdate(), 110) + ' 07:00:00') AND convert(datetime, convert(varchar(10), getdate(), 110) + ' 16:00:00')
        Group by 
            b.id, 
            a.requested_time
        ) a


GROUP BY a.LINE

    
SELECT 
        a.LINE,
        SUM(CASE WHEN RIGHT(a.SLOT, 7) = '10:30PM' THEN a.Total ELSE 0 END) AS [22:30],
        SUM(CASE WHEN RIGHT(a.SLOT, 7) = ' 3:00AM' THEN a.Total ELSE 0 END) AS [03:00],
        SUM(a.Total) AS Total
FROM 
        (SELECT  
            b.id as "LINE", 
            count(*) "Total", 
            a.requested_time as "Slot"
        FROM 
            [SparcsN4].[dbo].[road_gate_appointment] a 
            JOIN [SparcsN4].[dbo].[ref_bizunit_scoped] b ON 
                a.line_op_gkey = b.gkey
        WHERE
            a.state in ('USED', 'CREATED') AND
            --a.requested_time > GETDATE() AND
            a.trans_type = 'DOM' AND
            (a.requested_time BETWEEN convert(datetime, convert(varchar(10), getdate(), 110) + ' 17:00:00') AND convert(datetime, convert(varchar(10), getdate(), 110) + ' 23:59:00') OR 
            a.requested_time BETWEEN convert(datetime, convert(varchar(10), getdate() +1, 110) + ' 00:00:00') AND convert(datetime, convert(varchar(10), getdate() +1, 110) + ' 04:00:00'))
        Group by 
            b.id, 
            a.requested_time
        ) a


GROUP BY a.LINE

    
SELECT 
        a.LINE,
        SUM(CASE WHEN RIGHT(a.SLOT, 7) = '12:00PM' THEN a.Total ELSE 0 END) AS [12:00],
        SUM(CASE WHEN RIGHT(a.SLOT, 7) = ' 4:00PM' THEN a.Total ELSE 0 END) AS [16:00],        
        SUM(a.Total) AS Total,
        CASE
            WHEN DATENAME(dw, GETDATE()) <> 'Friday' THEN DATEADD(d, +1,GetDATE()) 
            WHEN DATENAME(dw, GETDATE()) = 'Friday' THEN DATEADD(d, +3,GetDATE()) 
        END "Date"
FROM 
        (SELECT  
            b.id as "LINE", 
            count(*) "Total", 
            a.requested_time as "Slot"
        FROM 
            [SparcsN4].[dbo].[road_gate_appointment] a 
            JOIN [SparcsN4].[dbo].[ref_bizunit_scoped] b ON 
                a.line_op_gkey = b.gkey
        WHERE
            a.state in ('USED', 'CREATED') AND
            a.trans_type = 'DOM' AND
            ((DATENAME(dw, GETDATE()) <> 'Friday' AND a.requested_time BETWEEN convert(datetime, convert(varchar(10), Dateadd(d,1,getdate()), 110) + ' 07:00:00') AND convert(datetime, convert(varchar(10), Dateadd(d,1,getdate()), 110) + ' 16:00:00')) OR
            (DATENAME(dw, GETDATE()) = 'Friday' AND a.requested_time BETWEEN convert(datetime, convert(varchar(10), Dateadd(d,3,getdate()), 110) + ' 07:00:00') AND convert(datetime, convert(varchar(10), Dateadd(d,3,getdate()), 110) + ' 16:00:00'))
            )


            
        Group by 
            b.id, 
            a.requested_time
        ) a
GROUP BY 
    a.LINE

    
SELECT 
        a.LINE,
        SUM(CASE WHEN RIGHT(a.SLOT, 7) = '10:30PM' THEN a.Total ELSE 0 END) AS [22:30],
        SUM(CASE WHEN RIGHT(a.SLOT, 7) = ' 3:00AM' THEN a.Total ELSE 0 END) AS [03:00],
        SUM(a.Total) AS Total
FROM 
        (SELECT  
            b.id as "LINE", 
            count(*) "Total", 
            a.requested_time as "Slot"
        FROM 
            [SparcsN4].[dbo].[road_gate_appointment] a 
            JOIN [SparcsN4].[dbo].[ref_bizunit_scoped] b ON 
                a.line_op_gkey = b.gkey
        WHERE
            a.state in ('USED', 'CREATED') AND
            --a.requested_time > GETDATE() AND
            a.trans_type = 'DOM' AND


            ((DATENAME(dw, GETDATE()) <> 'Friday' AND (a.requested_time BETWEEN convert(datetime, convert(varchar(10), getdate()+1, 110) + ' 17:00:00') AND convert(datetime, convert(varchar(10), getdate()+1, 110) + ' 23:59:00') OR 
            a.requested_time BETWEEN convert(datetime, convert(varchar(10), getdate() +2, 110) + ' 00:00:00') AND convert(datetime, convert(varchar(10), getdate() +2, 110) + ' 04:00:00'))) OR
            (DATENAME(dw, GETDATE()) = 'Friday' AND (a.requested_time BETWEEN convert(datetime, convert(varchar(10), getdate()+3, 110) + ' 17:00:00') AND convert(datetime, convert(varchar(10), getdate()+3, 110) + ' 23:59:00') OR 
            a.requested_time BETWEEN convert(datetime, convert(varchar(10), getdate() +4, 110) + ' 00:00:00') AND convert(datetime, convert(varchar(10), getdate() +4, 110) + ' 04:00:00')))
            )


            
        Group by 
            b.id, 
            a.requested_time
        ) a


GROUP BY a.LINE






    SELECT  'EMPTY Appts by Line (' + DATENAME(dw, GETDATE())  + ', ' + DATENAME(m, GETDATE()) + ' ' + CAST(DATEPART(d, GETDATE()) AS varchar(20)) + ' 1st Shift)' AS Date, 100 AS Total

