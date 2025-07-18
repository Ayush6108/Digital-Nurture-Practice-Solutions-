BEGIN
	FOR res IN (
		SELECT C.NAME, C.CUSTOMERID, L.LOANID, L.ENDDATE
		FROM LOANS L
		JOIN CUSTOMERS C ON L.CUSTOMERID = C.CUSTOMERID
		WHERE L.ENDDATE BETWEEN SYSDATE AND SYSDATE + 30
	) LOOP
		DBMS_OUTPUT.PUT_LINE(
			'Reminder: Customer ' || res.NAME ||
			' (ID: ' || res.CUSTOMERID || ') has a loan due on ' ||
			TO_CHAR(res.ENDDATE, 'YYYY-MM-DD')
		);
	END LOOP;
END;
/