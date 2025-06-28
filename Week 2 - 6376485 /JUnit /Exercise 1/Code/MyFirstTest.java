package junitdemo2;
import org.junit.Test;
import static org.junit.Assert.*;

public class MyFirstTest {

    @Test
    public void testAddition() {
        int expected = 4;
        int actual = 2 + 2;
        assertEquals(expected, actual);
    }
}

